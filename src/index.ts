import AppsFlyerSDKModule from '@appsflyer-sdk/js-core-plugin';

import { CapacitorTransport } from './capacitor-transport';
import { version } from './version';

// Manejo seguro para compatibilidad entre ESM y CJS tras la compilación de Rollup
const AppsFlyerSDKClass = AppsFlyerSDKModule.AppsFlyerSDK || AppsFlyerSDKModule.default || AppsFlyerSDKModule;

// Re-exportar tipos e interfaces usando 'export type' para evitar errores de módulos en Rollup
export type * from '@appsflyer-sdk/js-core-plugin';
export * from './constants';

const AppsFlyer = new AppsFlyerSDKClass(new CapacitorTransport(), {
  plugin: 'capacitor',
  pluginVersion: version,
});

export { AppsFlyer };
export default AppsFlyer;