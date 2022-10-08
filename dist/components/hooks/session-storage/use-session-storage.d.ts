export declare const useSessionStorage: (sessionStorage: Storage) => {
    setItem: <T>(key: string, value: T) => void
    getItem: <T_1>(key: string) => T_1
}
