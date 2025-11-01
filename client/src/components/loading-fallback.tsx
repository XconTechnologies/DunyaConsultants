import { Loader2 } from "lucide-react";

interface LoadingFallbackProps {
  message?: string;
}

export default function LoadingFallback({ message = "Loading..." }: LoadingFallbackProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#1D50C9] mx-auto mb-4" />
        <p className="text-gray-600 text-base">{message}</p>
      </div>
    </div>
  );
}
