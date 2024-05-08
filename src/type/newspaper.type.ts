import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';

interface NewspaperRouteType extends BaseRouteType {
  post: NewspaperPostRequestType;
}

interface NewspaperPostRequestType extends BaseRequestType {
  userId: string;
  utcHourIndex?: number;
}

interface NewspaperPostResponseType extends BaseResponseType {}

export type { NewspaperRouteType, NewspaperPostRequestType, NewspaperPostResponseType };
