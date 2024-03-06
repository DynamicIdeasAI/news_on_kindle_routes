import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import type { PostDataType } from '@dynamicideas/news-on-kindle-data-types';

interface FetchNewsRouteType extends BaseRouteType {
  get: FetchNewsRouteRequestType;
}

interface FetchNewsRouteRequestType extends BaseRequestType {
  channelId: string;
  newsUrl: string;
}

interface FetchNewsRouteResponseType extends BaseResponseType {
  post: PostDataType;
}

export type { FetchNewsRouteType, FetchNewsRouteRequestType, FetchNewsRouteResponseType };
