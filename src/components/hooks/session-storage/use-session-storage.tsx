export const useSessionStorage = (
    sessionStorage: Storage
): {
    setItem: <T>(key: string, value: T) => void
    getItem: <T>(key: string) => T
} => {
    const setItem = <T,>(key: string, value: T): void => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    const getItem = <T,>(key: string): T | undefined => {
        const item = sessionStorage.getItem(key)
        if (!item) {
            return undefined
        }
        return JSON.parse(item) as T
    }
    return {
        setItem,
        getItem,
    }
}
