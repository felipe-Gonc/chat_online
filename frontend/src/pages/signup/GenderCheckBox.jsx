import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Masculino</span>
          <input type="checkbox" className="checkbox checkbox-error border-red-500" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Feminino</span>
          <input type="checkbox" className="checkbox checkbox-error border-red-500" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
