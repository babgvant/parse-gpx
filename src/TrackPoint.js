"use strict";

class TrackPoint {
    constructor(el, lat, lng, time, heartrate, cadence, power) {
        this.elevation = parseFloat(el);
        this.latitude = parseFloat(lat);
        this.longitude = parseFloat(lng);
        this.timestamp = time;
        this.heartrate = parseInt(heartrate);
        this.cadence = parseInt(cadence);
        this.power = parseInt(power);
    }
}

module.exports = TrackPoint;
