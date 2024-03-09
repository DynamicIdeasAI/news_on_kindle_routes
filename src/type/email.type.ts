import type { BaseRequestType, BaseResponseType, BaseRouteType } from '@dynamicideas/base-types';
import type { EmailDataType } from '@dynamicideas/news-on-kindle-data-types';

interface EmailRouteType extends BaseRouteType {
  post: EmailPostRequestType;
}

interface EmailPostRequestType extends BaseRequestType {
  data: EmailDataType;
}

interface EmailPostResponseType extends BaseResponseType {
  data: EmailDataType;
}

export type { EmailRouteType, EmailPostRequestType, EmailPostResponseType };
