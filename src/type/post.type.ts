import type { BaseRouteType, BaseRequestType, BaseResponseType } from '@dynamicideas/base-types';
import type { PostDataType } from '@dynamicideas/news-on-kindle-data-types';

interface PostRouteType extends BaseRouteType {
  get: PostGetRequestType;
  post: PostPostRequestType;
  put: PostPutRequestType;
  delete: PostDeleteRequestType;
}

interface PostGetRequestType extends BaseRequestType {
  pageIndex: number;
  pageSize: number;
  channelIds?: string[];
  ids?: string[];
  url?: string;
  isDeleted?: boolean;
}

interface PostGetResponseType extends BaseResponseType {
  data: PostDataType[];
}

interface PostPostRequestType extends BaseRequestType {
  data: PostDataType;
}

interface PostPostResponseType extends BaseResponseType {
  data: PostDataType;
}

interface PostPutRequestType extends BaseRequestType {
  data: PostDataType;
}

interface PostPutResponseType extends BaseResponseType {
  data: PostDataType;
}

interface PostDeleteRequestType extends BaseRequestType {
  ids: string[];
}

interface PostDeleteResponseType extends BaseResponseType {
  data: PostDataType[];
}

export type {
  PostRouteType,
  PostGetRequestType,
  PostGetResponseType,
  PostPostRequestType,
  PostPostResponseType,
  PostPutRequestType,
  PostPutResponseType,
  PostDeleteRequestType,
  PostDeleteResponseType
};
