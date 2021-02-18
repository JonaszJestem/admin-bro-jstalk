import AdminBro from 'admin-bro';

export const bundleComponents = (): {
  EXPORT_COMPONENT: string;
  IMPORT_COMPONENT: string;
} => {
  const EXPORT_COMPONENT = AdminBro.bundle('./ExportComponent');
  const IMPORT_COMPONENT = AdminBro.bundle('./ImportComponent');

  return { EXPORT_COMPONENT, IMPORT_COMPONENT };
};
