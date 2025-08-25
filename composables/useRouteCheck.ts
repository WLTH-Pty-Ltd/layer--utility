export function useRouteCheck(path: string) {
    const router = useRouter();
    const routeExists = router.hasRoute(path);
    if (routeExists) {
        try {
            const resolved = router.resolve(path);
            return resolved.name !== undefined && resolved.name !== '404';
        } catch {
            return false;
        }
    }

    return false;
}