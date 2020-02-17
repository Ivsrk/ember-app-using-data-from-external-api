import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        console.log("This is in user model")
        return this.store.query('post',{userId: params.id})
    },
    setupController(controller, model) {
        this._super(controller, model);
        Ember.set(controller,"users",model)
    }
});
