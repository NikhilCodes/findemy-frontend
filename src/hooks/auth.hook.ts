import { useContext } from "react";
import { UserContext } from "../providers/user.provider";

export function useAuth() {
  return useContext(UserContext);
}