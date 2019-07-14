#!/bin/bash

set -euC
cd $(dirname $0)

. ./env

curl -X GET \
    -H "authorization: Bearer ${TOKEN}" \
    "http://${HOST}:${PORT}/fetch" | jq .
