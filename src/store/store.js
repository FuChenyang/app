import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	buycar:[],
	login:false

}
const mutations = {
	add(state,n){
		if (state.buycar.length == 0 ) {
			n.conut = 1;
			state.buycar.push(n);
		}else{
			state.buycar.forEach( function(element, index) {
				if (element.name == n.name) {
					n.conut+=1
				}else {
					n.conut = 1;
					state.buycar.push(n);
				}
			});
	
		}
		let aaa = Array.from(new Set(state.buycar))
  		state.buycar   =  aaa;
	},
	del(state,a){
		state.buycar.splice(a,1)
	},
	changelogin(state){
		state.login = true
	},
	 changejian(state,index){
    	state.buycar[index].conut-=1
    },
     changejia(state,index){
    	state.buycar[index].conut+=1
    }
    

}
const getters = {
    carnum:function(state){
        return state.buycar.length;
    }
}

const actions = {
	addjia({commit},n){
		commit('changejia',n)
	},
	rejian({commit},n){
		commit('changejian',n)
	}
}
 export default new Vuex.Store({
 	state,
 	mutations,
 	getters,
 	actions
 })