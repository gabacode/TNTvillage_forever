#!/bin/bash

HOST="tnt_mongo"
DATABASE="tnt-forever"
COLLECTION="torrents"
DUMP="/dump/dump_release_tntvillage_2020-05-06.csv"

mongoimport --host ${HOST} --db ${DATABASE} --collection ${COLLECTION} --type csv --headerline --file ${DUMP} --mode=upsert

echo "db.torrents.createIndex({ TITOLO: 'text' })" | mongosh "mongodb://${HOST}/${DATABASE}"
echo "db.torrents.createIndex({ POST: 1 }, { unique: true })" | mongosh "mongodb://${HOST}/${DATABASE}"
