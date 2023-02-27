const getState = ({ setStore, getActions, getStore }) => {
    return {
        store: {
            favorite: []
        },
        actions: {
            addFavorite: (name) => {
                const { favorite } = getStore();
				if(!favorite.includes(name)){
                const newFavorites = [...favorite, name];
                setStore({ favorite: newFavorites });
				}

            },
            delFavorite:name=> {
                const  {favorite}  = getStore();
                const newFavorites = favorite.filter(item => item !== name);
                setStore({ favorite: newFavorites })
            }
        },

    };
};
export default getState;