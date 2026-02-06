/**
 * This is a console log that only occurs only when in development
 * @param origin The origin of the call. Usually the util, composable, component, module, or layer. 
 * @param scope The scope of the call. This is up to you, but typically it will be the function, or the util, composable, or component when the origin is a layer or module
 * @param msg The body of the message.
 * @param type sets the console style of the warning.
 * @returns console logs in the format of "[origin] [scope] this is the message". Matching the Nuxt syntax.
 */
export function returnDevWarning(origin: string, scope: string, msg: string, type?: 'info' | 'warn' | 'error' | 'time' | 'timeStamp' | 'timeLog' | 'timeEnd') {
    if (!import.meta.dev) return;
    console.group('🔧 Dev only warning');
    switch (type) {
        case 'info':
            console.info(`[${origin}] [${scope}] ${msg}`);
            break;
        case 'warn':
            console.warn(`[${origin}] [${scope}] ${msg}`);
            break;
        case 'error':
            console.error(`[${origin}] [${scope}] ${msg}`);
            break;
        case 'time':
            console.time(`[${origin}] [${scope}] ${msg}`);
            break;
        case 'timeStamp':
            console.timeStamp(`[${origin}] [${scope}] ${msg}`);
            break;
        case 'timeLog':
            console.timeLog(`[${origin}] [${scope}] ${msg}`);
            break;
        case 'timeEnd':
            console.timeEnd(`[${origin}] [${scope}] ${msg}`);
            break;
        default:
            console.log(`[${origin}] [${scope}] ${msg}`);
    }
    console.groupEnd();
    return;
}