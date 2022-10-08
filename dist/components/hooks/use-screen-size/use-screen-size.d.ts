export declare enum ScreenSize {
    SMALL = 576,
    MEDIUM = 768,
    LARGE = 992,
    EXTRA_LARGE = 1200,
}
export declare type ScreenType = 'Mobile' | 'Desktop' | 'Tablet'
declare function useScreenSize(): ScreenType
export default useScreenSize
