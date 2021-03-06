import BookingPage from '../modules/main/pages/BookingPage.js';
import HomePage from '../modules/main/pages/HomePage';
import MovieDetailsPage from '../modules/main/pages/MovieDetailsPage.js';
import ProfilePage from '../modules/main/pages/ProfilePage.js';

export const mainRoutes = [
  {
    id: '1',
    path: '/home',
    exact: true,
    Component: <HomePage />,
  },
  {
    id: '2',
    path: '/movie-details/:id',
    exact: true,
    Component: <MovieDetailsPage />,
  },
  {
    id: '3',
    path: '/profile',
    exact: true,
    Component: <ProfilePage />,
  },
  {
    id: '4',
    path: '/profile/:transaction',
    exact: true,
    Component: <ProfilePage />,
  },
];

export const adminRoutes = [
  {
    path: '/dashboard',
    exact: true,
    Component: <HomePage />,
  },
  {
    path: '/movieManagement',
    exact: true,
    Component: <HomePage />,
  },
];
