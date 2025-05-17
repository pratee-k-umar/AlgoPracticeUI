"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div>
        <nav className="bg-indigo-600 text-white shadow-md">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link className="font-bold text-xl" href={"/"}>Creathon</Link>
              </div>
              <div>
                {pathname !== "/auth" && (
                  <Link className="font-bold text-xl" href={"/auth"}>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
