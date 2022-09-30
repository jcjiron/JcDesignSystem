import { ComponentMeta } from "@storybook/react";
import "./MyLabel.css";
import { AllCaps } from "../stories/components/MyLabel.stories";

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
  fontColor?: string
}

export const MyLabel = ({
  label,
  size,
  allCaps = false,
  color = "primary",
  fontColor
}: Props) => {
  return (
    <span className={`label ${size} text-${color}`}
    style={{color: fontColor}}>
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
