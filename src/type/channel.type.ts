import type { BaseRouteType, BaseRequestType, BaseResponseType } from '@dynamicideas/base-types';
import type {
  ChannelDataType,
  ChannelNewsParserDataType,
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
  refreshIndex?: number;
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
  userId?: string;
  channelIds?: string[];
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
  userId: string;
  subscriptionIds: string[];
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

interface ChannelNewsParserRouteType extends BaseRouteType {
  get: ChannelNewsParserGetRequestType;
  post: ChannelNewsParserPostRequestType;
  put: ChannelNewsParserPutRequestType;
  delete: ChannelNewsParserDeleteRequestType;
}

interface ChannelNewsParserGetRequestType extends BaseRequestType {
  channelId?: string;
  ids?: string[];
  pageIndex: number;
  pageSize: number;
}

interface ChannelNewsParserGetResponseType extends BaseResponseType {
  data: ChannelNewsParserDataType[];
}

interface ChannelNewsParserPostRequestType extends BaseRequestType {
  data: ChannelNewsParserDataType;
}

interface ChannelNewsParserPostResponseType extends BaseResponseType {
  data: ChannelNewsParserDataType;
}

interface ChannelNewsParserPutRequestType extends BaseRequestType {
  data: ChannelNewsParserDataType;
}

interface ChannelNewsParserPutResponseType extends BaseResponseType {
  data: ChannelNewsParserDataType;
}

interface ChannelNewsParserDeleteRequestType extends BaseRequestType {
  ids: string[];
}

interface ChannelNewsParserDeleteResponseType extends BaseResponseType {
  data: ChannelNewsParserDataType[];
}

interface ChannelTotalAmountRouteType extends BaseRouteType {
  get: ChannelTotalAmountGetRequestType;
}

interface ChannelTotalAmountGetRequestType extends BaseRequestType {}

interface ChannelTotalAmountGetResponseType extends BaseResponseType {
  data: { totalPublishedAmount: number; totalUnpublishedAmount: number; totalDeletedAmount: number };
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
  ChannelNewsParserRouteType,
  ChannelNewsParserGetRequestType,
  ChannelNewsParserGetResponseType,
  ChannelNewsParserPostRequestType,
  ChannelNewsParserPostResponseType,
  ChannelNewsParserPutRequestType,
  ChannelNewsParserPutResponseType,
  ChannelNewsParserDeleteRequestType,
  ChannelNewsParserDeleteResponseType,
  ChannelTotalAmountRouteType,
  ChannelTotalAmountGetRequestType,
  ChannelTotalAmountGetResponseType
};
