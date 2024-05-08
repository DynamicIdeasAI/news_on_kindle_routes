import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import type { QuotaDataType } from '@dynamicideas/news-on-kindle-data-types';

interface QuotaRouteType extends BaseRouteType {
  get: QuotaGetRequestType;
}

interface QuotaGetRequestType extends BaseRequestType {
  usernames: string[];
}

interface QuotaGetResponseType extends BaseResponseType {
  quotas: QuotaDataType[];
}

export type { QuotaRouteType, QuotaGetRequestType, QuotaGetResponseType };
