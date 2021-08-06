// URL fetch movie
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
// cinema picture
import bgPopcorn from '../../assets/img/bg-popcorn.jpg';
import cgv from '../../assets/img/cinema/cinema-picture/cgv.png';
import bhd from '../../assets/img/cinema/cinema-picture/bhd.png';
import lotte from '../../assets/img/cinema/cinema-picture/lotte.png';
import megaGs from '../../assets/img/cinema/cinema-picture/megaGs.png';
import cinestart from '../../assets/img/cinema/cinema-picture/cinestart.jpg';
import galaxy from '../../assets/img/cinema/cinema-picture/galaxy.jpg';
// cinema logo

import logobhd from '../../assets/img/cinema/bhd-star-cineplex.png';
import logocgv from '../../assets/img/cinema/cgv.png';
import logocinestart from '../../assets/img/cinema/cinestar.png';
import logogalaxy from '../../assets/img/cinema/galaxy-cinema.png';
import logolotte from '../../assets/img/cinema/lotte-cinema.png';
import logomegaGs from '../../assets/img/cinema/megags.png';

export const carouselBackground = bgPopcorn;
// import {
//   mapCGV,
//   mapLotte,
//   mapBHD,
//   mapCineStar,
//   mapGalaxy,
//   mapMegaGS,
//   logoCGV,
//   logoLotte,
//   logoBHD,
//   logoCineStar,
//   logoGalaxy,
//   logoMegaGS,
// } from '../../../utils/constants.js';
// Variants animate loading route

// For filtering list movie

export const toDay = new Date();

export const loadingVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
export const loadingVariants2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
export const loadingVariants3 = {
  hidden: {
    opacity: 0,
    // x: 200,
  },
  visible: {
    opacity: 1,
    // x: 0,
    transition: { duration: 1 },
  },
};

export const exitVariants = {
  opacity: 0,
  x: -200,
  transition: { duration: 0.5 },
};
/// ////////////////////////////HEADER/////////////////////////////////
// Nav bar part
export const navBarLink = [
  {
    id: '1',
    title: 'Trang chủ',
    goTo: '/home',
  },
  {
    id: '2',
    title: 'Tin tức',
    path: '#homePage__news',
    goTo: '/home',
  },
  {
    id: '3',
    title: 'Phim hay',
    path: '#homePage__movieList',
    goTo: '/home',
  },
  {
    id: '4',
    title: 'Đặt vé',
    path: '#homePage__booking',
    goTo: '/home',
  },
];

/// ////////////////////////////HOME PAGE/////////////////////////////////
// Search part
export const cityList = [
  {
    maCity: '1',
    tenCity: 'Thành phố Hồ Chí Minh',
  },
  {
    maCity: '2',
    tenCity: 'Hà Nội',
  },
  {
    maCity: '3',
    tenCity: 'Cần Thơ',
  },
  {
    maCity: '4',
    tenCity: 'Đà Nẵng',
  },
  {
    maCity: '5',
    tenCity: 'Vũng Tàu',
  },
  {
    maCity: '6',
    tenCity: 'Đà Lạt',
  },
];
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
/// ////////////////////////////MOVIE DETAIL PAGE/////////////////////////////////
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

// cinema picture
export const mapCGV = <img src={cgv} alt="movie" />;

export const mapLotte = <img src={lotte} alt="movie" />;
export const mapBHD = <img src={bhd} alt="movie" />;
export const mapCineStar = <img src={cinestart} alt="movie" />;
export const mapGalaxy = <img src={galaxy} alt="movie" />;

export const mapMegaGS = <img src={megaGs} alt="movie" />;

// cinema logo
export const logoCGV = <img src={logocgv} alt="movie" />;

export const logoLotte = <img src={logolotte} alt="movie" />;
export const logoBHD = <img src={logobhd} alt="movie" />;
export const logoCineStar = <img src={logocinestart} alt="movie" />;
export const logoGalaxy = <img src={logogalaxy} alt="movie" />;

export const logoMegaGS = <img src={logomegaGs} alt="movie" />;

/// ////////////////////////////BOOKING PAGE/////////////////////////////////

export const getCinema = (cinema) => {
  if (cinema === 'CGV') {
    return mapCGV;
  }
  if (cinema === 'LotteCinima') {
    return mapLotte;
  }
  if (cinema === 'BHDStar') {
    return mapBHD;
  }
  if (cinema === 'CineStar') {
    return mapCineStar;
  }
  if (cinema === 'Galaxy') {
    return mapGalaxy;
  }
  if (cinema === 'MegaGS') {
    return mapMegaGS;
  }
};

export const getCinemaLogo = (cinema) => {
  if (cinema === 'CGV') {
    return logoCGV;
  }
  if (cinema === 'LotteCinima') {
    return logoLotte;
  }
  if (cinema === 'BHDStar') {
    return logoBHD;
  }
  if (cinema === 'CineStar') {
    return logoCineStar;
  }
  if (cinema === 'Galaxy') {
    return logoGalaxy;
  }
  if (cinema === 'MegaGS') {
    return logoMegaGS;
  }
};

/// ////////////////////////////FOOTER/////////////////////////////////

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
