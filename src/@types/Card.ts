import { Button } from './Button';
import { Image } from './Image';
import { Information } from './Information';
import { PropertyTypes } from './PropertyTypes';

export interface Card {
  id: number;
  name: string;
  slug: string;
  type: PropertyTypes;
  image: Image;
  information: Information;
  button: Button;
  enterprise?: Image;
  label?: string;
}
