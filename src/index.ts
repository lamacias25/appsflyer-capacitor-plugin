import { registerPlugin } from '@capacitor/core';

import type { AppsFlyerPlugin } from './definitions';

const AppsFlyer = registerPlugin<AppsFlyerPlugin>('AppsFlyerPlugin', {});

export * from './definitions';
export * from './Appsflyer_constants';
export * from './appsflyer_interfaces';

export { AppsFlyer };

// Exponerlo para consumo desde JavaScript/OutSystems ODC
if (typeof window !== 'undefined') {
    (window as any).AppsFlyer = AppsFlyer;
}