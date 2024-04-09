import { useState } from "react";
import { useData } from "./DataContext";

const useSetContextData = (key: string) => {
  const { setData } = useData();
  const [mySelection, setSelection] = useState<number | string>(-1);

  const setContextData = () => {
    setData((prevData) => ({
      ...prevData,
      [key]: mySelection,
    }));
  };

  return { mySelection, setSelection, setContextData };
};

export default useSetContextData;
