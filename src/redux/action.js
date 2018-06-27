import axios from 'axios';
import ApiUrl from '../config/apiUrl.js';

export function updateHeros(dispatch) {
    return axios.get(ApiUrl.herosUrl).then((res) => {
        dispatch({
            type: 'updateHeros',
            heros: res.data.data,
        });
    });
}

export function updateHeroVideo(dispatch) {
    return axios.get(ApiUrl.heroVideoUrl).then((res) => {
        dispatch({
            type: 'updateHeroVideo',
            heroVideo: res.data.data,
        });
    });
}

export function updateHeroStrategy(dispatch) {
    return axios.get(ApiUrl.heroStrategyUrl).then((res) => {
        dispatch({
            type: 'updateHeroStrategy',
            heroStrategy: res.data.data,
        });
    });
}

export function updateHeroDetail(dispatch, heroName) {
    return axios.get(`${ApiUrl.heroDetailUrl}/${heroName}`).then((res) => {
        console.log(res.data.data);
        dispatch({
            type: 'updateHeroDetail',
            heroDetail: res.data.data,
        });
    });
}