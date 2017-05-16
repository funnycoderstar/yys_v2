import axios from 'axios';
import ApiUrl from '../config/apiUrl.js';

export function updateHeros(dispatch) {
    return axios.get(ApiUrl.herosUrl).then((res) => {
        dispatch({
            type: 'updateHeros',
            heros: res.data,
        });
    });
}

export function updateHeroVideo(dispatch) {
    return axios.get(ApiUrl.heroVideoUrl).then((res) => {
        dispatch({
            type: 'updateHeroVideo',
            heroVideo: res.data,
        });
    });
}

export function updateHeroStrategy(dispatch) {
    return axios.get(ApiUrl.heroStrategyUrl).then((res) => {
        dispatch({
            type: 'updateHeroStrategy',
            heroStrategy: res.data,
        });
    });
}

export function updateHeroDetail(dispatch, heroName) {
    return axios.get(`${ApiUrl.heroDetailUrl}/${heroName}`).then((res) => {
        console.log(res.data);
        dispatch({
            type: 'updateHeroDetail',
            heroDetail: res.data,
        });
    });
}