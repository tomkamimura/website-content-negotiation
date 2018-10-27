var express = require('express');
var app = express();

var baseDir = '/var/www/oslc.co/public/ns/';

// base of the URI that gets prepended to the redirects
// var baseURI = 'https://open-services.net/ns/';
var baseURI = '/ns/';

// just a map to avoid repeating constants
const extMap = {
    'application/ld+json': '.jsonld',
    'text/turtle': '.ttl',
    'application/rdf+xml': '.rdf',
}

function serveNeg(specName, htmlRedir) {
    return function (req, res) {
        // the order is important; it will be used unless the client uses q-values
        var rdfType = req.accepts(["application/ld+json", "text/turtle", "application/rdf+xml", "text/html"]);
        console.log(rdfType);
        if (rdfType === "text/html") {
            res.redirect(303, htmlRedir);
        } else if(rdfType) {
            // we can either do a 303 redirect OR send the file
            // res.redirect(303, baseURI + specName + extMap[rdfType]);
            res.sendFile(specName + extMap[rdfType], { root: baseDir });
        } else {
            res.status(406).send();
        }
    };
}

app.get('/ns/core', serveNeg('core/core-vocab', 'http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part7-core-vocabulary.html'));

app.get('/ns/config', serveNeg('config/config-vocab', 'https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/config/config-vocab.html'));

app.get('/ns/cm', serveNeg('cm/change-mgt-vocab', 'http://docs.oasis-open.org/oslc-domains/cm/v3.0/cm-v3.0-part2-change-mgt-vocab.html'));

app.get('/ns/rm', serveNeg('rm/requirements-management-vocab', 'https://rawcdn.githack.com/oasis-tcs/oslc-domains/6bb8484024b2eaeb26f87b0d2d3a168039629c2e/rm/requirements-management-vocab.html'));

app.get('/ns/qm', serveNeg('qm/qm', 'https://rawcdn.githack.com/oasis-tcs/oslc-domains/6bb8484024b2eaeb26f87b0d2d3a168039629c2e/qm/quality-management-vocab.html'));

app.get('/ns/am', serveNeg('am/architecture-management-vocab', 'https://rawcdn.githack.com/oasis-tcs/oslc-domains/6bb8484024b2eaeb26f87b0d2d3a168039629c2e/am/architecture-management-vocab.html'));

app.get('/ns/asset', serveNeg('asset/asset-management-vocab', 'https://rawcdn.githack.com/oasis-tcs/oslc-domains/6bb8484024b2eaeb26f87b0d2d3a168039629c2e/asset/asset-management-vocab.html'));

app.get('/ns/auto', serveNeg('auto/automation-vocab', 'https://rawcdn.githack.com/oasis-tcs/oslc-domains/6bb8484024b2eaeb26f87b0d2d3a168039629c2e/auto/automation-vocab.html'));

app.get('/ns/perfmon', serveNeg('perfmon/performance-monitoring-vocab', 'https://rawcdn.githack.com/oasis-tcs/oslc-domains/6bb8484024b2eaeb26f87b0d2d3a168039629c2e/perfmon/performance-monitoring-vocab.html'));


app.listen(3000, function () {
    console.log('OSLC content negotiation listening on port 3000!');
});
