export function useAddUrlQuery(query: Record<string, string>) {
    const route = useRoute();
    const newQuery = { ...route.query, ...query };
    return navigateTo({ query: newQuery });
}