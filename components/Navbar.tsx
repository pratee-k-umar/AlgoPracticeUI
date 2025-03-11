"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div>
      <div>
        <nav className="flex justify-between p-5">
          <Link href="/">Creathon</Link>
          <div className="navbar flex gap-10">
            {pathname !== "/auth" && (
              <Link href="/auth">Register</Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
