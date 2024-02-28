import type { ChannelRouteType } from './type/channel.type';

export default class ApiRoute {
  static Channel: ChannelRouteType = {
    path: '/channels',
    get: { pageIndex: 0, pageSize: 20 },
    post: {
      data: {
        title: '',
        url: '',
        createdAt: undefined
      }
    },
    put: {
      data: {
        title: '',
        url: '',
        createdAt: undefined
      }
    },
    delete: { ids: [] }
  };
}
