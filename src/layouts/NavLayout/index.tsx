import { FC, ReactElement, ReactNode } from "react";

type NavLayoutType = {
  children: ReactNode;
};

const NavLayout: FC<NavLayoutType> = ({ children }): ReactElement => {
  return (
    <main className="w-full h-[10vh] p-6 flex flex-row items-center dark:bg-[#0E1117] dark:text-white bg-[#E2E8F0] text-[#1B202D]  justify-between">
      {children}
    </main>
  );
};
export default NavLayout;
