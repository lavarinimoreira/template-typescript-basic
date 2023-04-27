import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { GlobalStyle } from './styles/global';
import { Theme } from './styles/Theme';

function App() {
    return (
        <Theme>
            <RouterProvider router={router} />
            <Outlet />
            <GlobalStyle />
        </Theme>
    );
}

export default App;
