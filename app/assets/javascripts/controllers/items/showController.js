App.ItemsShowController = Ember.ObjectController.extend({

  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionToRoute('items.index');
  }

});
