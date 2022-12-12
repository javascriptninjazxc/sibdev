import axios from '@/api/axios';


class YoutubeService {
    search({ searchValue, sorting = 'rating', maxResults = 12 }) {
        const params = {
            q: searchValue,
            order: sorting,
            maxResults: maxResults
        }
        return axios.get(`${axios.defaults.baseURL}`, { params: params }).then(response => {
            return response.data;
        }).catch(err => Promise.reject(err));
    }
}

export default new YoutubeService();