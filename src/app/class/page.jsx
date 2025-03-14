"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useClass } from "../context/ClassContext";
import Swal from "sweetalert2";
import ClassTable from "@/components/ClassTable/page";
import Navbar from "@/components/Navbar/page";

const Class = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 sm:p-6">
        <ClassTable />
      </div>
    </>
  );
};

export default Class;
