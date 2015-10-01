import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('brewery');
  },
  actions: {
    addBrewery(params) {
      var brewery = this.store.createRecord('brewery', params);
      brewery.save();
      debugger;
      console.log('in save index.js')
      this.transitionTo('index');
    }
  }
});
