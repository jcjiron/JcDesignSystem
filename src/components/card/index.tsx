import Card from './card';

export interface CardImage {
  src: string;
  fallbackSrc: string;
  alt?: string;
  thumbnail?: string;
}

export { Card };
