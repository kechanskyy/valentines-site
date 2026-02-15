"use client";

import { useState } from "react";

const PASSCODE = "0214";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (code.trim() === PASSCODE) {
      document.cookie = `valentine_auth=1; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      window.location.href = "/";
      return;
    }

    setError("Wrong code ❤️");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4 text-center">Private ❤️</h1>
        <p className="text-sm text-center mb-6 opacity-70">Enter the code to view this site.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 mb-4 text-center"
            placeholder="Enter code"
          />

          {error && <p className="text-red-400 text-sm text-center mb-3">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}