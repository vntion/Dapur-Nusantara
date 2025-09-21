import { ChefHat } from "lucide-react";
import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <ChefHat className="h-8 w-8 text-white" />
      <h1 className="text-xl font-bold text-white">Dapur Nusantara</h1>
    </Link>
  );
}

export default Logo;
