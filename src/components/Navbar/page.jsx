import React from "react";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href="/dashboard" className="text-white text-2xl">
          Qr-Class
        </Link>
        <div className="space-x-4">
          <a href="/" className="text-white">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
