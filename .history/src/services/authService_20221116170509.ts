import Axios from 'axios';

e

export const getLogin = () => {
    return Axios.get('http://localhost:8000/api/admin/auth/signin')
        .then((response) => response.data)
        .catch((error) => error.response);
};
