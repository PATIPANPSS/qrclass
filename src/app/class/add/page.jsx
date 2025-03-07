import React from "react";

const AddClass = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">เพิ่มวิชา</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            ชื่อผู้สอน
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md bg-white border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            รหัสวิชา
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md bg-white border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            ชื่อวิชา
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md bg-white border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            ห้องที่เรียน
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md bg-white border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            วันที่สอน
          </label>
          <select
            id="day"
            name="day"
            className="mt-1 block w-full rounded-md bg-white border-gray-300"
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            เวลา
          </label>
          <input
            type="time"
            className="mt-1 block w-full rounded-md bg-white border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
};

export default AddClass;
