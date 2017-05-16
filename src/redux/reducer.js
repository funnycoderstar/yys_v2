import immutable from 'immutable';
// import { updateHeros } from './action.js';

const reducer = (state = immutable.fromJS({ heros: [], heroVideo: [], heroStrategy: [], heroDetail: [] }), action) => {
    switch (action.type) {
    case 'updateHeros': {
        return state.set('heros', action.heros);
    }
    case 'updateHeroVideo': {
        return state.set('heroVideo', action.heroVideo);
    }
    case 'updateHeroStrategy': {
        return state.set('heroStrategy', action.heroStrategy);
    }
    case 'updateHeroDetail': {
        // console.log(action.heroDetail);
        return state.set('heroDetail', action.heroDetail);
    }
    default: {
        return state;
    }
    }
};
export default reducer;