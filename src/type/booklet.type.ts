import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';

interface BookletRouteType extends BaseRouteType {
  post: BookletPostRequestType;
}

interface BookletPostRequestType extends BaseRequestType {
  hourIndex?: number;
}

interface BookletPostResponseType extends BaseResponseType {}

export type { BookletRouteType, BookletPostRequestType, BookletPostResponseType };