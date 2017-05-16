export function updateHeros(heros) {
    return {
        type: 'updateHeros',
        heros,
    };
}

export function updateHeroVideo(heroVideo) {
    return {
        type: 'updateHeroVideo',
        heroVideo,
    };
}

export function updateHeroStrategy(heroStrategy) {
    return {
        type: 'updateHeroStrategy',
        heroStrategy,
    };
}

export function updateHeroDetail(heroDetails) {
    return {
        type: 'updateHeroDetail',
        heroDetails,
    };
}
