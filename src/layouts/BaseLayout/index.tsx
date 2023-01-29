import { FC, ReactElement, ReactNode } from "react";

type BaseLayoutType = {
  children: ReactNode;
};

const BaseLayout: FC<BaseLayoutType> = ({ children }): ReactElement => {
  return (
    <main className="w-full h-screen flex flex-row justify-center items-center dark:bg-[#1B202D] dark:text-white bg-[#FEFEFF] text-[#20202D]">
      {children}
    </main>
  );
};
export default BaseLayout;
