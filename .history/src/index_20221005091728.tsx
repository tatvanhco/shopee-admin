import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import '../tailwind.'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFound, PrivateRoute, PublicRoute } from 'components/common';
import {
    CatalogManager,
    CustomerManager,
    Dashboard,
    EmloyeeManager,
    InnerContent,
    InventoryManagement,
    ManageOrders,
    ProductManager,
} from 'components/layout';
import LoginPage from 'features/pages/auth/loginPage';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<PublicRoute />}>
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/" element={<InnerContent />}>
                            <Route path="/" element={<Navigate replace to="admin" />} />
                            <Route path="/admin" element={<App />}>
                                <Route path="/admin/dashboard" element={<Dashboard />} />
                                <Route path="/admin/catalogManager" element={<CatalogManager />} />
                                <Route path="/admin/customerManager" element={<CustomerManager />} />
                                <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
                                <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
                                <Route path="/admin/manageOrders" element={<ManageOrders />} />
                                <Route path="/admin/productManager" element={<ProductManager />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
