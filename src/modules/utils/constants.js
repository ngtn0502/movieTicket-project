// URL fetch movie
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

import bgPopcorn from '../../assets/img/bg-popcorn.jpg';
import cgv from '../../assets/img/cinema/cinema-picture/cgv.png';
import bhd from '../../assets/img/cinema/cinema-picture/bhd.png';
import lotte from '../../assets/img/cinema/cinema-picture/lotte.png';
import megaGs from '../../assets/img/cinema/cinema-picture/megaGs.png';
import cinestart from '../../assets/img/cinema/cinema-picture/cinestart.jpg';
import galaxy from '../../assets/img/cinema/cinema-picture/galaxy.jpg';

export const carouselBackground = bgPopcorn;
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
    id: '4',
    title: 'Phim hay',
    path: '/home',
  },
  {
    id: '3',
    title: 'FAQ',
    path: '/home',
  },
];

// Search part

export const movieCategory = [
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
    title: '14 May 2021',
  },
  {
    id: '2',
    value: 'kinh-di',
    title: '25 July 2021',
  },
  {
    id: '3',
    value: 'vien-tuong',
    title: '29 July 2021',
  },
  {
    id: '4',
    value: 'lang-man',
    title: '30 July 2021',
  },
];

export const movieHour = [
  {
    id: '0',
    value: 'all',
    title: '7:00',
  },
  {
    id: '1',
    value: 'hanh-dong',
    title: '9:00',
  },
  {
    id: '2',
    value: 'kinh-di',
    title: '11:00',
  },
  {
    id: '3',
    value: 'vien-tuong',
    title: '13:00',
  },
  {
    id: '4',
    value: 'lang-man',
    title: '18:00',
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

// map
export const mapCGV = <img src={cgv} alt="movie" />;

export const mapLotte = <img src={lotte} alt="movie" />;
export const mapBHD = <img src={bhd} alt="movie" />;
export const mapCineStar = <img src={cinestart} alt="movie" />;
export const mapGalaxy = <img src={galaxy} alt="movie" />;

export const mapMegaGS = <img src={megaGs} alt="movie" />;

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
