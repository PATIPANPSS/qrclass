"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useClass } from "../context/ClassContext";
import Swal from "sweetalert2";

const Class = () => {
  const { classrooms, setClassrooms } = useClass();
  const [searchTerm, setSearchTerm] = useState(""); // State สำหรับค้นหา

  const handleDelete = (id) => {
    Swal.fire({
      title: "ยืนยันการลบวิชา",
      text: "การกระทำนี้ไม่สามารถกู้คืนได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
        Swal.fire("สำเร็จ!!!", "ลบวิชาสำเร็จ!!!", "success");
      }
    });
  };

  // กรอง classrooms ตาม searchTerm
  const filteredClassrooms = classrooms.filter((classroom) => {
    // ตรวจสอบ classroom ก่อน ถ้ามีให้ใช้ name และ courseId ถ้าไม่มีใช้ ''
    const name = classroom ? (classroom.name ? classroom.name.toString().toLowerCase() : '') : '';
    const courseId = classroom ? (classroom.courseId ? classroom.courseId.toString().toLowerCase() : '') : '';
    const courseName = classroom ? (classroom.courseName ? classroom.courseName.toString().toLowerCase() : '') : '';
    const room = classroom ? (classroom.room ? classroom.room.toString().toLowerCase() : '') : '';
    const day = classroom ? (classroom.day ? classroom.day.toString().toLowerCase() : '') : '';
    const search = searchTerm.toLowerCase();
    return (
      name.includes(search) || 
      courseId.includes(search) || 
      courseName.includes(search) || 
      room.includes(search) || 
      day.includes(search)
    );
  })

  // Debug เพื่อดูข้อมูล
  useEffect(() => {
    console.log("Classrooms:", classrooms);
    console.log("Filtered Classrooms:", filteredClassrooms);
    console.log("Search Term:", searchTerm);
  }, [classrooms, filteredClassrooms, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">รายชื่อวิชา</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="ค้นหาด้วยชื่อหรือรหัสวิชา..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-600 w-full sm:w-auto"
            />
            <Link
              href="/class/add"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-center w-full sm:w-auto"
            >
              เพิ่มวิชา
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ลำดับ
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:table-cell hidden">
                  ชื่อผู้สอน
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  รหัสวิชา
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ชื่อวิชา
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden sm:hidden">
                  ห้องที่เรียน
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden sm:hidden">
                  วันที่สอน
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider lg:table-cell hidden md:hidden">
                  เวลา
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClassrooms.map((classroom) => (
                <tr key={classroom.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    {classroom.id}
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap sm:table-cell hidden">
                    {searchTerm.trim() !== '' && (classroom.name || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                      <span className="bg-yellow-200">{classroom.name}</span>
                    ) : (
                      classroom.name
                    )}
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap">
                    {searchTerm.trim() !== ''&& (classroom.courseId || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                      <span className="bg-yellow-200">{classroom.courseId}</span>
                    ) : (
                      classroom.courseId
                    )}  
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap">
                    {searchTerm.trim() !== '' && (classroom.courseName || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                      <span className="bg-yellow-200">{classroom.courseName}</span>
                    ) : (
                      classroom.courseName
                    )} 
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap md:table-cell hidden sm:hidden">
                    {searchTerm.trim() !== '' && (classroom.room || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                      <span className="bg-yellow-200">{classroom.room}</span>
                    ) : (
                      classroom.room
                    )}
                  </td>
                  
                  <td className="px-4 py-4 whitespace-nowrap md:table-cell hidden sm:hidden">
                    {searchTerm.trim() !== '' && (classroom.day || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                      <span className="bg-yellow-200">{classroom.day}</span>
                    ) : (
                      classroom.day
                    )}
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap lg:table-cell hidden md:hidden">
                    {classroom.date}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <Link
                      href={`/class/edit/${classroom.id}`}
                      // ไม่ต้องใช้ handleEdit เพราะข้อมูลอยู่ในContext
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      แก้ไข
                    </Link>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(classroom.id)}
                      className="text-red-600 hover:text-red-800"
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
    </div>
  );
};

export default Class;
