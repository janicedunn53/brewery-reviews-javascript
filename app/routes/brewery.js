import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('brewery', params.brewery_id);
  },
  actions: {
    delete(brewery) {
      var review_deletions = brewery.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return brewery.destroyRecord();
      })
      this.transitionTo('index');
    }
  }
});
