"use client";

import React, { createContext, useContext, useState } from "react";

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classrooms, setClassrooms] = useState([
    {
      id: 1,
      name: "patipan phaiseesuk",
      courseId: "IS123",
      courseName: "SA",
      room: "BA4",
      day: "Monday",
      date: "09:00",
    },
    {
      id: 2,
      name: "patipan phaiseesuk",
      courseId: "IT456",
      courseName: "DB",
      room: "BA2",
      day: "Friday",
      date: "11:00",
    },
  ]);

  return (
    <ClassContext.Provider value={{ classrooms, setClassrooms }}>
      {children}
    </ClassContext.Provider>
  );
};

export const useClass = () => useContext(ClassContext);
