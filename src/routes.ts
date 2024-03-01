import { CategoryRouteType } from './type/category.type';
import type { ChannelRouteType, ChannelSubscriptionRouteType, ChannelUrlExistenceRouteType } from './type/channel.type';

export default class ApiRoute {
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
  static ChannelSubscription: ChannelSubscriptionRouteType = {
    path: '/channel-subscriptions',
    get: { pageIndex: 0, pageSize: 20, userId: '' },
    post: {
      data: {
        channelId: '',
        userId: ''
      }
    },
    put: {
      data: {
        channelId: '',
        userId: ''
      }
    },
    delete: { ids: [] }
  };
  static ChannelUrlExistence: ChannelUrlExistenceRouteType = {
    path: '/check-channel-url-existence',
    get: { url: '' }
  };
}
