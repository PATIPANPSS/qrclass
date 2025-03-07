"use client";

import Header from "@/components/Header.jsx/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <Navbar />

      <Header />

      {/* Main Content */}
      <div className="container mx-auto p-6 text-center">
        <p className="text-lg font-medium">
          บันทึกการใช้งานระบบบันทึกการเข้าร่วมกิจกรรม
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
