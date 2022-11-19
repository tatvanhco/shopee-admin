// <Routes>
//                 <Route path="/" element={<PrivateRoute />}>
//                     <Route path="/" element={<InnerContent />}>
//                         <Route path="/" element={<Navigate replace to="admin" />} />
//                         <Route path="admin" element={<AdminLayout />}>
//                             {publicRouter.map((i: any) => (
//                                 <Route path={i.path} element={<i.element />} />
//                             ))}
//                         </Route>
//                     </Route>
//                 </Route>
//                 <Route path="/login" element={<PublicRoute />}>
//                     <Route path="/login" element={<LoginPage />} />
//                 </Route>

//                 <Route path="*" element={<Navigate to={'/login'} />} />
//             </Routes>
const MainRouter 