import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import type { PostDataType } from '@dynamicideas/news-on-kindle-data-types';

interface FetchChannelNewsRouteType extends BaseRouteType {
  get: FetchChannelNewsGetRequestType;
}

interface FetchChannelNewsGetRequestType extends BaseRequestType {
  channelId: string;
}

interface FetchChannelNewsGetResponseType extends BaseResponseType {
  data: PostDataType[];
}

interface FetchAllChannelNewsRouteType extends BaseRouteType {
  get: FetchAllChannelNewsGetRequestType;
}

interface FetchAllChannelNewsGetRequestType extends BaseRequestType {}

interface FetchAllChannelNewsGetResponseType extends BaseResponseType {
  data: { channelId?: PostDataType[] };
}

export type {
  FetchChannelNewsRouteType,
  FetchChannelNewsGetRequestType,
  FetchChannelNewsGetResponseType,
  FetchAllChannelNewsRouteType,
  FetchAllChannelNewsGetRequestType,
  FetchAllChannelNewsGetResponseType
};
