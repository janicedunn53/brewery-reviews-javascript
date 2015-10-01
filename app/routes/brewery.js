import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('brewery', params.brewery_id);
  },
  actions: {
    addReview(params) {
      var newReview = this.store.createRecord('review', params);
      var brewery = params.brewery;
      brewery.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return brewery.save();
      });
      this.transitionTo('brewery', params.brewery);
    },

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
