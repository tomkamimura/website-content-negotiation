const fs = require('fs')
const YAML = require('yaml')
var express = require('express')

var argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const file = fs.readFileSync('./config/conneg.yml', 'utf8')
const config = YAML.parse(file)
var app = express()
if (config.compression) {
    console.log("Enabling compression");
    var compression = require('compression')
    app.use(compression())
} else {
    console.log("Compression not enabled");
}


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

const yml_base_dir = argv.dev_base ? argv.dev_base : config.base_dir
config.ns_definitions.forEach(ns_entry => {
    app.get(ns_entry.prefix, serveNegYaml(ns_entry, yml_base_dir))
});

app.listen(3000, function () {
    console.log(`OSLC content negotiation listening on port 3000!\nBase dir: ${yml_base_dir}`);
});
