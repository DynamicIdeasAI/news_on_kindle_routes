import type { ChannelRouteType } from './type/channel.type';

export default class ApiRoute {
  static Channel: ChannelRouteType = {
    path: '/channels',
    get: { ids: [] },
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
