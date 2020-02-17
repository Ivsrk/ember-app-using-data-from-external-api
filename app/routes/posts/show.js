import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        console.log("HKJHKhj",params)
        return this.store.find('post',params.id);
    },
    setupController(controller, model) {
        Ember.set(controller,"post",model)
    }
});
