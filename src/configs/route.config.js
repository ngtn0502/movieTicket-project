import BookingPage from '../modules/main/pages/BookingPage.js';
import HomePage from '../modules/main/pages/HomePage';
import MovieDetailsPage from '../modules/main/pages/MovieDetailsPage.js';
import NewsPage from '../modules/main/pages/NewsPages.js';

export const mainRoutes = [
  {
    path: '/home',
    exact: true,
    Component: <HomePage />,
  },
  {
    path: '/movie-details/:id',
    exact: true,
    Component: <MovieDetailsPage />,
  },
  {
    path: '/news',
    exact: true,
    Component: <BookingPage />,
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
