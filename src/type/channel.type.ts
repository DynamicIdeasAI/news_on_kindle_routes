import type { BaseRouteType, BaseRequestType, BaseResponseType } from '@dynamicideas/base-types';
import type {
  ChannelDataType,
  ChannelDomParserDataType,
  ChannelSubscriptionDataType
} from '@dynamicideas/news-on-kindle-data-types';

interface ChannelRouteType extends BaseRouteType {
  get: ChannelGetRequestType;
  post: ChannelPostRequestType;
  put: ChannelPutRequestType;
  delete: ChannelDeleteRequestType;
}

interface ChannelGetRequestType extends BaseRequestType {
  /**
   * Page index, starting from 0.
   */
  pageIndex: number;
  pageSize: number;
  isPublished?: boolean;
  isDeleted?: boolean;
  ids?: string[];
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

interface ChannelDeleteResponseType extends BaseResponseType {
  data: ChannelDataType[];
}

interface ChannelRouteType extends BaseRouteType {
  get: ChannelGetRequestType;
  post: ChannelPostRequestType;
  put: ChannelPutRequestType;
  delete: ChannelDeleteRequestType;
}

interface ChannelGetRequestType extends BaseRequestType {
  /**
   * Page index, starting from 0.
   */
  pageIndex: number;
  pageSize: number;
  isPublished?: boolean;
  isDeleted?: boolean;
  ids?: string[];
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

interface ChannelDeleteResponseType extends BaseResponseType {
  data: ChannelDataType[];
}

interface ChannelSubscriptionRouteType extends BaseRouteType {
  get: ChannelSubscriptionGetRequestType;
  post: ChannelSubscriptionPostRequestType;
  put: ChannelSubscriptionPutRequestType;
  delete: ChannelSubscriptionDeleteRequestType;
}

interface ChannelSubscriptionGetRequestType extends BaseRequestType {
  /**
   * Page index, starting from 0.
   */
  pageIndex: number;
  pageSize: number;
  userId: string;
}

interface ChannelSubscriptionGetResponseType extends BaseResponseType {
  data: ChannelSubscriptionDataType[];
}

interface ChannelSubscriptionPostRequestType extends BaseRequestType {
  data: ChannelSubscriptionDataType;
}

interface ChannelSubscriptionPostResponseType extends BaseResponseType {
  data: ChannelSubscriptionDataType;
}

interface ChannelSubscriptionPutRequestType extends BaseRequestType {
  data: ChannelSubscriptionDataType;
}

interface ChannelSubscriptionPutResponseType extends BaseResponseType {
  data: ChannelSubscriptionDataType;
}

interface ChannelSubscriptionDeleteRequestType extends BaseRequestType {
  ids: string[];
}

interface ChannelSubscriptionDeleteResponseType extends BaseResponseType {}

interface ChannelUrlExistenceRouteType extends BaseRouteType {
  get: ChannelUrlExistenceGetRequestType;
}

interface ChannelUrlExistenceGetRequestType extends BaseRequestType {
  url: string;
}

interface ChannelUrlExistenceGetResponseType extends BaseResponseType {
  data: { exists: boolean };
}

interface ChannelRssUrlExistenceRouteType extends BaseRouteType {
  get: ChannelRssUrlExistenceGetRequestType;
}

interface ChannelRssUrlExistenceGetRequestType extends BaseRequestType {
  rssUrl: string;
}

interface ChannelRssUrlExistenceGetResponseType extends BaseResponseType {
  data: { exists: boolean };
}

interface ChannelDomParserRouteType extends BaseRouteType {
  get: ChannelDomParserGetRequestType;
  post: ChannelDomParserPostRequestType;
  put: ChannelDomParserPutRequestType;
  delete: ChannelDomParserDeleteRequestType;
}

interface ChannelDomParserGetRequestType extends BaseRequestType {
  channelId?: string;
  ids?: string[];
  pageIndex?: number;
  pageSize?: number;
}

interface ChannelDomParserGetResponseType extends BaseResponseType {
  data: ChannelDomParserDataType[];
}

interface ChannelDomParserPostRequestType extends BaseRequestType {
  data: ChannelDomParserDataType;
}

interface ChannelDomParserPostResponseType extends BaseResponseType {
  data: ChannelDomParserDataType;
}

interface ChannelDomParserPutRequestType extends BaseRequestType {
  data: ChannelDomParserDataType;
}

interface ChannelDomParserPutResponseType extends BaseResponseType {
  data: ChannelDomParserDataType;
}

interface ChannelDomParserDeleteRequestType extends BaseRequestType {
  ids: string[];
}

interface ChannelDomParserDeleteResponseType extends BaseResponseType {
  data: ChannelDomParserDataType[];
}

export type {
  ChannelRouteType,
  ChannelGetRequestType,
  ChannelGetResponseType,
  ChannelPostRequestType,
  ChannelPostResponseType,
  ChannelPutRequestType,
  ChannelPutResponseType,
  ChannelDeleteRequestType,
  ChannelDeleteResponseType,
  ChannelSubscriptionRouteType,
  ChannelSubscriptionGetRequestType,
  ChannelSubscriptionGetResponseType,
  ChannelSubscriptionPostRequestType,
  ChannelSubscriptionPostResponseType,
  ChannelSubscriptionPutRequestType,
  ChannelSubscriptionPutResponseType,
  ChannelSubscriptionDeleteRequestType,
  ChannelSubscriptionDeleteResponseType,
  ChannelUrlExistenceRouteType,
  ChannelUrlExistenceGetRequestType,
  ChannelUrlExistenceGetResponseType,
  ChannelRssUrlExistenceRouteType,
  ChannelRssUrlExistenceGetRequestType,
  ChannelRssUrlExistenceGetResponseType,
  ChannelDomParserRouteType,
  ChannelDomParserGetRequestType,
  ChannelDomParserGetResponseType,
  ChannelDomParserPostRequestType,
  ChannelDomParserPostResponseType,
  ChannelDomParserPutRequestType,
  ChannelDomParserPutResponseType,
  ChannelDomParserDeleteRequestType,
  ChannelDomParserDeleteResponseType
};
