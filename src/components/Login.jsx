import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6  py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className=" flex justify-center underline ">
          <BiCartAlt className="text-yellow-400 text-4xl" />
          <p className=" font-bold tracking-widest px-1 hover:text-3xl duration-200 ease-in-out">ROFKIT</p>
        </div>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight hover:text-gray-800 text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="current-email"
                placeholder="Email"
                className=" block w-full mt-2 py-2 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-semibold  text-black hover:text-gray-800"
                >
                  Forgot password?
               </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Email"
                autoComplete="current-password"
                required
                className=" block w-full mt-2 py-2 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold leading-6  shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="#"
            className="font-semibold leading-6 text-black hover:text-gray-800"
          >
            Start a 14 day free trial
         </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
