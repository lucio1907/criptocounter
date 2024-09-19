import React from "react";

const NavButtons = (): React.ReactElement => {
  return (
    <div className="w-full h-[200px] px-3">
      <ul className="flex justify-center mt-10 gap-10">
        <li className="flex flex-col">
          <a href="/" className="w-full bg-slate-500 rounded-3xl p-3">
            <img
              src="/logo_inicio_1.webp"
              alt="logo-inicio"
              className="w-[80px] h-[80px] object-contain"
            />
          </a>
        </li>
        <li className="flex flex-col">
          <a href="/" className="w-full bg-slate-500 rounded-3xl p-3">
            <img
              src="/logo_menu_casino_1.webp"
              alt="logo-inicio"
              className="w-[80px] h-[80px] object-contain"
            />
          </a>
        </li>
        <li className="flex flex-col">
          <a href="/" className="w-full bg-slate-500 rounded-3xl p-3">
            <img
              src="/logo_airdrop_1.webp"
              alt="logo-inicio"
              className="w-[80px] h-[80px] object-contain"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavButtons;
