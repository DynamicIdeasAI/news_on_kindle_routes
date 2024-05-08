import { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import { WebPageDataType } from '@dynamicideas/news-on-kindle-data-types';

interface WebPageRouteType extends BaseRouteType {
  get: WebPageGetRequestType;
  post: WebPagePostRequestType;
}

interface WebPageGetRequestType extends BaseRequestType {
  userIds?: string[];
  usernames?: string[];
  createdAfter?: Date;
  createdBefore?: Date;
}

interface WebPageGetResponseType extends BaseResponseType {
  webPages: WebPageDataType[];
}

interface WebPagePostRequestType extends BaseRequestType {
  webPage: WebPageDataType;
}

interface WebPagePostResponseType extends BaseResponseType {}

export type {
  WebPageRouteType,
  WebPageGetRequestType,
  WebPageGetResponseType,
  WebPagePostRequestType,
  WebPagePostResponseType
};
