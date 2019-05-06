"use strict";
const TrackPoint = require('./TrackPoint');

const parseTrack = track =>  {

  track = track[0].trkseg[0].trkpt;
  return track.map(t => {
    var elevation = t.ele[0],
        lat = t['$'].lat,
        lng = (t['$'].lng || t['$'].lon),
        timestamp = t.time[0],
        hr,
        cadence,
        power = 0,
        temperature;

    if(t.extensions) {
      var extensions = t.extensions[0];
      for(var k in extensions) {        
        var extension = extensions[k][0];

        if(k.indexOf('pwr:PowerInWatts') > -1) {
          power = extension._;
        } else {

          // Strava exports gpx
          if(typeof extension === 'object') {
            for(var k2 in extension) {
              if(k2.indexOf('hr') > -1) {
                hr = extension[k2][0];
              } else if(k2.indexOf('cadence') > -1 || k2.indexOf('cad') > -1) {
                cadence = extension[k2][0];
              } else if(k2.indexOf('power') > -1) {
                power = extension[k2][0];
              } else if(k2.indexOf('atemp') > -1) {
                temperature = extension[k2][0];
              }
            }
          } else {
              // topografix gpx
              if(k.indexOf('hr') > -1) {
                hr = extension;
              } else if(k.indexOf('cadence') > -1) {
                cadence = extension;
              } else if(k.indexOf('power') > -1) {
                power = extension;
              } else if(k2.indexOf('atemp') > -1) {
                temperature = extension[k2][0];
              }
          }
        }
      }
    }

    return new TrackPoint(elevation, lat, lng, timestamp, hr, cadence, power, temperature);
  });
};

module.exports = parseTrack;
