App.Router.reopen({
  location: 'history',
  rootURL: '/'
});


//ROUTER
App.Router.map(function() {
  this.resource('items', function() {
    this.route('new');
    this.route('edit', {
      path: ':item_id/edit'
    });
    this.route('show', {
      path: ':item_id'
    });
  });
});


// SITE INDEX
App.IndexRoute = Ember.Route.extend();


// SONG ROUTES
App.ItemsRoute = Ember.Route.extend({
  model: function() {
    //alert("Model Firing");
    return App.Item.find();
  }
});
App.EditItemsRoute = Ember.Route.extend({
  model: function(params) {
    //alert("Edit Firing");
    return App.Item.find(params.item_id);
  }
});
App.ItemsNewRoute = App.ItemsRoute.extend({
  model: function() {
    //alert("New Firing");
    return App.Item.createRecord();
  }
});
App.ItemsShowRoute = Ember.Route.extend({
  model: function(params) {
    //alert("Template Firing");
    return App.Item.find(params.item_id);
  }
});
