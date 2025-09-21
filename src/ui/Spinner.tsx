import { Loader } from "lucide-react";

function Spinner() {
  return (
    <div className="flex justify-center">
      <Loader className="size-14 animate-spin text-orange-400" />
    </div>
  );
}

export default Spinner;
