#!/bin/bash

set -euC
cd $(dirname $0)

. ./env

curl -v -X POST \
    -H "Content-Type:application/json" \
    -d "{\"user\": \"${USER}\", \"pass\": \"${PASS}\"}" \
    "http://${HOST}:${PORT}/login" | jq .
