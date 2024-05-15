import App from './pages/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import KnowYourHost from './pages/KnowYourHost.jsx';
import KnowYourPlace from './pages/KnowYourPlace.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/kyp",
        element: <KnowYourPlace />
    },
    {
        path: "/kyh",
        element: <KnowYourHost />
    }
]);

const RouterContext = (props) => {
    return (
        <RouterProvider router={router}>
            <BrowserRouter>
                {props.children}
            </BrowserRouter>
        </RouterProvider>
    );
};

export default RouterContext;