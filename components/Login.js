import { Fugaz_One } from "next/font/google";
import { Button } from "./Button";

const fugaz = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center px-4 py-8 space-y-4 sm:space-y-6">
      <h3
        className={`text-3xl sm:text-4xl md:text-5xl text-center ${fugaz.className}`}
      >
        Log In / Register
      </h3>

      <p className="text-center text-sm sm:text-base">
        You&apos;re one step away!
      </p>

      <input
        className="w-full max-w-[400px] px-3 py-2 sm:py-3 border border-indigo-400 rounded-xl duration-200 
                   hover:border-indigo-600 focus:border-indigo-600 
                   focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        placeholder="Email"
        type="email"
      />
      <input
        className="w-full max-w-[400px] px-3 py-2 sm:py-3 border border-indigo-400 rounded-xl duration-200 
                   hover:border-indigo-600 focus:border-indigo-600 
                   focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        placeholder="Password"
        type="password"
      />

      <div className="w-full max-w-[400px]">
        <Button text="Submit" full />
      </div>
      <p className="text-center">Don&apos;t have an account? <span className="text-indigo-600">Sign up</span></p>
    </div>
  );
}
