import React from "react";

interface SelectionGroupProps {
  children: React.ReactNode;
}

const SelectionBtnGroup: React.FC<SelectionGroupProps> = ({ children }) => {
  return <fieldset className="flex flex-col gap-4 my-10">{children}</fieldset>;
};

export default SelectionBtnGroup;
