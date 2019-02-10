export default {

    getDistancePoints(lat1,lon1,lat2,lon2) {
        let R = 6371;
        let dLat = this.degRad(lat2-lat1);  // deg2rad below
        let dLon = this.degRad(lon2-lon1);
        let a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.degRad(lat1)) * Math.cos(this.degRad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        let d = R * c; // Distance in km
        return d;
    },

    degRad(deg) {
        return deg * (Math.PI/180)
    },

    addValues(a,b) {
        return a+b;
    }
}