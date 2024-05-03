"use client";
import { UserDataType } from "@/types";
import React, { createContext, useState, useContext, ReactNode } from "react";

type Data = {
  data: UserDataType;
  setData: React.Dispatch<React.SetStateAction<UserDataType>>;
};

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<UserDataType>({
    stressType: -1,
    choiceScore: -1,
    emojiNum: -1,
    stressWord: "",
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): Data => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
