/// <reference types="react" />
import "./MyLabel.scss";
interface Props {
    /**
     * Helper text
     */
    label: string;
    /**
     * Text size
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * True if the test should be capitalized
     */
    allCaps: boolean;
    /**
     * Text color
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Font color
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
export {};
