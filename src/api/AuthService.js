import axios from '@/api/axios';

class AuthService {
    login({ login, password }) {
        return axios.get(`${axios.defaults.secondaryURL}/users?login=${login}&password=${password}`)
            .then(response => {
                if (response.data[0].accessToken) {
                    localStorage.setItem('jwt', response.data[0].accessToken);
                }
                return response.data[0];
            });
    }

    getAccount(token) {
        console.log(token);
        return axios.get(`${axios.defaults.secondaryURL}/users?accessToken=${token}`)
            .then(response => response.data[0])
            .catch(err => Promise.reject(err))
    }

    logout() {
        localStorage.removeItem('jwt');
        location.reload();
    }
}

export default new AuthService();

// возможно не очень правильно работаю с json server'ом, до этого не приходилось с ним работать. Работал с живым API