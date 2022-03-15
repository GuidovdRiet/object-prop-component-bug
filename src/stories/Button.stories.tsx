import React, { ReactElement, SVGProps } from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

function IconAgenda(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 14.5v2L18 18l-1.5-3.5Zm4.5 2c0 2.5-2 4.5-4.5 4.5S12 19 12 16.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5Z"
        stroke="#111827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 10.8V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5.8M8 7V3v4Zm8 0V3v4Z"
        stroke="#111827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    topLineText: {
      control: "text",
      defaultValue: "Top line text",
    },
    bottomLineText: {
      control: "text",
      defaultValue: "Bottom line text",
    },
  },
} as ComponentMeta<typeof Button>;

interface ButtonStoryProps {
  onClick?: () => void;
  disabled?: boolean;
  topLineText: string;
  bottomLineText: string;
}

export function WorksButton(args: ButtonStoryProps): ReactElement {
  return (
    <Button
      topLine={args.topLineText}
      /* When this prop is added actions do not work and component loads slow */
      // bottomLine={{
      //   icon: <IconAgenda />,
      //   text: args.bottomLineText,
      // }}
      disabled={args.disabled}
      onClick={action("clicked")}
    />
  );
}

export function DoesNotWorkButton(args: ButtonStoryProps): ReactElement {
  return (
    <Button
      topLine={args.topLineText}
      /* When this prop is removed component renders as expected and actions are functional */
      bottomLine={{
        icon: <IconAgenda />,
        text: args.bottomLineText,
      }}
      disabled={args.disabled}
      onClick={action("clicked")}
    />
  );
}
