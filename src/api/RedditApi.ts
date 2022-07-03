import {redditApi} from '../shared/api';

export interface IReddit {
  id: string;
  title: string;
  thumbnail: string;
  author: string;
  num_comments: number;
  permalink: string;
  created_utc: number;
  score: number;
}
export interface IRedditData {
  data: {
    id: string;
    title: string;
    thumbnail: string;
    author: string;
    num_comments: number;
    permalink: string;
    created_utc: number;
    score: number;
  };
}
type TListReddit = {
  kind: string;
  data: {children: Array<IRedditData>};
};
export const getRedditList = async (
  type: string,
): Promise<Array<IRedditData>> => {
  const url = `/${type}.json`;
  try {
    const {data} = await redditApi.get<TListReddit>(url);
    return data.data.children;
  } catch (error) {
    console.log(error, 'request => getRedditList');
    return [];
  }
};
