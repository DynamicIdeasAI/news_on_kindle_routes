import { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import { WebpageDataType } from '@dynamicideas/news-on-kindle-data-types';

interface WebpageRouteType extends BaseRouteType {
  get: WebpageGetRequestType;
  post: WebpagePostRequestType;
}

interface WebpageGetRequestType extends BaseRequestType {
  userIds?: string[];
  usernames?: string[];
  createdAfter?: Date;
}

interface WebpageGetResponseType extends BaseResponseType {
  webpages: WebpageDataType[];
}

interface WebpagePostRequestType extends BaseRequestType {
  webpage: WebpageDataType;
}

interface WebpagePostResponseType extends BaseResponseType {}

export type {
  WebpageRouteType,
  WebpageGetRequestType,
  WebpageGetResponseType,
  WebpagePostRequestType,
  WebpagePostResponseType
};
