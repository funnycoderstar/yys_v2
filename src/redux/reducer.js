import immutable from 'immutable';
// import { updateHeros } from './action.js';

const reducer = (state = immutable.fromJS({ heros: [], heroVideo: [], heroStrategy: [] }), action) => {
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
    default: {
        return state;
    }
    }
};
export default reducer;