import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  topLine: string;
  bottomLine?: {
    icon: React.ReactNode;
    text: string;
  };
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  topLine,
  bottomLine,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      <div className="button-top-line">{topLine}</div>
      <div className="button-bottom-line">
        {bottomLine ? (
          <div>
            {bottomLine.icon}
            <span>{bottomLine.text}</span>
          </div>
        ) : null}
      </div>
    </button>
  );
};
