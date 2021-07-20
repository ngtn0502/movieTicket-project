// URL fetch movie
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

export const baseUrl = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim';
// Nav bar part
export const navBarLink = [
  {
    id: '1',
    title: 'Trang chủ',
    path: '/home',
  },
  {
    id: '2',
    title: 'Tin tức',
    path: '/news',
  },
  {
    id: '3',
    title: 'Ứng dụng',
    path: '/home',
  },
  {
    id: '4',
    title: 'Phim hay',
    path: '/home',
  },
];

// Search part

export const movieCategory = [
  {
    id: '0',
    value: 'all',
    title: 'Phim',
  },
  {
    id: '1',
    value: 'hanh-dong',
    title: 'Hành Động',
  },
  {
    id: '2',
    value: 'kinh-di',
    title: 'Kinh dị',
  },
  {
    id: '3',
    value: 'vien-tuong',
    title: 'Viễn Tưỡng',
  },
  {
    id: '4',
    value: 'lang-man',
    title: 'Lãng Mạn',
  },
];

export const movieCine = [
  {
    id: '0',
    value: 'all',
    title: 'Rạp',
  },
  {
    id: '1',
    value: 'hanh-dong',
    title: 'Hành Động',
  },
  {
    id: '2',
    value: 'kinh-di',
    title: 'Kinh dị',
  },
  {
    id: '3',
    value: 'vien-tuong',
    title: 'Viễn Tưỡng',
  },
  {
    id: '4',
    value: 'lang-man',
    title: 'Lãng Mạn',
  },
];

export const movieDate = [
  {
    id: '0',
    value: 'all',
    title: 'Ngày Xem',
  },
  {
    id: '1',
    value: 'hanh-dong',
    title: 'Hành Động',
  },
  {
    id: '2',
    value: 'kinh-di',
    title: 'Kinh dị',
  },
  {
    id: '3',
    value: 'vien-tuong',
    title: 'Viễn Tưỡng',
  },
  {
    id: '4',
    value: 'lang-man',
    title: 'Lãng Mạn',
  },
];

export const movieHour = [
  {
    id: '0',
    value: 'all',
    title: 'Suất chiếu',
  },
  {
    id: '1',
    value: 'hanh-dong',
    title: 'Hành Động',
  },
  {
    id: '2',
    value: 'kinh-di',
    title: 'Kinh dị',
  },
  {
    id: '3',
    value: 'vien-tuong',
    title: 'Viễn Tưỡng',
  },
  {
    id: '4',
    value: 'lang-man',
    title: 'Lãng Mạn',
  },
];

// Movie Detail part

export const movieDetailContent = [
  {
    id: 1,
    title: 'Đạo diễn:',
    content: 'Martin Wilson',
  },

  {
    id: 1,
    title: 'Diễn viên:',
    content:
      'Scarlett Johansson, Samuel l. Jackson, Jeremy Renner, Chris Evans, Mark Ruffalo, Chris Hem,...',
  },
  {
    id: 1,
    title: 'Thể loại:',
    content: 'Action, Thriller, Crime',
  },
  {
    id: 1,
    title: 'Định dạng:',
    content: '2D/Digitals',
  },
];

// Footer part

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'Contact',
    url: '/about',
  },
  {
    id: 3,
    text: 'News',
    url: '/project',
  },
  {
    id: 4,
    text: 'FAQ',
    url: '/contact',
  },
];

export const socials = [
  {
    id: 1,
    text: 'fb',
    url: 'https://www.facebook.com/thanhnhan99s/',
    image: <FaFacebookSquare />,
  },
  {
    id: 2,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaGithubSquare />,
  },
  {
    id: 3,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaTwitterSquare />,
  },
  {
    id: 4,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaLinkedin />,
  },
];
