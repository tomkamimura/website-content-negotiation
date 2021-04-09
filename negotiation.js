const fs = require('fs')
const YAML = require('yaml')
var compression = require('compression')
var express = require('express')

var app = express()
app.use(compression())

const file = fs.readFileSync('./config/conneg.yml', 'utf8')
const config = YAML.parse(file)


function serveNegYaml(ns_entry, base_dir) {
    return function (req, res) {
        // the order is important; it will be used unless the client uses q-values
        var rdfType = req.accepts(["application/ld+json", "text/turtle", 
            "application/rdf+xml", 'application/n-triples', "text/html"]);
        const fileMap = {
            'application/ld+json': ns_entry.files.jsonld,
            'text/turtle': ns_entry.files.turtle,
            'application/rdf+xml': ns_entry.files.rdfxml,
            'application/n-triples': ns_entry.files.ntriples,
        }
        if (rdfType === "text/html") {
            res.redirect(303, ns_entry.html_uri);
        } else if(rdfType) {
            // we can either do a 303 redirect OR send the file
            // res.redirect(303, baseURI + specName + extMap[rdfType]);
            res.sendFile(fileMap[rdfType], { root: base_dir });
        } else {
            res.status(406).send();
        }
    };
}

const yml_base_dir = config.base_dir
config.ns_definitions.forEach(ns_entry => {
    app.get(ns_entry.prefix, serveNegYaml(ns_entry, yml_base_dir))
});

app.listen(3000, function () {
    console.log('OSLC content negotiation listening on port 3000!');
});
