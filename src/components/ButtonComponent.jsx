import React from "react";

const ButtonComponent = ({ onClick, label, disabled }) => {
  const BtnStyle =
    "bg-orange-500 text-white py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full font-bold cursor-pointer hover:bg-orange-600 text-sm sm:text-base md:text-lg mt-4";

  return (
    <button onClick={onClick} className={BtnStyle}>
      {label}
    </button>
  );
};

export default ButtonComponent;
