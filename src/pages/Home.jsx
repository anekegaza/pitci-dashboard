import React, { useMemo } from "react";
import { Activities, PitchData, PitcheCount, Upcoming } from "../assets";
import BarChart from "../assets/charts/BarChart";
import PieChart from "../assets/charts/PieChart";
import { FaArrowDown, FaChevronDown, FaGlobe } from "react-icons/fa";
import BasicTable from "../assets/Components/BasicTable";

const Home = () => {
  const homeSections = "p-4 mb-2 overflow-hidden";

  // ====FOR THE TABLE COLUMNS AND ITS DATA
  const data = useMemo(() => PitchData, []);

  /** @type import('@tanstack/react-table').ColumnDef(any) */
  const columns = [
    {
      header: "Pitch ID",
      accessorKey: "Pitch ID",
    },
    {
      header: "Author",
      accessorKey: "Author",
    },
    {
      header: "Status",
      accessorKey: "Status",
    },
    {
      header: "Date Submitted",
      accessorKey: "Date Submitted",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-wrap">
      <div className=" flex flex-col border-r w-[75.5%] mb-11">
        {/* =====================DASHBOARD */}
        <div className={`border-b ${homeSections}`}>
          <h2 className="font-bold text-black text-xl font-bricolage">
            Dashboard
          </h2>
          <p className="text-[#667085] font-inter text-sm">
            An overview of the status of all pitched ideas
          </p>
        </div>
        {/* =======================PITCH COUNT  */}
        <div
          className={`flex justify-between items-center gap-4 border-b  ${homeSections}`}
        >
          {PitcheCount.map((item) => (
            <div
              className="py-[18px] px-[16px] border-l first:border-l-0"
              key={item.id}
            >
              <p className="text-[#667085] mb-2 text-xs">{item.label}</p>
              <span className="font-bold text-black text-xl">{item.value}</span>
            </div>
          ))}
        </div>

        {/* ===============================CHARTS */}
        <div
          className={`flex gap-10  w-full justify-between items-start  ${homeSections} relative`}
        >
          <div style={{ width: "45%", height: "400px" }}>
            <div className="flex items-center justify-between gap-2 mb-4  ">
              <h2 className="flex items-center justify-between gap-2 font-bold text-lg">
                <FaGlobe />
                Applicant Countries
              </h2>
              <div className="p-2 rounded-md bg-slate-100 cursor-pointer">
                <p className="flex items-center justify-between gap-2 text-sm">
                  This year <FaChevronDown />
                </p>
              </div>
            </div>

            <BarChart />
          </div>
          <div style={{ width: "45%", height: "500px" }}>
            <div className="flex items-center justify-between gap-2 mb-4  ">
              <h2 className="flex items-center justify-between gap-2 font-bold text-lg">
                <FaGlobe />
                Pitch Status
              </h2>
              <div className="p-2 rounded-md bg-slate-100 cursor-pointer">
                <p className="flex items-center justify-between gap-2 text-sm">
                  This month <FaChevronDown />
                </p>
              </div>
            </div>

            <PieChart />
          </div>
        </div>

        {/*======================= Pitches */}
        <div
          className={`flex flex-col justify-center items-start ${homeSections}`}
        >
          <BasicTable data={data} columns={columns} />
        </div>
      </div>

      {/* Activities Panel */}
      <div className="  mb-4 flex flex-col flex-1 p-3">
        <div className="Activities">
          <h2 className="text-slate-500 mb-4 text-xl">Today</h2>
          {Activities.map((activity) => (
            <div className="flex items-center gap-2 mb-5" key={activity.name}>
              <img src={activity.img} className="rounded-full w-12" />
              <i className="text-slate-300"> {activity.icon} </i>
              <p className=" content-start">
                {activity.name}
                <span className="text-slate-500"> {activity.status} </span>
              </p>
            </div>
          ))}
        </div>
        <div className="upcoming-events  mt-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-500  text-lg">Upcoming events</h2>
            <a href="" className="underline text-black text-sm">
              See More
            </a>
          </div>
          <div>
            {Upcoming.map((item) => (
              <div key={item.name} className="flex gap-4 mb-4 items-center">
                <i className="text-xl bg-slate-200 p-3 rounded-full">
                  {item.icon}
                </i>
                <div key={item.name} className="flex flex-col ">
                  <h3 className="font-bold text-xl text-black">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.Date}</p>
                  <span className="text-sm text-slate-500">{item.Time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
