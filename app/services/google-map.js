import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    var map = new this.googleMaps.Map(container, options);
    var marker = new this.googleMaps.Marker({
      position: options.center,
      map: map
    });
    return {map: map};
  },

  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  }
});
