import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import { ModernNavbar } from "./components/ModernNavbar";
import { ModernHero } from "./components/ModernHero";
import { ModernAbout } from "./components/ModernAbout";
import { ModernServices } from "./components/ModernServices";
import { ModernStylists } from "./components/ModernStylists";
import { ModernGallery } from "./components/ModernGallery";
import { ModernTestimonials } from "./components/ModernTestimonials";
import { ModernContact } from "./components/ModernContact";
import { ModernFooter } from "./components/ModernFooter";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Layout() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#EEEDE7] font-sans text-[#363C3F] antialiased selection:bg-[#363C3F] selection:text-[#EEEDE7]">
      <ModernNavbar />
      <main>
        <Outlet />
      </main>
      <ModernFooter />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <ModernHero />
      <ModernAbout />
      <ModernServices />
      <ModernStylists />
      <ModernGallery />
      <ModernTestimonials />
      <ModernContact />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "*",
        Component: HomePage,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}