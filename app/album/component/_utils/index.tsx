import type { Album } from '@/app/album/type';
type ByYear = {
  album: Album[];
  year: string;
};
type ByWord = {
  album: Album[];
  word: string;
};
export function filterByYear({ album, year }: ByYear) {
  if (!year) return album;
  return album.filter((item) => item.start.startsWith(year));
}
export function filterByWord({ album, word }: ByWord) {
  if (!word) return album;
  return album.filter((items) => items.title.includes(word));
}
