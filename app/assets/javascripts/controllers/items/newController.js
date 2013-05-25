App.ItemsNewController = Ember.ObjectController.extend({

  save: function() {
    var _this = this;
    return this.content.save().then(function() {
      return _this.transitionToRoute('items.show', _this.content);
    });
  },

  cancel: function() {
    this.content.deleteRecord();
    return this.transitionToRoute('items.index');
  },

  buttonTitle: 'Add Item'

});
