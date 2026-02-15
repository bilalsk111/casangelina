import React, { useState, useEffect } from "react";

const Clock = ({ city, timezone, isCenter }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const localTime = new Date(
    time.toLocaleString("en-US", { timeZone: timezone })
  );

  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();
  const seconds = localTime.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minDeg = minutes * 6;
  const secDeg = seconds * 6;

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div
        className={`relative flex items-center justify-center rounded-full transition-all duration-500
        ${isCenter ? "w-36 h-56 bg-[#ece9e2] shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                   : "w-32 h-52 bg-[#f6f4ef] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"}`}
      >
        <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
          <div className="absolute w-[4px] h-[4px] bg-[#6f6a63] rounded-full z-20" />
          <div
            className="absolute bottom-1/2 left-1/2 w-[3px] h-6 bg-[#6f6a63] rounded-full origin-bottom"
            style={{
              transform: `translate(-50%, 0) rotate(${hourDeg}deg)`
            }}
          />
          <div
            className="absolute bottom-1/2 left-1/2 w-[2px] h-9 bg-[#8f897f] rounded-full origin-bottom"
            style={{
              transform: `translate(-50%, 0) rotate(${minDeg}deg)`
            }}
          />
          <div
            className="absolute bottom-1/2 left-1/2 w-[1px] h-10 bg-[#c8c3bb] origin-bottom"
            style={{
              transform: `translate(-50%, 0) rotate(${secDeg}deg)`
            }}
          />
        </div>
      </div>

      <h3
        className={`text-md tracking-wide font-[LMroman10] font-light transition-colors duration-300
        ${isCenter ? "text-[#5c5750]" : "text-[#a9a39b]"}`}
      >
        {city}
      </h3>
    </div>
  );
};

const WorldClockSection = () => {
  const clocks = [
    { city: "New York", zone: "America/New_York" },
    { city: "London", zone: "Europe/London" },
    { city: "Sydney", zone: "Australia/Sydney" },
    { city: "India", zone: "Asia/Kolkata", isCenter: true },
    { city: "Toronto", zone: "America/Toronto" },
    { city: "San Paolo", zone: "America/Sao_Paulo" },
    { city: "Hong Kong", zone: "Asia/Hong_Kong" },
  ];

  return (
    <div className="w-full h-[50vh] bg-[#f4f2ed] flex items-center justify-center px-16">
      <div className="grid grid-cols-7 gap-16 w-full max-w-7xl items-end">
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            city={clock.city}
            timezone={clock.zone}
            isCenter={clock.isCenter}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldClockSection;
