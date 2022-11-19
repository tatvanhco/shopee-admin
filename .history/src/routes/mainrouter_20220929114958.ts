import { useRoutes } from 'react-router-dom';
import { Dashboard, ProductManager } from 'components/layout';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Statistical } from '../components/layout/statistical';
type route={
    path: string,
    element: {}
}
export const publicRouter:()=>route=()=>{}
