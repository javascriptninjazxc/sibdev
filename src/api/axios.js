import axios from 'axios';
const YouTube_API = "AIzaSyADPNoSTc5KkHLCSOHJwo83H9IaY9cEwfs"

const instance = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${YouTube_API}`,
    secondaryURL: "http://localhost:3000",
    timeout: 1200
});

// Просто API YT начинает тупить и возникают проблемы, что приходится тыкать пару раз

export default instance;