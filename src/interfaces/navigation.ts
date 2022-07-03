import {RouteProp} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/routers';

export type CustomRouteProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> = RouteProp<ParamList, RouteName>;

export type HomeStackRoutes = {
  RedditDetail: {url: string};
};
