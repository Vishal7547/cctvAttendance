import React from "react";
import { userContext } from "./mycontext";
const userProvider = ({ children }) => {
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};

export default userProvider;
