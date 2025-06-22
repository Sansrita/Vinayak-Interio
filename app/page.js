import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Offer from "@/components/Offer";
import Partners from "@/components/Partners";
import Sidebar from "@/components/Sidebar";


export default function Home() {
    return (
    <>
    <HeroSection />
    <CompanySection />
    <AboutComponent />
    <Offer />
    <CatalogSwiperSection />
    <Partners />
    <ContactSection />
    <Sidebar />
    </>

    );
}