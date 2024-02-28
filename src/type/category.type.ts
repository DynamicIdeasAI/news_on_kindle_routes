import type { BaseRouteType, BaseRequestType, BaseResponseType } from '@dynamicideas/base-types';
import type { CategoryDataType } from '@dynamicideas/news-on-kindle-data-types';

interface CategoryRouteType extends BaseRouteType {
  get: CategoryGetRequestType;
  post: CategoryPostRequestType;
  put: CategoryPutRequestType;
  delete: CategoryDeleteRequestType;
}

interface CategoryGetRequestType extends BaseRequestType {
  /**
   * Page index, starting from 0.
   */
  pageIndex: number;
  pageSize: number;
  isDeleted?: boolean;
  ids?: string[];
}

interface CategoryGetResponseType extends BaseResponseType {
  data: CategoryDataType[];
}

interface CategoryPostRequestType extends BaseRequestType {
  data: CategoryDataType;
}

interface CategoryPostResponseType extends BaseResponseType {
  data: CategoryDataType;
}

interface CategoryPutRequestType extends BaseRequestType {
  data: CategoryDataType;
}

interface CategoryPutResponseType extends BaseResponseType {
  data: CategoryDataType;
}

interface CategoryDeleteRequestType extends BaseRequestType {
  ids: string[];
}

interface CategoryDeleteResponseType extends BaseResponseType {
  data: CategoryDataType[];
}

export type {
  CategoryRouteType,
  CategoryGetRequestType,
  CategoryGetResponseType,
  CategoryPostRequestType,
  CategoryPostResponseType,
  CategoryPutRequestType,
  CategoryPutResponseType,
  CategoryDeleteRequestType,
  CategoryDeleteResponseType
};
