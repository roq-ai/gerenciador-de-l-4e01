interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Administrator', 'Product Manager', 'Category Manager'],
  tenantName: 'Organization',
  applicationName: 'Gerenciador de loja virtual',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
