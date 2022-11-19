import { useRoutes } from 'react-router-dom';
import { Dashboard, ProductManager } from 'components/layout';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Statistical } from '../components/statistical';

export const publicRouter = () => {
    return [
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
        <Route path="/admin/statistical" element={<Statistical />} />,
    ];
};
