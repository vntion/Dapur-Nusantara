import { Outlet } from "react-router";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[90vh] bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
