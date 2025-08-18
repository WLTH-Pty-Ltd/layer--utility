export function useRouteCheck(path: string) {
    const router = useRouter();
    try {
        const resolved = router.resolve(path);
        return resolved.name !== undefined && resolved.name !== '404';
    } catch {
        return false;
    }
}