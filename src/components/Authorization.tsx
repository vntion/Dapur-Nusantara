import { Navigate } from "react-router";
import useUserStore from "../stores/useUserStore";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Authorization({ children }: Props) {
  const userName = useUserStore((state) => state.userName);

  if (!userName) return <Navigate to="/login" />;

  return children;
}

export default Authorization;
