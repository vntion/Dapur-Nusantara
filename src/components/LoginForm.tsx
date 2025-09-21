import { User } from "lucide-react";
import { useState, type FormEvent } from "react";
import useUserStore from "../stores/useUserStore";
import { useNavigate } from "react-router";

function LoginForm() {
  const [userNameInput, setUserNameInput] = useState("");
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userNameInput) return;

    login(userNameInput.trim());
    navigate("/");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Siapa nama Anda?
        </label>
        <div className="relative">
          <input
            value={userNameInput}
            onChange={(e) => setUserNameInput(e.target.value)}
            type="text"
            placeholder="Masukkan nama Anda..."
            className="w-full rounded-xl border-2 border-gray-200 py-3 pr-4 pl-12 text-gray-700 transition-colors focus:border-orange-400 focus:outline-none"
          />
          <User className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full transform rounded-xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:from-orange-500 hover:via-red-500 hover:to-pink-500"
      >
        Mulai Memasak! 🍳
      </button>
    </form>
  );
}

export default LoginForm;
