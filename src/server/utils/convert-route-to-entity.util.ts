const mapping: Record<string, string> = {
  categories: 'category',
  orders: 'order',
  organizations: 'organization',
  products: 'product',
  stores: 'store',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
