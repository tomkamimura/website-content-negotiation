var express = require('express');
var app = express();

var baseURL = '/var/www/oslc.co/public/ns/';

app.get('/ns/core/', function (req, res) {

var  file = 'core/core-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part7-core-vocabulary.html');
        }
        , 'application/rdf+xml': function () {
            res.res.redirect(303, "/ns/core/core-vocab.rdf");
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/config/', function (req, res) {

var  file = 'config/config-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/config/config-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/rm/', function (req, res) {

var  file = 'rm/requirements-management-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/rm/requirements-management-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/cm/', function (req, res) {

var  file = 'cm/change-mgt-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'http://docs.oasis-open.org/oslc-domains/cm/v3.0/cm-v3.0-part2-change-mgt-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/qm/', function (req, res) {

var  file = 'qm/qm';

    res.format({
        'text/html': function () {
            res.redirect(301, 'http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/qm/quality-management-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/am/', function (req, res) {

var  file = 'am/architecture-management-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/am/architecture-management-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/asset/', function (req, res) {

var  file = 'asset/asset-management-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/asset/asset-management-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/auto/', function (req, res) {

var  file = 'auto/automation-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/auto/automation-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.get('/ns/perfmon/', function (req, res) {

var  file = 'perfmon/performance-monitoring-vocab';

    res.format({
        'text/html': function () {
            res.redirect(301, 'https://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/perfmon/performance-monitoring-vocab.html');
	}
        , 'application/rdf+xml': function () {
            res.status(303).sendFile(file + '.rdf', { root: baseURL });
        }
        , 'application/ld+json': function () {
            res.status(303).sendFile(file + '.jsonld', { root: baseURL });
        }
        , 'text/turtle': function () {
            res.status(303).sendFile(file + '.ttl', { root: baseURL });
        }
	, 'default': function () {
            res.status(406).send();
        }
    });
});

app.listen(3000, function () {
    console.log('OSLC content negotiation listening on port 3000!');
});
