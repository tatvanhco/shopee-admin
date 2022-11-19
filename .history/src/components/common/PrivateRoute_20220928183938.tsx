import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const authValue = React.useContext(AuthContext);
    const { user, loading } = useAuth();
    React.useEffect(() => {}, [user, loading, authValue]);
    return (
        <Route
            {...rest}
            render={(props: JSX.IntrinsicAttributes) => {
                !loading ? user ? <Component {...props} /> : <Redirect to="/auth/login" /> : <LoadingPage />;
            }}
        />
    );
};
function useAuth(): { user: any; loading: any; } {
    throw new Error('Function not implemented.');
}

