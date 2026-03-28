import type { Image } from '@/app/type';
export type Section = {
  image: Image;
  content: string;
};
type Days = {
  coverImage: Image;
  section: Section;
  dayNumber: string;
};
export type Album = {
  id: string;
  title: string;
  mainImage: Image;
  start: string;
  end: string;
  content: string;
  days: Days[];
};
