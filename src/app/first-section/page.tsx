import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const FirstSection = (props: Props) => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-gray-00 to-gray-200 ">
      <div className="container mx-auto text-center">
        <div className="text-6xl flex justify-center font-bold md:px-18 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
          Build a brand and start selling in seconds
        </div>
      </div>
      <div>
        <p className="text-center text-lg font-bold md:text-xl md-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
          No matter what you sell, Bird Software has everything you need to run
          your online store.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <Button className="bg-blue-500 font-bold p-4" size={"lg"}>
            Get Started
          </Button>
          <Button className="bg-gray-500 font-bold p-4" size={"lg"}>
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
