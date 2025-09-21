import { Loader2 } from "lucide-react";

function SpinnerFullPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
    </div>
  );
}

export default SpinnerFullPage;
