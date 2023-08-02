interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Payroll Officer'],
  tenantName: 'Company',
  applicationName: 'Tetz',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
