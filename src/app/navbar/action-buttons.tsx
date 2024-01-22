import React from "react";

type Props = {};

export default function ActionButtons({}: Props) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <button className="px-4 py-2 font-semibold rounded-lg hover:cursor-pointer hover:bg-slate-100">
        Sign in
      </button>
      <h1 className="px-4 py-2 rounded-lg font-semibold bg-blue-500 hover:cursor-pointer text-white hover:bg-black">
        Get Started
      </h1>
    </div>
  );
}
