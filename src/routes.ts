import type { CategoryRouteType } from './type/category.type';
import type {
  ChannelDomParserRouteType,
  ChannelRouteType,
  ChannelRssUrlExistenceRouteType,
  ChannelSubscriptionRouteType,
  ChannelUrlExistenceRouteType
} from './type/channel.type';
import type { PostRouteType } from './type/post.type';
import { RssRouteType } from './type/rss.type';

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
  static ChannelRssUrlExistence: ChannelRssUrlExistenceRouteType = {
    path: '/check-channel-rss-url-existence',
    get: { rssUrl: '' }
  };
  static ChannelDomParser: ChannelDomParserRouteType = {
    path: '/channel-dom-parsers',
    get: { pageIndex: 0, pageSize: 20 },
    post: {
      data: {
        channelId: '',
        titleSelector: '',
        articleSelector: ''
      }
    },
    put: {
      data: {
        channelId: '',
        titleSelector: '',
        articleSelector: ''
      }
    },
    delete: { ids: [] }
  };
  static Post: PostRouteType = {
    path: '/posts',
    get: { pageIndex: 0, pageSize: 20 },
    post: {
      data: {
        channelId: '',
        title: '',
        url: '',
        originalHtmlContent: '',
        content: ''
      }
    },
    put: {
      data: {
        channelId: '',
        title: '',
        url: '',
        originalHtmlContent: '',
        content: ''
      }
    },
    delete: { ids: [] }
  };
  static Rss: RssRouteType = {
    path: '/rss',
    get: { rssUrl: '' }
  };
}
