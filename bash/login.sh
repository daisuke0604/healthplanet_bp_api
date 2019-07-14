#!/bin/bash

set -euC

. ./env

curl -X POST \
    -H "Content-Type:application/json" \
    -d "{\"user\": \"${USER}\", \"pass\": \"${PASS}\"}" \
    "http://localhost:3001/login" | jq .

