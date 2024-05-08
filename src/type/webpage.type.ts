import { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import { WebPageDataType } from '@dynamicideas/news-on-kindle-data-types';

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
  webpages: WebPageDataType[];
}

interface WebpagePostRequestType extends BaseRequestType {
  webpage: WebPageDataType;
}

interface WebpagePostResponseType extends BaseResponseType {}

export type {
  WebpageRouteType,
  WebpageGetRequestType,
  WebpageGetResponseType,
  WebpagePostRequestType,
  WebpagePostResponseType
};
