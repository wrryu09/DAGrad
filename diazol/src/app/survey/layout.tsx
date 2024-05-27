import BackGroundEmoji from "@/components/common/BackGroundEmoji";
import TopBar from "@/components/common/TopBar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <TopBar />
      <BackGroundEmoji />
      {children}
    </>
  );
};

export default layout;
