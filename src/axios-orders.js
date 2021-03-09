import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-2fc00-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;