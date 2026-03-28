import type { Image } from '@/app/type';
export type Member = {
  id: string;
  sei: string;
  mei: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  hometown: string;
  faculty: string;
  department: string;
  bike: string;
  hobby: string;
  grade: string;
  comment: string;
};
