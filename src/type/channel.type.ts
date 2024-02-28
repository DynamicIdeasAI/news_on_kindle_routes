import type { BaseRouteType, BaseRequestType, BaseResponseType } from '@dynamicideas/base-types';
import type { ChannelDataType } from '@dynamicideas/news-on-kindle-data-types';

interface ChannelRouteType extends BaseRouteType {
  get: ChannelGetRequestType;
  post: ChannelPostRequestType;
  put: ChannelPutRequestType;
  delete: ChannelDeleteRequestType;
}

interface ChannelGetRequestType extends BaseRequestType {
  ids: string[];
}

interface ChannelGetResponseType extends BaseResponseType {
  data: ChannelDataType[];
}

interface ChannelPostRequestType extends BaseRequestType {
  data: ChannelDataType;
}

interface ChannelPostResponseType extends BaseResponseType {
  data: ChannelDataType;
}

interface ChannelPutRequestType extends BaseRequestType {
  data: ChannelDataType;
}

interface ChannelPutResponseType extends BaseResponseType {
  data: ChannelDataType;
}

interface ChannelDeleteRequestType extends BaseRequestType {
  ids: string[];
}

interface ChannelDeleteResponseType extends BaseResponseType {}

export type {
  ChannelRouteType,
  ChannelGetRequestType,
  ChannelGetResponseType,
  ChannelPostRequestType,
  ChannelPostResponseType,
  ChannelPutRequestType,
  ChannelPutResponseType,
  ChannelDeleteRequestType,
  ChannelDeleteResponseType
};
