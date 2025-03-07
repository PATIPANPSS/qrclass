import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import Home from "@/app/page";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return <Home />;
  }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-white hover:text-blue-200">
          QR-class
        </Link>
        <div className="space-x-4">
          <Link href="/class" className="text-white hover:text-blue-200">
            Class
          </Link>
        </div>
        {isLoggedIn && (
          <button onClick={logout} className="text-white hover:text-blue-200">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
