'use client'
import Link from "next/link"

import { useState } from "react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="hover:bg-gray-100 p-[50px] hover:rounded-[5px]"
      >
        Topics
      </button>
      {open && (
        <div className="absolute mt-2 w-[187.233px] rounded-md bg-white shadow-lg">
          <button onClick={() => setOpen(!open)} className="w-[100%]">
              <Link className="block px-4 py-2 text-sm hover:bg-gray-100" href="/topics/hub">
                All Topics
              </Link>
            </button>
          <button onClick={() => setOpen(!open)} className="w-[100%]">
              <Link className="block px-4 py-2 text-sm hover:bg-gray-100" href="/topics/hub/future">
                Future
              </Link>
            </button>
          <button onClick={() => setOpen(!open)} className="w-[100%]">
              <Link className="block px-4 py-2 text-sm hover:bg-gray-100" href="/topics/hub/career">
                Career
              </Link>
            </button>
          <button onClick={() => setOpen(!open)} className="w-[100%]">
              <Link className="block px-4 py-2 text-sm hover:bg-gray-100" href="/topics/hub/health">
                Health
              </Link>
            </button>
        </div>
      )}
    </div>
  );
}
