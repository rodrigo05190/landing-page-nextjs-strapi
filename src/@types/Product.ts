import { Image } from './Image';
import { Partnership } from './Partnership';
import { PropertyTypes } from './PropertyTypes';

export interface Product {
  url: string;
  occupation?: string | null;
  image: Image;
  enterprise?: Image;
  label?: string;
  title: string;
  deliveryDate: string;
  meters: string;
  partnership: Partnership;
  type?: PropertyTypes;
  gtag?:string;
}
