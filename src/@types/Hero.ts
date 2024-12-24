import { Image, ImageMobile } from './Image';
import { Information } from './Information';

export interface Hero {
  id: number;
  title: string;
  type: string;
  label: string;
  button: string;
  image: Image;
  imageMobile: ImageMobile;
}

export interface InternalHeroProps {
  image: Image;
  information: Information;
  enterprise?: Image;
  label?: string;
}
