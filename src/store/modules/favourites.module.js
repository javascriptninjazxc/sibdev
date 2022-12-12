const favourites = {
    state: () => ({
        favouritesList: [
            // {
            //     id: 1,
            //     request: 'котейки ебутса',
            //     name: 'История котов',
            //     sorting: 'rating',
            //     maxResult: 25
            // }
        ]
    }),
    mutations: {
        pushFavourite(state, model) {
            // modal[0] - object
            // modal[1] - id storage

            const genId = (state.favouritesList.length + 1);

            state.favouritesList.push({
                id: genId,
                ...model[0]
            });

            const favouriteStorage = localStorage.getItem(`fav-${model[1]}`);

            if (favouriteStorage !== null) {
                localStorage.setItem(`fav-${model[1]}`, JSON.stringify([JSON.parse(favouriteStorage), { id: genId, ...model[0] }].flat()))
            } else {
                localStorage.setItem(`fav-${model[1]}`, JSON.stringify([{ id: genId, ...model[0] }]));
            }
        },
        setFavourites(state, favourites) {
            console.log(favourites);
            state.favouritesList = favourites;
        },
        deleteFavourite(state, { id, storageId }) {
            state.favouritesList = state.favouritesList.filter(r => r.id !== id);

            const favouriteStorage = localStorage.getItem(`fav-${storageId}`);

            if (JSON.parse(favouriteStorage).length === 1) {
                // Если элемент последний удаляем ключ
                localStorage.removeItem(`fav-${storageId}`);
            } else {
                // Удаляем по id
                const filterStorage = JSON.parse(favouriteStorage).filter(r => r.id !== id);
                localStorage.setItem(`fav-${storageId}`, JSON.stringify(filterStorage))
            }
        },
        editFavourite(state, favourite) {
            const findById = state.favouritesList.findIndex(r => r.id === favourite.id);
            state.favouritesList.splice(findById, 1, favourite)
        }
    }
}

export default favourites;