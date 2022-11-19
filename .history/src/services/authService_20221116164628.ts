import Axios from 'axios';

export const getLogin = () => {
    return Axios.get('http://localhost:8000/api/admin/auth/signin')
}