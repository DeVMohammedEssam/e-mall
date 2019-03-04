import React from "react";
const SectionDevider = ({ title }) => {
  return (
    <div className="section-devider">
      <div className="section-devider__devide-line" />
      <h3 className="section-devider__title">{title}</h3>
      <div className="section-devider__devide-line" />
    </div>
  );
};

export default SectionDevider;
