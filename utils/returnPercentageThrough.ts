export function returnPercentageThrough(startDate: Date | string, endDate: Date | string, targetDate: Date | string) {
    try {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const target = new Date(targetDate).getTime();

        const duration = end - start;
        const elapsed = target - start;

        const percentage = (elapsed / duration) * 100;

        return Math.max(0, Math.min(100, percentage));

    } catch (error) {
        throw error;
    }
}