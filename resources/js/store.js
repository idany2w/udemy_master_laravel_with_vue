export default {
    state: {
        lastSearch: {
            from: null,
            to: null,
        },
        basket: {
            items: []
        }
    },
    mutations: {
        setLastSearch(state, payload) {
            state.lastSearch = payload
        },
        addToBasket(state, payload) {
            state.basket.items.push(payload);
        },
        removeFromBasket(state, payload) {
            state.basket.items = state.basket.items.filter(item => item.bookable.id != payload)
        },

    },
    actions: {
        setLastSearch(context, payload) {
            context.commit('setLastSearch', payload);
            localStorage.setItem('setLastSearch', JSON.stringify(payload));
        },
        loadStoredState(context) {
            const lastSearch = localStorage.getItem('setLastSearch');
            if (lastSearch) {
                context.commit('setLastSearch', JSON.parse(lastSearch))
            }
        }
    },
    getters:{
        itemsInBakset: (state) => state.basket.items.length
    }
};