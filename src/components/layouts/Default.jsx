import { Outlet } from "react-router";

import Footer from "../Footer";
import Navbar from "../Navbar";

function Default() {
  return (
    <section className="relative">
      <Navbar />
      <main className="main-screen relative">
        <Outlet />
      </main>
      <Footer styles="absolute bottom-0 w-full text-center" />
    </section>
  );
}

export default Default;
