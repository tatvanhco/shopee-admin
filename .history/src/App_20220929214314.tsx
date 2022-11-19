import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import SideBar from 'components/layout/Sidebar';

function App() {
    return (
        <div className="App">
            <SideBar />
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
