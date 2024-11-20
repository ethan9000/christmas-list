"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  //function to live count down to christmas
  const christmas = new Date("2024-12-25");
  const now = new Date();
  const difference = christmas.getTime() - now.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return (
    <div className="text-white flex flex-col items-center">
      <h2 className="text-6xl font-bold font-handwriting">{days}</h2>
      <p className="text-sm font-body font-medium">Days 'til Christmas</p>
    </div>
  );
}
