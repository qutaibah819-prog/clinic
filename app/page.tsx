import Beranda from "@/section/Beranda";
import DaftarLyan from "@/section/daftarLyan";
import Fasilitas from "@/section/Fasilitas";
import Partner_bar from "@/section/partner_bar";
import Pelayanan from "@/section/Pelayanan";
import Reservas from "@/section/Reservasi";
import Testimonial from "@/section/Testimonial";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Klinik 24",
  description:
    "Klinik 24 hadir 24 jam dengan layanan kesehatan terpercaya, konsultasi dokter, pemeriksaan medis, fasilitas nyaman, dan reservasi praktis untuk kebutuhan Anda.",
  openGraph: {
    title: "Klinik 24 | Layanan Kesehatan 24 Jam",
    description:
      "Klinik 24 hadir 24 jam dengan layanan kesehatan terpercaya, konsultasi dokter, pemeriksaan medis, fasilitas nyaman, dan reservasi praktis untuk kebutuhan Anda.",
    images: ["/og-image.jpg"],
  },
};

const page = () => {

  
  return (
    <div >
      <section className="bg-[#f2f6ff] px-4 pt-5 sm:px-8 lg:px-[100px]"><Beranda/></section>
      <section className="bg-[#e2edff] px-4 pt-5 sm:px-8 lg:px-[100px]"><Partner_bar/></section>
      <section className="bg-[#F9FBFC] px-4 pt-5 sm:px-8 lg:px-[100px]"><DaftarLyan/></section>
      <section className="bg-[#F9FBFC] px-4 pt-5 sm:px-8 lg:px-[100px]"><Pelayanan/></section>
      <section className="bg-[#F9FBFC] px-4 pt-5 sm:px-8 lg:px-[100px]"><Fasilitas/></section>
      <section className="bg-[#F9FBFC] px-4 pt-5 sm:px-8 lg:px-[100px]"><Reservas/></section>
      <section className="bg-[#F9FBFC] px-4 pt-5 sm:px-8 lg:px-[100px] mt-[50px]"><Testimonial/></section>
    


      </div>
  );
};

export default page;