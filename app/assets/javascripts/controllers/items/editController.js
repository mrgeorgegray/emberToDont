App.ItemsEditController = Ember.ObjectController.extend({

  save: function() {
    var _this = this;
    return this.content.save().then(function() {
      return _this.transitionToRoute('items.show', _this.content);
    });
  },

  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionToRoute('items.show', this.content);
  },

  buttonTitle: 'Update'

});
