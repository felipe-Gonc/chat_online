import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}
        >
          <span className="label-text">Masculino</span>
          <input
            type="checkbox"
            className="checkbox checkbox-error border-red-500"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}
        >
          <span className="label-text">Feminino</span>
          <input
            type="checkbox"
            className="checkbox checkbox-error border-red-500"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
