import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentRegion: "all",
        countries: [
            { no: 1, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 2, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 3, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 4, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 5, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 6, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 7, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 8, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 9, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 10, name: "미국", capital: "워싱턴DC", region: "america" },
        ]
    },
    getters: {
        countriesByRegion(state) {
            if (state.currentRegion == "all") return state.countries;
            else return state.countries.filter(c => c.region == state.currentRegion);
        },
        regions(state) {
            var temp = state.countries.map((c) => c.region);
            temp = _.uniq(temp);
            temp.splice(0, 0, "all");
            return temp;
        },
        currentRegion(state) {
            return state.currentRegion;
        }
    },
    mutations: {
        [Constant.CHANGE_REGION]: (state, payload) => {
            state.currentRegion = payload.region;
        }
    }
})

export default store;