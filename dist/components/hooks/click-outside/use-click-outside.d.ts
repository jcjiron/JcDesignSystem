/// <reference types="react" />
declare type useClickOutside = {
    handleClickInside: () => void;
    clickedOutside: boolean;
    listeningRef: React.MutableRefObject<undefined>;
};
export declare const useClickOutside: () => useClickOutside;
export {};
