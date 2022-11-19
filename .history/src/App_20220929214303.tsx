
import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';

function App() {
    return (
        <div className="App">
            <MianRouter />
            {/* <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/" element={<Navigate replace to="admin" />}>
                        <Route path="/admin" element={<AdminLayout />} />
                    </Route>
                </Route>

                <Route path="/login" element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes> */}
        </div>
    );
}

export default App;
