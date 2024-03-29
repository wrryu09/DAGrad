import React from "react";

interface SelectionGroupProps {
  children: React.ReactNode;
}

const SelectionBtnGroup: React.FC<SelectionGroupProps> = ({ children }) => {
  return <fieldset className="flex flex-col gap-2 my-10">{children}</fieldset>;
};

export default SelectionBtnGroup;
