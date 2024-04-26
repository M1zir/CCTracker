import { SVGProps } from 'react';
import { ModeToggle } from "@/components/mode-toggle";

import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export default function Component() {
  return (
    <header className="flex z-10 h-20 w-full text-black dark:text-white shrink-0 items-center px-4 md:px-6 bg-background dark:bg-background gap-4 lg:gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <a className="mr-6 hidden lg:flex" href="/">
            <MountainIcon />
            <span className="sr-only">CC Price Tracker</span>
          </a>
          <div className="grid gap-2 py-6">
            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/">
              Home
            </a>
            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/details">
              Details
            </a>
            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/">
             <Button>
                Log in
             </Button>
            </a>
            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/">
            <Button
            variant="outline"
            >
                Sign up
             </Button>
            </a>
          

          </div>
        </SheetContent>
      </Sheet>
      <a className="mr-6 hidden lg:flex" href="/">
        <MountainIcon />
        <span className="sr-only">CCTracker</span>
      </a>
      <nav className="ml-auto hidden lg:flex lg:items-center lg:justify-center gap-6 w-screen">
        <a
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-semibold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          href="/"
        >
          Home
        </a>
        <a
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          href="/details"
        >
          Details
        </a>
      </nav>
        <a
          className="group hidden lg:inline-flex h-9 w-max items-center justify-center rounded-md bg focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800  dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          href="/"
        >
         <Button>
                Log in
             </Button>
        </a>
        <a
          className="group hidden lg:inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font- transition-colors focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950   dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          href="/"
        >
          <Button
            variant="outline"
            >
                Sign up
             </Button>
        </a>
        <ModeToggle />
    </header>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <h2 className="text-2xl font-bold w-full">
      CCTracker
    </h2>
  );
}
