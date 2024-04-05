import React from "react";

function GenderCheckBox() {
  return (
    <div className="flex">
      <div className="flex gap-3 p-1 m-2 ">
        <span className="text-white label-text">Male</span>
        <input type="checkbox" className="w-5 "></input>
      </div>

      <div className="flex gap-3 p-1 m-2">
        <span className="text-white label-text">female</span>
        <input
          type="checkbox"
          style={{ backgroundColor: "transparent" }}
          className="w-5 bg-transparent rounded-2xl border-slate-900"
          
        />
      </div>
    </div>
  );
}

export default GenderCheckBox;
