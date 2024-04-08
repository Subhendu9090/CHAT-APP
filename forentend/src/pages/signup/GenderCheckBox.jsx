import React from "react";

function GenderCheckBox({ onCheckBoxChange, selectedGender }) {
  return (
    <div className="flex">
      <div className="flex gap-3 p-1 m-2 ">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="text-white label-text">Male</span>
          <input
            type="checkbox"
            className=" checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          ></input>
        </label>
      </div>

      <div className="flex gap-3 p-1 m-2">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="text-white label-text">female</span>
          <input
            type="checkbox"
            style={{ backgroundColor: "transparent" }}
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckBox;
