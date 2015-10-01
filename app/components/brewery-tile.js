import Ember from 'ember';

export default Ember.Component.extend({
  addNewBrewery: false,

  actions: {
    addBrewery() {
      var params = {
        name: this.get('name'),
        city: this.get('city'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
      };
      this.set('addNewBrewery', false);
      this.sendAction('addBrewery', params);
    },
    breweryFormShow() {
      this.set('addNewBrewery', true);
    }
  }
});
