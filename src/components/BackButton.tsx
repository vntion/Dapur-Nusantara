import type { ReactNode } from "react";
import { useNavigate } from "react-router";

type BackButtonProps = {
  children: ReactNode;
  className: string;
};

function BackButton({ children, className }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={className}>
      {children}
    </button>
  );
}

export default BackButton;
