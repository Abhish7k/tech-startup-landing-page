import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function ActionButtons({}: Props) {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-black text-lg mt-10">
                  <Link href={"/"}>Sign in</Link>
                  <Link href={"/"}>Get Started</Link>
                  <Link href={"/"}>Templates</Link>
                  <Link href={"/"}>Documentation</Link>
                  <Link href={"/"}>Pricing</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:space-x-4">
        <Button variant={"ghost"} className="text-md">
          Sign in
        </Button>
        <Button className="text-md bg-blue-500">Get Started</Button>
      </div>
    </div>
  );
}
