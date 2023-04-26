import { Navigate, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Chess from "./Pages/Chess";

const routes = [
    {
        path: "",
        element: <Navigate to="/Home" />,
    },
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: "/Chess",
        element: <Chess />,
    },
    // {
    //     path: "/projects",
    //     children: [
    //         {
    //             path: "",
    //             element: (
    //                 <ProtectedRoute>
    //                     <Projects />
    //                 </ProtectedRoute>
    //             ),
    //         },
    //         {
    //             path: ":slug/edit",
    //             element: (
    //                 <ProtectedRoute>
    //                     <EditPage />
    //                 </ProtectedRoute>
    //             ),
    //         },
    //         {
    //             path: ":slug",
    //             element: (
    //                 <ProtectedRoute>
    //                     <SingleProject />
    //                 </ProtectedRoute>
    //             ),
    //         },
    //     ],
    // },
    // {
    //     path: "/add",
    //     element: (
    //         <ProtectedRoute>
    //             <AddProject />
    //         </ProtectedRoute>
    //     ),
    // },
    // {
    //     path: "/login",
    //     element: <Login />,
    // },
];

const Routes = () => useRoutes(routes);

export default Routes;
