import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function getAll(): Promise<Good[]> {
  return wait(250)
    .then(() => fetch(API_URL))
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then((goods) => goods
      .sort(({ name: currentGood }, { name: nextGood }) => (
        currentGood.localeCompare(nextGood)
      ))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then((goods) => goods.filter(({ color }) => color === 'red'));
};