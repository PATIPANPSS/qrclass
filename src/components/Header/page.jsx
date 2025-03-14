import React from "react";

const Header = () => {
  return (
    <div className="bg-opacity-90 bg-white p-4">
      <div className="flex justify-around items-center p-4 bg-transparent">
        <div className="bg-cyan-500 text-white p-4 rounded-lg text-center w-1/4">
          <p className="text-lg font-semibold">0 ครั้ง</p>
          <p className="text-sm">การลงชื่อ</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg text-center w-1/4">
          <p className="text-lg font-semibold">0 วัน</p>
          <p className="text-sm">การเข้าร่วม</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg text-center w-1/4">
          <p className="text-lg font-semibold">0 ครั้ง</p>
          <p className="text-sm">การลงชื่อ</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg text-center w-1/4">
          <p className="text-lg font-semibold">ไม่มีข้อมูล</p>
          <p className="text-sm">สถานะ</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
