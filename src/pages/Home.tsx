// Outlet will tells React where to render its child routes.
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <div>
            Home
            <Outlet />
        </div>
    );
}

export default Home;
