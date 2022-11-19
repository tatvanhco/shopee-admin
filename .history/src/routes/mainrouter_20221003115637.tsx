import { PrivateRoute, PublicRoute } from 'components/common';
import {
    InnerContent,
    Statistical,
} from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';

const MianRouter = () => (
    <Routes>
        {/* <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="/admin/statistical" />} />
                <Route path="/admin/statistical" element={<Statistical />} />
                
            </Route>
        </Route>
        <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />}></Route>
        </Route>
        <Route path="/" element={<LoginPage />} /> */}
    </Routes>
);

export default MianRouter;
