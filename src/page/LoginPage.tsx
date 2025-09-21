import { ChefHat } from "lucide-react";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border-t-4 border-orange-400 bg-white p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-400">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              Selamat Datang!
            </h2>
            <p className="text-gray-600">Mari mulai petualangan kuliner Anda</p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Siap menjelajahi ribuan resep lezat?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
