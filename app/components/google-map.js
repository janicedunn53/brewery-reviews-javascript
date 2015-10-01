import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(brewery) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(brewery.get('latitude'), brewery.get('longitude')),
        zoom: 15
      };
      // var marker = {
      //   position: this.get('map').center(brewery.get('latitude'), brewery.get('longitude')),
      // };
      // debugger;
      // this.get('map').addMarker(marker, this.get('map'));
      this.get('map').findMap(container, options);
    }
  }
});
