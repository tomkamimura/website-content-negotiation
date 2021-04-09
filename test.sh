#!/usr/bin/env bash

set -eExuo pipefail
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

URI_BASE="http://localhost:3000"
# URI_BASE="http://open-services.net"

function cleanup_on_exit {
    echo "${red}SOME TESTS FAILED${reset}"
}
trap cleanup_on_exit ERR


function test_ns() {
    curl -s --fail-with-body -H "Accept: text/turtle" -L "${URI_BASE}/$1" > /dev/null
    curl -s --fail-with-body -H "Accept: application/rdf+xml" -L "${URI_BASE}/$1" > /dev/null
    curl -s --fail-with-body -H "Accept: application/n-triples" -L "${URI_BASE}/$1" > /dev/null
    curl -s --fail-with-body -H "Accept: application/ld+json" -L "${URI_BASE}/$1" > /dev/null
    curl -s --fail-with-body --compressed -H "Accept: text/turtle;q=1.0,application/rdf+xml;q=0.8,application/n-triples;q=0.2,application/ld+json;q=0.1" -L "${URI_BASE}/$1" > /dev/null
    curl -s --fail-with-body -H "Accept: text/html;q=1.0,text/*;q=0.8" -L "${URI_BASE}/$1" > /dev/null
}

test_ns "ns/core"
test_ns "ns/config"
test_ns "ns/cm"
test_ns "ns/rm"
test_ns "ns/qm"
test_ns "ns/am"
test_ns "ns/asset"
test_ns "ns/auto"
test_ns "ns/perfmon"
test_ns "ns/ems"

echo "${green}ALL TESTS PASSED${reset}"