import Axios from 'axios';

export interface User {
    em
}

export const getLogin = () => {
    return Axios.get('http://localhost:8000/api/admin/auth/signin')
        .then((response) => response.data)
        .catch((error) => error.response);
};
