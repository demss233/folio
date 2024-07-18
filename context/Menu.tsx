"use client";
import React from "react";
import { createContext } from "react";
import { useState } from "react";

type MenuContextType = {
  open: boolean;
  setOpen: () => void;
};

export const MenuContext = createContext({
  open: false,
  setOpen: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const [open, handleOpen] = useState<boolean>(false);

  const setOpen = () => {
    handleOpen((prevOpen) => !prevOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
