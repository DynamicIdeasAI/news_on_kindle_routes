import type { NewspaperRouteType } from './type/newspaper.type';
import type { CategoryRouteType } from './type/category.type';
import type {
  ChannelNewsParserRouteType,
  ChannelPopularityRouteType,
  ChannelReportRouteType,
  ChannelRouteType,
  ChannelRssUrlExistenceRouteType,
  ChannelSubscriptionRouteType,
  ChannelTotalAmountRouteType,
  ChannelUrlExistenceRouteType
} from './type/channel.type';
import type { DistributeRouteType } from './type/distribution.type';
import type { EmailRouteType } from './type/email.type';
import type { FetchAllChannelNewsRouteType, FetchChannelNewsRouteType } from './type/fetch-channel-news.type';
import type { ClearExpiredPostRouteType, PostRouteType } from './type/post.type';
import type { RssRouteType } from './type/rss.type';
import type { WebPageRouteType } from './type/web-page.type';
import type { QuotaRouteType } from './type/quota.type';

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
        url: '',
        refreshIndex: 0
      }
    },
    put: {
      data: {
        title: '',
        url: '',
        refreshIndex: 0
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
    delete: { ids: [] }
  };
  static ChannelReport: ChannelReportRouteType = {
    path: '/channel-reports',
    get: { pageIndex: 0, pageSize: 20 },
    post: {
      data: {
        channelId: '',
        userId: '',
        comment: ''
      }
    },
    put: {
      data: { id: '', channelId: '', userId: '', comment: '' }
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
  static ChannelNewsParser: ChannelNewsParserRouteType = {
    path: '/channel-news-parsers',
    get: { pageIndex: 0, pageSize: 20 },
    post: {
      data: {
        channelId: '',
        titleCssSelector: '',
        contentCssSelector: ''
      }
    },
    put: {
      data: {
        channelId: '',
        titleCssSelector: '',
        contentCssSelector: ''
      }
    },
    delete: { ids: [] }
  };
  static ChannelTotalAmount: ChannelTotalAmountRouteType = {
    path: '/channel-total-amount',
    get: {}
  };
  static ChannelPopularity: ChannelPopularityRouteType = {
    path: '/channel-popularity',
    get: { channelId: '' }
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
  static ClearExpiredPost: ClearExpiredPostRouteType = {
    path: '/clear-expired-posts',
    delete: {}
  };
  static Rss: RssRouteType = {
    path: '/rss',
    get: { rssUrl: '' }
  };
  static FetchChannelNews: FetchChannelNewsRouteType = {
    path: '/fetch-channel-news',
    get: { channelId: '' }
  };
  static FetchAllChannelNews: FetchAllChannelNewsRouteType = {
    path: '/fetch-all-channel-news',
    get: {}
  };
  static Email: EmailRouteType = {
    path: '/emails',
    post: {
      data: {
        from: '',
        to: [],
        subject: '',
        html: ''
      }
    }
  };
  static Newspaper: NewspaperRouteType = {
    path: '/newspapers',
    post: { userId: '' }
  };
  static Distribution: DistributeRouteType = {
    path: '/distributions',
    post: {}
  };
  static WebPage: WebPageRouteType = {
    path: '/web-pages',
    get: {},
    post: {
      webPage: {
        encodedUrl: '',
        username: ''
      }
    }
  };
  static Quota: QuotaRouteType = {
    path: '/quotas',
    get: { usernames: [] }
  };
}
