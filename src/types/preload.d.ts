interface Window {
    fs: typeof import('../preload/internal/fs-delegate').default;
    themepack: typeof import('../preload/internal/themepack').default;
    globalData: IGlobalData,
    path: typeof import("node:path");
    rimraf: typeof import('rimraf').rimraf
}

interface IGlobalData {
    /** 版本号 */
    appVersion: string;
    workersPath: {
        /** 下载器worker */
        downloader: string;
    },
    appPath: {
        userData: string;
        temp: string;
        downloads: string;
    }
    platform: NodeJS.Platform
}