export function logDevWarning(msg: string, type?: 'info' | 'warn' | 'error') {
    switch (type) {
        case 'info':
            if (import.meta.dev) {
                console.info(msg);
            }
            break;
        case 'warn':
            if (import.meta.dev) {
                console.warn(msg);
            }
            break;
        case 'error':
            if (import.meta.dev) {
                console.error(msg);
            }
            break;

        default:
            if (import.meta.dev) {
                console.log(msg);
            }
            break;
    }
}