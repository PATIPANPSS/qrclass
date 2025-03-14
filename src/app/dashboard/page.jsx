"use client";

import ClassTable from "@/components/ClassTable/page";
import Header from "@/components/Header/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <Navbar />
      <Header />
      {/* Main Content */}
      <div className="container mx-auto p-6 text-center">
        <ClassTable />
      </div>
    </div>
  );
};

export default Dashboard;
