import type { BaseRouteType, BaseRequestType, BaseResponseType } from '@dynamicideas/base-types';
import type { RssDataType } from '@dynamicideas/news-on-kindle-data-types';

interface RssRouteType extends BaseRouteType {
  get: RssGetRequestType;
}

interface RssGetRequestType extends BaseRequestType {
  rssUrl: string;
}

interface RssGetResponseType extends BaseResponseType {
  data: RssDataType;
}

export type { RssRouteType, RssGetRequestType, RssGetResponseType };
