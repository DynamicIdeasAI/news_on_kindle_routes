import type { DemoRouteType } from './type/demo.type';

export default class ApiRoute {
  static Product: DemoRouteType = {
    path: '/demos',
    get: { ids: [] }
  };
}
