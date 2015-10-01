import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  date_added: DS.attr(),
  rating: DS.attr(),
  brewery: DS.belongsTo('review')
});
