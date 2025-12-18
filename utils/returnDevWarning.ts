export function returnDevWarning(msg: string, type?: 'info' | 'warn' | 'error' | 'time' | 'timeStamp' | 'timeLog' | 'timeEnd') {
    if (!import.meta.dev) return;
    console.group('🔧 Dev only warning');
    switch (type) {
        case 'info':
            console.info(msg);
            break;
        case 'warn':
            console.warn(msg);
            break;
        case 'error':
            console.error(msg);
            break;
        case 'time':
            console.time(msg);
            break;
        case 'timeStamp':
            console.timeStamp(msg);
            break;
        case 'timeLog':
            console.timeLog(msg);
            break;
        case 'timeEnd':
            console.timeEnd(msg);
            break;
        default:
            console.log(msg);
    }
    console.groupEnd();
    return;
}