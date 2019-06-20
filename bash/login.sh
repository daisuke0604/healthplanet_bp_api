#!/bin/bash

set -euC

. ./env

curl -v -X POST \
    -H "Content-Type:application/json" \
    -d "{\"user\": \"${USER}\", \"pass\": \"${PASS}\"}" \
    "http://${HOST}:${PORT}/login"
