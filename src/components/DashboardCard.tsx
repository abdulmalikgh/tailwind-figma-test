import React from 'react';

const DashboardCard = () => {
  return (
    <div className="w-[600px] md:flex-1 bg-secondary rounded-lg border border-customGray">
      {/* CARD HEADER */}
      <div className="w-full flex justify-between h-[60px] px-2 items-center border-b border-customGray">
        <div className="flex justify-between items-center gap-2">
          <img src="../public/Mask group.svg" alt="" />
          <span className="text-base">Caraway</span>
        </div>
        <button className="bg-transparent border border-dark rounded-lg p-2 text-sm">
          Save Funnel
        </button>
      </div>

      {/* CARD BODY */}
      <div className="p-4">
        <div className="flex justify-between gap-2">
          <div className="">
            <h3 className="text-textMuted text-sm mb-1 font-bold">Ad Creative</h3>
            <div className="">
              <img src="../public/creative-vertical.svg" alt="" />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="border-b border-customPurple w-full"> </div>
          </div>
          <div className="">
            <h3 className="text-textMuted text-sm mb-1 font-bold">Landing page</h3>
            <div className="">
              <img src="../public/creative-vertical (1).svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* CARD BODY */}

      {/* CARD FOOTER  */}
      <div className="w-full flex justify-end items-center px-2 h-[60px] border-t border-customGray gap-3">
        <button className="bg-transparent border border-dark rounded-lg p-2 text-sm">
          Request Template
        </button>
        <button className="bg-transparent border border-dark rounded-lg p-2 text-sm">
          Viw Funnel
        </button>
        <button className="bg-transparent border border-dark rounded-lg p-2 text-base">
          <img src="../public/Group 93.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;