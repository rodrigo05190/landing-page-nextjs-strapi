import { Hero } from './Hero';
import { Icons } from './Icons';
import { Image } from './Image';
import { Localization } from './Information';
import { PropertyTypes } from './PropertyTypes';
import { Seo } from './Seo';

export interface Studios {
  id: number;
  name: string;
  slug: string;
  type: PropertyTypes;
  seo: Seo;
  hero: Hero;
  benefits: Benefits;
  localization: Localization;
  about: About;
  characteristics?: Characteristics[] | null;
  commonAreas?: Image[] | null;
  plans?: Image[] | null;
  is360?: boolean;
  hubid?: string;
  gtag?: string;
}

export interface Benefits {
  title: string;
  text: string;
}

export interface About {
  title: string;
  description: string;
  architectural: string;
  landscaped: string;
  decoration: string;
  facade?: Image;
}

export interface Characteristics {
  type: Icons;
  descriptions?: DescriptionsEntity[] | null;
}
export interface DescriptionsEntity {
  description: string;
}
