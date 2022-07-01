import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { handleSubmit, register } = useForm();

  return (
    <div className="min-h-screen bg-slate-200 flex items-center">
      <div className="shadow-md border w-screen bg-white p-10 space-y-4 max-w-xl mx-auto">
        <h3 className="text-center text-3xl mb-10">Login</h3>
        <form className="w-full space-y-8">
          <div className="relative border-2">
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-transparent"
            />
            <label
              htmlFor="email"
              className="bg-white px-1 absolute left-2 -top-3.5 text-gray-700"
            >
              Email Address
            </label>
          </div>
          <button
            className="border border-teal-500 py-2 px-10 cursor-pointer hover:bg-teal-500 hover:text-white"
            type="submit"
          >
            Login
          </button>
        </form>
        <div>
          <p className="text-center text-gray-600">
            Don't have an account{" "}
            <Link href="/register" className="text-teal-500">
              Register
            </Link>{" "}
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
