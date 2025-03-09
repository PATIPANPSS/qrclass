"use client";

import { useClass } from "@/app/context/ClassContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddClass = () => {
  const router = useRouter();
  const { classrooms, setClassrooms } = useClass();
  const [classroom, setClassroom] = useState({
    id: "",
    name: "",
    courseId: "",
    courseName: "",
    room: "",
    day: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // ใช้ Modal แทน confirm
    Swal.fire({
      title: "ยืนยันการเพิ่มวิชา",
      icon: "question",
      showCancelButton: "true",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        // สร้าง id ใหม่โดยใช้ id สูงสุดที่มีอยู่ + 1
        const newId =
          classrooms.length > 0
            ? Math.max(...classrooms.map((c) => c.id)) + 1
            : 1;
        // เพิ่มข้อมูลใหม่ใน classrooms
        const newClassroom = { ...classroom, id: newId };
        setClassrooms([...classrooms, newClassroom]);
        Swal.fire("สำเร็จ!!!", "เพิ่มวิชาสำเร็จ!!!", "success");
        router.push("/class");
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassroom((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">เพิ่มวิชา</h2>
        <form
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ชื่อผู้สอน
              </label>
              <input
                type="text"
                name="name"
                value={classroom.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                รหัสวิชา
              </label>
              <input
                type="text"
                name="courseId"
                value={classroom.courseId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ชื่อวิชา
              </label>
              <input
                type="text"
                name="courseName"
                value={classroom.courseName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ห้องที่เรียน
              </label>
              <input
                type="text"
                name="room"
                value={classroom.room}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                วันที่สอน
              </label>
              <select
                id="day"
                name="day"
                value={classroom.day}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                required
              >
                <option value="--">--</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                เวลา
              </label>
              <input
                type="time"
                name="date"
                value={classroom.date}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push("/class")}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
