declare var C: CStatic

interface CStatic {
    appName: string
    appVersion: string
    runMode: string
    userAgent: string
}

declare function github(): void
declare function gitee(): void

// declare var require: {
// (path: string): any;
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };
