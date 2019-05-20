import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        gameActive: false,
        roundActive: false,
        dizes: []
    },
    mutations: {
        setGameActive(state, value){
            state.gameActive = value;
        },
        setRoundActive(state, value){
            state.roundActive = value;
        },
        setUserName(state, name){
            state.user.name = name;
            console.log(state.user.name);
        },
        nextTurn(state){
        }
    },
    getters: {
        getGameActive(state){
            return state.gameActive;
        },
        getRoundActive(state){
            return state.roundActive;
        },
        getUser(state){
            return state.user;
        }
    }
})