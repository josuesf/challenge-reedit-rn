import Axios from 'axios';

export const redditApi = Axios.create({
  baseURL: 'https://api.reddit.com/r/pics',
});
