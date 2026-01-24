export type Member = {
  id: string;
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  hometown: string;
  faculty: string;
  grade: string;
  comment: string;
};
type Image = {
  url: string;
  width: number;
  height: number;
};
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
