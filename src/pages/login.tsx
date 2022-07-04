import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RequestOtpInput } from "schema/user.schema";
import { trpc } from "utils/trpc";

const Login = () => {
  const { handleSubmit, register } = useForm<RequestOtpInput>();
  const [success, setSuccess] = useState<boolean>(false);
  const { data, mutate } = trpc.useMutation(["users.request-otp"], {
    onSuccess: () => setSuccess(true),
  });

  const onSubmit = (values: RequestOtpInput) => mutate(values);

  return (
    <div className="min-h-screen bg-slate-200 flex items-center">
      <div className="shadow-md border w-screen bg-white p-10 space-y-4 max-w-xl mx-auto">
        <h3 className="text-center text-slate-700 text-3xl mb-10">Login</h3>
        {success && <p>Please check your email</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer"
              placeholder=" "
              required
              {...register("email", { required: true })}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>
          <button
            className="border border-slate-500 py-2 px-10 cursor-pointer hover:bg-slate-500 hover:text-white"
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
