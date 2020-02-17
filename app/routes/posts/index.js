import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        console.log("This is in index post")
        return this.store.findAll('post');
    },
    setupController(controller, model) {
        this._super(controller, model);
        Ember.set(controller,"posts",model)
    }
});
