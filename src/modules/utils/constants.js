// URL fetch movie
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

import bgPopcorn from '../../assets/img/bg-popcorn.jpg';

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
export const mapCGV = (
  <iframe
    title="cgv"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.435441945757!2d106.69976411474897!3d10.777923392320528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48779307a5%3A0x9ba2ed64e9e3ef7b!2zQ0dWIFZpbmNvbSDEkOG7k25nIEto4bufaQ!5e0!3m2!1sen!2s!4v1626956986828!5m2!1sen!2s"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  />
);

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
