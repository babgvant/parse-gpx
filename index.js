"use strict";

const xml2js = require('xml2js');
const fs = require('fs');
const parseTrack = require('./src/parseTrack');

function ParseFile(filename){
    return new Promise((res, rej) => {
        fs.readFile(filename,'utf8', (err, data) => {
            if(err) {
                rej(err);
                return;
            }

            ParseXml(data);
        });
    });
}

function ParseXml(data){
    return new Promise((res, rej) => {
        let parser = new xml2js.Parser();
        parser.parseString(data, (err, xml) => {
            if(err) {
                rej(err);
            } else {
                res(parseTrack(xml.gpx.trk));
            }
        });
    });
};

module.exports.ParseFile = ParseFile;
module.exports.ParseXml = ParseXml;