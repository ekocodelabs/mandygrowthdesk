import Image from "next/image";
import HeaderLayout from "../myComponent/HeaderLayout";
import AboutLayout from "@/myComponent/AboutLayout";
import ServicesLayout from "@/myComponent/ServicesLayout";
import GrowthCalculatorLayout from "@/myComponent/GrowthCalculatorLayout";
import MultiLeadFormLayout from "@/myComponent/MultiLeadFormLayout";
import CasestudyLayout from "@/myComponent/CasestudyLayout";
import NavbarLayout from "@/myComponent/NavbarLayout";
import FooterLayout from "@/myComponent/FooterLayout";
import ContactLayout from "@/myComponent/ContactLayout";

export default function Home() {
  return (
    <>
      <NavbarLayout />
      <HeaderLayout />
      <AboutLayout />
      <ServicesLayout />
      <GrowthCalculatorLayout />
      <CasestudyLayout />
      <MultiLeadFormLayout />
      <ContactLayout />
      <FooterLayout />
    </>
  );
}
