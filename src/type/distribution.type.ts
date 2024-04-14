import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';

interface DistributeRouteType extends BaseRouteType {
  post: DistributionPostRequestType;
}

interface DistributionPostRequestType extends BaseRequestType {
  hourIndex?: number;
}

interface DistributionPostResponseType extends BaseResponseType {}

export type { DistributeRouteType, DistributionPostRequestType, DistributionPostResponseType };
