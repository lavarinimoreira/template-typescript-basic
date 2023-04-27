// Router settings.

/*----------------------------------------------------
 *
 * Visit
 * https://reactrouter.com/en/main/start/tutorial
 * for more details.
 *
 * ---------------------------------------------------*/

import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        // Error page.
        errorElement: <Error />,
        children: [
            { path: 'child', element: <div>Child</div> },
            // { path: '/about', element: <div>About</div> },
            // { path: '/projects', element: <div>Projects</div> },
            // { path: '/certificates', element: <div>Certificates</div> },
            // { path: '/gallery', element: <div>Gallery</div> },
            // { path: '/contact', element: <div>Contact</div> },
            // Nested routes - unique id - dynamic routes.
            // Ex:
            // {
            //     path: '/projects/:id',
            //     element: <div>Projects Details</div>,
            // },

            // Navigate to non existents pages.
            {
                path: 'portfolio', // For exemple, the portfolio path does not exist or for some reason was chaged.
                element: <Navigate to='/projects' />, // So here we define the new path that the user will be landing.
            },
        ],
    },
]);
