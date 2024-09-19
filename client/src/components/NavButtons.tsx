import React from "react";

const NavButtons = (): React.ReactElement => {
  return (
    <div className="w-full h-[200px] px-4">
      <ul className="flex justify-center mt-10 gap-4">
        <li className="flex flex-col">
          <a href="/" className="w-full bg-slate-500 rounded-3xl py-1  px-4">
            <img
              src="/logo_inicio_1.webp"
              alt="logo-inicio"
              className="w-[80px] h-[80px] object-contain"
            />
          </a>
        </li>
        <li className="flex flex-col">
          <a href="/" className="w-full bg-slate-500 rounded-3xl py-1 px-4">
            <img
              src="/logo_menu_casino_1.webp"
              alt="logo-inicio"
              className="w-[80px] h-[80px] object-contain"
            />
          </a>
        </li>
        <li className="flex flex-col">
          <a href="/" className="w-full bg-slate-500 rounded-3xl py-1 px-4">
            <img
              src="/logo_airdrop_1.webp"
              alt="logo-inicio"
              className="w-[80px] h-[80px] object-contain"
            />
          </a>
        </li>
        <li className="flex flex-col">
          <a
           href="/" className="w-full bg-slate-500 rounded-3xl py-1 px-4">
            <img src="/tasknuevo.webp"
             alt="Recompensas"
             className="w-[80px] h-[80px] object-contain">
            
            </img>
            
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavButtons;
