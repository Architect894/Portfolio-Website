import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css'; // Adjust path to your global CSS file
import Services from "@/components/services";
import ContactUs from "@/components/contactus";
import DropMenu from "@/components/dropMenu";
import Footer from "@/components/footer";
import HeaderTop from '@/components/headerTop';

export const metadata = {
  title: "United Pest Control",
  description: "UTPCMO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className="custom-layout"> {/* Add the custom class */}
        <HeaderTop />
        <DropMenu />
        {children}
        <Services />
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
