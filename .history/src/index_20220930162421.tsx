import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PublicRoute } from 'components/common';

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
                    <Route path='/'>

                    </Route>
                    <Route path="/admin" element={<App />}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
