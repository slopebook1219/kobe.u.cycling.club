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
export type Album = {
  id: string;
  title: string;
  mainImage: Image;
  date: string;
  dateImages: Image[];
  content: string;
};
