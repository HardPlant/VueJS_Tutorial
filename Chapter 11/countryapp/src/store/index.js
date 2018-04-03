import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentRegion: "all",
        countries: [
            { no: 1, name: "1", capital: "워싱턴DC", region: "america1" },
            { no: 2, name: "미국3", capital: "워싱턴DC", region: "amer2ica" },
            { no: 3, name: "미국4", capital: "워싱턴DC", region: "ameri3ca" },
            { no: 4, name: "미국5", capital: "워싱턴DC", region: "americ4a" },
            { no: 5, name: "미국7", capital: "워싱턴DC", region: "america5" },
            { no: 6, name: "미국8", capital: "워싱턴DC", region: "america6" },
            { no: 7, name: "미국9", capital: "워싱턴DC", region: "america87" },
            { no: 8, name: "미국0", capital: "워싱턴DC", region: "america9" },
            { no: 9, name: "미국-", capital: "워싱턴DC", region: "america1" },
            { no: 10, name: "미국1", capital: "워싱턴DC", region: "americ2a" },
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