import { registerPlugin } from '@capacitor/core';
const AppsFlyer = registerPlugin('AppsFlyerPlugin', {});
export * from './definitions';
export * from './Appsflyer_constants';
export * from './appsflyer_interfaces';
export { AppsFlyer };
// Exponerlo para consumo desde JavaScript/OutSystems ODC
if (typeof window !== 'undefined') {
    window.AppsFlyer = AppsFlyer;
}
//# sourceMappingURL=index.js.map