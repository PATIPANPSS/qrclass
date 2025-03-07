"use client";

import React from "react";
import Link from "next/link";
import { useClass } from "../context/ClassContext";

const Class = () => {
  const { classrooms, setClassrooms } = useClass();

  const handleDelete = (id) => {
    setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
  };

  const handleEdit = (classroom) => {
    // ไม่ต้องใช้ localStorage อีกต่อไป เพราะข้อมูลอยู่ใน Context
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">รายชื่อวิชา</h2>
          <Link
            href="/class/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          >
            เพิ่มวิชา
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ลำดับ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ชื่อผู้สอน
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  รหัสวิชา
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ชื่อวิชา
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ห้องที่เรียน
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  วันที่สอน
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  เวลา
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {classrooms.map((classroom) => (
                <tr key={classroom.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classroom.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classroom.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classroom.courseId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classroom.courseName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classroom.room}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classroom.day}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classroom.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/class/edit/${classroom.id}`}
                      // ไม่ต้องใช้ handleEdit เพราะข้อมูลอยู่ในContext
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      แก้ไข
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(classroom.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Class;
