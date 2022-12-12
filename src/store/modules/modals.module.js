const favourites = {
    state: () => ({
        selectedModal: 'addFavourite'
    }),
    mutations: {
        addModal(state, payload) {
            state.selectedModal = payload;
        },
        hiddenModal(state) {
            state.selectedModal = null;
        }
    }
}

export default favourites;