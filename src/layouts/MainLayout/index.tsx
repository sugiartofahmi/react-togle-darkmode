import { FC, ReactElement, ReactNode } from "react";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }): ReactElement => {
  return (
    <main className="w-full h-screen flex flex-col items-center ">
      {children}
    </main>
  );
};
export default MainLayout;
