import { Outlet } from "react-router";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Container from "../ui/Container";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[90vh] bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
