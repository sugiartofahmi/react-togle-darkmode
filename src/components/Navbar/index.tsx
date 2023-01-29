import { FC, ReactElement, useEffect, useState } from "react";
import NavLayout from "../../layouts/NavLayout";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar: FC = (): ReactElement => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  const togleDarkMod = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <NavLayout>
      <div className="gap-x-[45px] text-lg flex flex-row">
        <h1 className="font-bold">Fatamorgana</h1>
        <ul className="flex flex-row gap-x-[30px] ">
          <Link to="/" className="cursor-pointer ">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-x-5">
        {theme === "dark" ? (
          <BsSun onClick={togleDarkMod} className="cursor-pointer " size={25} />
        ) : (
          <BsMoon onClick={togleDarkMod} size={20} />
        )}

        <h1 className="text-lg">Fahmi Sugiarto</h1>
      </div>
    </NavLayout>
  );
};

export default Navbar;
