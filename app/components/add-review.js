import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    addReview(brewery) {
      var params = {
        user: this.get('user'),
        content: this.get('content'),
        date_added: Date.now(),
        brewery: brewery
      };
      this.set('addNewReview', false);
      this.sendAction('addReview', params);
    },
    reviewFormShow() {
      this.set('addNewReview', true);
    }
  }
});
