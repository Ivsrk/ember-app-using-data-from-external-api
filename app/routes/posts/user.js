import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        console.log("Hi this is in user posts");
        return this.store.query('post',{userId: params.id})
    },
    setupController(controller, model) {
        this._super(controller, model);
        Ember.set(controller,"posts",model)
    }
    
});
