import {ImageSourcePropType} from 'react-native';

export interface PRODUCTS_DATA_I {
  id: number;
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  ratings: number;
  category: string;
  isLiked: boolean;
}
export const PRODUCTS_DATA: PRODUCTS_DATA_I[] = [
  {
    id: 2,
    title: 'Puppy',
    description:
      'Panda Plush Toy, the perfect cuddly companion for kids of all ages. Crafted with soft, high-quality materials, this huggable panda is sure to bring joy and smiles to any playtime adventure.',
    price: 20,
    image: require('../assets/images/puppy.png'),
    ratings: 5.0,
    category: 'Stuff Toy',
    isLiked: false,
  },
  {
    id: 3,
    title: 'Teddy Bear',
    description:
      'Panda Plush Toy, the perfect cuddly companion for kids of all ages. Crafted with soft, high-quality materials, this huggable panda is sure to bring joy and smiles to any playtime adventure.',
    price: 10,
    image: require('../assets/images/teddybear.png'),
    ratings: 5.0,
    category: 'Stuff Toy',
    isLiked: false,
  },
  {
    id: 4,
    title: 'Ball',
    description:
      'Panda Plush Toy, the perfect cuddly companion for kids of all ages. Crafted with soft, high-quality materials, this huggable panda is sure to bring joy and smiles to any playtime adventure.',
    price: 10,
    image: require('../assets/images/ball.png'),
    ratings: 3.0,
    category: 'Stuff Toy',
    isLiked: false,
  },
  {
    id: 5,
    title: 'Car',
    description:
      'Panda Plush Toy, the perfect cuddly companion for kids of all ages. Crafted with soft, high-quality materials, this huggable panda is sure to bring joy and smiles to any playtime adventure.',
    price: 10,
    image: require('../assets/images/car.png'),
    ratings: 3.0,
    category: 'Stuff Toy',
    isLiked: false,
  },
  {
    id: 0,
    title: 'Panda',
    description:
      'Panda Plush Toy, the perfect cuddly companion for kids of all ages. Crafted with soft, high-quality materials, this huggable panda is sure to bring joy and smiles to any playtime adventure.',
    price: 10,
    image: require('../assets/images/panda.png'),
    ratings: 4.9,
    category: 'Stuff Toy',
    isLiked: false,
  },
  {
    id: 1,
    title: 'Panda',
    description:
      'Panda Plush Toy, the perfect cuddly companion for kids of all ages. Crafted with soft, high-quality materials, this huggable panda is sure to bring joy and smiles to any playtime adventure.',
    price: 10,
    image: require('../assets/images/panda.png'),
    ratings: 4.9,
    category: 'Stuff Toy',
    isLiked: false,
  },
];

export interface TRENDY_PRODUCTS_I {
  id: number;
  title: string;
  subTitle: string;
  price: number;
}

export const TRENDY_PRODUCTS_DATA: TRENDY_PRODUCTS_I[] = [
  {
    id: 0,
    title: 'Ghorano Corka',
    subTitle: 'Popular Category',
    price: 20,
  },
  {
    id: 1,
    title: 'Ghorano Corka',
    subTitle: 'Popular Category',
    price: 30,
  },
  {
    id: 2,
    title: 'Ghorano Corka',
    subTitle: 'Popular Category',
    price: 40,
  },
  {
    id: 3,
    title: 'Ghorano Corka',
    subTitle: 'Popular Category',
    price: 40,
  },
  {
    id: 4,
    title: 'Ghorano Corka',
    subTitle: 'Popular Category',
    price: 40,
  },
];

export interface NOTIFICATIONS_I {
  id: number;
  image: ImageSourcePropType;
  description: string;
  date: any;
}

export const NOTIFICATIONS_DATA: NOTIFICATIONS_I[] = [
  {
    id: 0,
    image: require('../assets/images/teddybear.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '10:00AM',
  },
  {
    id: 1,
    image: require('../assets/images/teddybear.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '10:00AM',
  },
  {
    id: 2,
    image: require('../assets/images/teddybear.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '10:00AM',
  },
  {
    id: 3,
    image: require('../assets/images/teddybear.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '10:00AM',
  },
  {
    id: 4,
    image: require('../assets/images/teddybear.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '10:00AM',
  },
  {
    id: 5,
    image: require('../assets/images/teddybear.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '10:00AM',
  },
  {
    id: 6,
    image: require('../assets/images/teddybear.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '10:00AM',
  },
];

export interface MENU_LIST_I {
  id: number;
  title: string;
  icon: any;
}

export const MENU_LIST_DATA: MENU_LIST_I[] = [
  {
    id: 0,
    title: 'Account',
    icon: 'chevron-right',
  },
  {
    id: 1,
    title: 'Settings',
    icon: 'chevron-right',
  },
  {
    id: 2,
    title: 'Privacy Policy',
    icon: 'chevron-right',
  },
  {
    id: 3,
    title: 'Contact Us',
    icon: 'chevron-right',
  },
  {
    id: 4,
    title: 'Ask Help',
    icon: 'chevron-right',
  },
  {
    id: 5,
    title: 'Logout',
    icon: 'chevron-right',
  },
];

export interface SETTINGS_ITEMS_I {
  id: number;
  title: string;
  icon: any;
}

export const SETTINGS_ITEMS: SETTINGS_ITEMS_I[] = [
  {
    id: 0,
    title: 'Personal',
    icon: 'person-circle',
  },
  {
    id: 1,
    title: 'Privacy Policy',
    icon: 'lock-closed',
  },
  {
    id: 2,
    title: 'Contact Us',
    icon: 'phone-portrait-outline',
  },
  {
    id: 4,
    title: 'Export Data',
    icon: 'download',
  },
  {
    id: 5,
    title: 'Logout',
    icon: 'log-out',
  },
];
