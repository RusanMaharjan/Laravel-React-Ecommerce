import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
import Category from "../components/admin/Category";

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
    { path: '/admin/profile', exact: true, name: 'Profile', element: Profile },
    { path: '/admin/add-category', exact: true, name: 'Profile', element: Category },
];

export default routes;