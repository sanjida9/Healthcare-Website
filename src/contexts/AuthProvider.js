import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useService from "../hooks/useService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const { details } = useService();
  console.log(details);
  const data = { allContext, details };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
