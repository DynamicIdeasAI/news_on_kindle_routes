import { CategoryRouteType } from './type/category.type';
import type { ChannelRouteType } from './type/channel.type';

export default class ApiRoute {
  static Channel: ChannelRouteType = {
    path: '/channels',
    get: { pageIndex: 0, pageSize: 20 },
    post: {
      data: {
        title: '',
        url: ''
      }
    },
    put: {
      data: {
        title: '',
        url: ''
      }
    },
    delete: { ids: [] }
  };
  static Category: CategoryRouteType = {
    path: '/categories',
    get: { pageIndex: 0, pageSize: 200 },
    post: {
      data: {
        name: ''
      }
    },
    put: {
      data: {
        name: ''
      }
    },
    delete: { ids: [] }
  };
}
