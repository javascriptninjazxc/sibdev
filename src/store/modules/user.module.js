import AuthService from "@/api/AuthService.js";

const user = {
    state: () => ({
        user: null
    }),
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        logout() {
            AuthService.logout();
        },
        getAccount(state, user) {
            state.user = user;
        }
    },
    actions: {
        async login({ commit }, user) {
            return AuthService.login(user).then(res => {
                if (typeof user === "object") {
                    commit('setUser', res);
                    return {
                        status: 200
                    };
                } else {
                    return {
                        status: 404,
                        msg: "User not found"
                    }
                }
            }).catch(err => Promise.reject(err));
        },
        async getAccount({ commit }, token) {
            return AuthService.getAccount(token).then(r => {
                if (typeof r === "object") {
                    commit('getAccount', r);
                    return {
                        status: 200
                    }
                }
            }).catch(err => Promise.reject(err))
        }
    }
}

export default user;