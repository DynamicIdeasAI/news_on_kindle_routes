import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';

interface DistributeRouteType extends BaseRouteType {
  post: DistributionPostRequestType;
}

interface DistributionPostRequestType extends BaseRequestType {
  utcHourIndex?: number;
  userIds?: string[];
}

interface DistributionPostResponseType extends BaseResponseType {}

export type { DistributeRouteType, DistributionPostRequestType, DistributionPostResponseType };
