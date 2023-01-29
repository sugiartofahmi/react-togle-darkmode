import { FC, Fragment, ReactElement } from "react";
import Navbar from "../../components/Navbar";
import MainLayout from "../../layouts/MainLayout";
import BaseLayout from "../../layouts/BaseLayout";
const About: FC = (): ReactElement => {
  return (
    <MainLayout>
      <Navbar />
      <BaseLayout>
        <h1>Ini About</h1>
      </BaseLayout>
    </MainLayout>
  );
};
export default About;
