"use strict";

class TrackPoint {
    constructor(el, lat, lng, time, heartrate, cadence, power) {
        this.elevation = el;
        this.latitude = lat;
        this.longitude = lng;
        this.timestamp = time;
        this.heartrate = heartrate;
        this.cadence = cadence;
        this.power = power;
    }
}

module.exports = TrackPoint;
