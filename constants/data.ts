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
