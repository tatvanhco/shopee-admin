import Axios from 'axios';

export const getLogin = () => {
    return Axios.get('http://localhost:8000/api/admin/auth/signin')
        .then((response) => response.data)
        .then((response:) => {
            return response.data;
        })
        .catch((error) => error.response);
};
