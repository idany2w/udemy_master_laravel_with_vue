export default {
    state: {
        lastSearch: {
            from: null,
            to: null,
        }
    },
    mutations: {
        setLastSearch(state, payload) {
            state.lastSearch = payload
        }

    },
    actions: {
        setLastSearch(context, payload) {
            context.commit('setLastSearch', payload);
            localStorage.setItem('setLastSearch', JSON.stringify(payload));
        },
        loadStoredState(context) {
            const lastSearch = localStorage.getItem('setLastSearch');
            if(lastSearch){
                context.commit('setLastSearch', JSON.parse(lastSearch))
            }
        }
    }
};