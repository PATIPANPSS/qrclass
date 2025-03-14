"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useClass } from "@/app/context/ClassContext";
import Swal from "sweetalert2";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ClassTable = () => {
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
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">รายชื่อวิชา</h2>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="ค้นหาด้วยชื่อหรือรหัสวิชา..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full sm:w-64"
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
        {/* Card Layout for small screens (<sm) */}
        <div className="sm:hidden divide-y divide-gray-200">
          {filteredClassrooms.length > 0 ? (
            filteredClassrooms.map((classroom) => (
              <div key={classroom.id} className="p-4">
                <div className="mb-2">
                  <span className="font-medium text-gray-700">ลำดับ:</span>{" "}
                  {classroom.id || "N/A"}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">ชื่อผู้สอน:</span>{" "}
                  {searchTerm.trim() !== "" &&
                  (classroom.name || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                    <span className="bg-yellow-200">{classroom.name || "N/A"}</span>
                  ) : (
                    classroom.name || "N/A"
                  )}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">รหัสวิชา:</span>{" "}
                  {searchTerm.trim() !== "" &&
                  (classroom.courseId || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                    <span className="bg-yellow-200">{classroom.courseId || "N/A"}</span>
                  ) : (
                    classroom.courseId || "N/A"
                  )}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">ชื่อวิชา:</span>{" "}
                  {searchTerm.trim() !== "" &&
                  (classroom.courseName || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                    <span className="bg-yellow-200">{classroom.courseName || "N/A"}</span>
                  ) : (
                    classroom.courseName || "N/A"
                  )}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">ห้องที่เรียน:</span>{" "}
                  {searchTerm.trim() !== "" &&
                  (classroom.room || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                    <span className="bg-yellow-200">{classroom.room || "N/A"}</span>
                  ) : (
                    classroom.room || "N/A"
                  )}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">วันที่สอน:</span>{" "}
                  {searchTerm.trim() !== "" &&
                  (classroom.day || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                    <span className="bg-yellow-200">{classroom.day || "N/A"}</span>
                  ) : (
                    classroom.day || "N/A"
                  )}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">เวลา:</span>{" "}
                  {classroom.date || "N/A"}
                </div>
                <div className="flex space-x-2 mt-2">
                  <Link
                    href={`/class/edit/${classroom.id || 0}`}
                    className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    <FiEdit className="mr-1" /> แก้ไข
                  </Link>
                  <button
                    onClick={() => handleDelete(classroom.id)}
                    className="flex items-center px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                  >
                    <FiTrash2 className="mr-1" /> ลบ
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">ไม่พบข้อมูล</div>
          )}
        </div>

        {/* Table for large screens (sm and up) */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ลำดับ
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ชื่อผู้สอน
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    รหัสวิชา
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ชื่อวิชา
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">
                    ห้องที่เรียน
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">
                    วันที่สอน
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider lg:table-cell hidden">
                    เวลา
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClassrooms.length > 0 ? (
                  filteredClassrooms.map((classroom) => (
                    <tr key={classroom.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">{classroom.id || "N/A"}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {searchTerm.trim() !== "" &&
                        (classroom.name || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                          <span className="bg-yellow-200">{classroom.name || "N/A"}</span>
                        ) : (
                          classroom.name || "N/A"
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {searchTerm.trim() !== "" &&
                        (classroom.courseId || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                          <span className="bg-yellow-200">{classroom.courseId || "N/A"}</span>
                        ) : (
                          classroom.courseId || "N/A"
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {searchTerm.trim() !== "" &&
                        (classroom.courseName || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                          <span className="bg-yellow-200">{classroom.courseName || "N/A"}</span>
                        ) : (
                          classroom.courseName || "N/A"
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap md:table-cell hidden">
                        {searchTerm.trim() !== "" &&
                        (classroom.room || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                          <span className="bg-yellow-200">{classroom.room || "N/A"}</span>
                        ) : (
                          classroom.room || "N/A"
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap md:table-cell hidden">
                        {searchTerm.trim() !== "" &&
                        (classroom.day || "").toString().toLowerCase().includes(searchTerm.toLowerCase()) ? (
                          <span className="bg-yellow-200">{classroom.day || "N/A"}</span>
                        ) : (
                          classroom.day || "N/A"
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap lg:table-cell hidden">
                        {classroom.date || "N/A"}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <Link
                          href={`/class/edit/${classroom.id || 0}`}
                          className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                        >
                          <FiEdit className="mr-1" /> แก้ไข
                        </Link>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(classroom.id)}
                          className="flex items-center px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                        >
                          <FiTrash2 className="mr-1" /> ลบ
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-6 py-4 text-center text-gray-500">
                      ไม่พบข้อมูล
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassTable