import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import type { PostDataType } from '@dynamicideas/news-on-kindle-data-types';

interface FetchNewsRouteType extends BaseRouteType {
  get: FetchNewsGetRequestType;
}

interface FetchNewsGetRequestType extends BaseRequestType {
  channelId: string;
  newsUrl: string;
}

interface FetchNewsGetResponseType extends BaseResponseType {
  data: PostDataType;
}

interface FetchAllNewsRouteType extends BaseRouteType {
  get: FetchAllNewsGetRequestType;
}

interface FetchAllNewsGetRequestType extends BaseRequestType {}

interface FetchAllNewsGetResponseType extends BaseResponseType {
  data: { channelId?: PostDataType[] };
}

export type {
  FetchNewsRouteType,
  FetchNewsGetRequestType,
  FetchNewsGetResponseType,
  FetchAllNewsRouteType,
  FetchAllNewsGetRequestType,
  FetchAllNewsGetResponseType
};
