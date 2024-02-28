import type { ChannelRouteType } from './type/channel.type';

export default class ApiRoute {
  static Product: ChannelRouteType = {
    path: '/channels',
    get: { ids: [] }
  };
}
