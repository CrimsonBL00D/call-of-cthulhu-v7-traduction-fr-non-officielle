Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'call-of-cthulhu-v7-traduction-fr-non-officielle',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});