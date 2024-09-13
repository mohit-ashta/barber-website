import React from "react";

export const PrimaryButton = ({ title, className }) => {
  return (
    <div>
      <button className={`primary-btn ${className}`}>{title}</button>
    </div>
  );
};
