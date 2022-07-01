import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { handleSubmit, register } = useForm();

  return (
    <div className="min-h-screen bg-slate-200 flex items-center">
      <div className="shadow-md border w-screen bg-white p-10 space-y-4 max-w-xl mx-auto">
        <h3 className="text-center text-3xl mb-10">Register</h3>
        <form className="w-full space-y-8">
          <div className="relative w-full border-2">
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-transparent"
            />
            <label
              htmlFor="name"
              className="bg-white px-1 absolute left-2 -top-3.5 text-gray-700"
            >
              Full Name
            </label>
          </div>
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
          <input
            className="border border-teal-500 py-2 px-10"
            type="submit"
            value="Register"
          />
        </form>
        <div>
          <p className="text-center text-gray-600">
            Already have an account <Link href="/login">Login</Link> here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
