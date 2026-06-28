import Hero from "@/components/sections/Hero";
import Pilares from "@/components/sections/Pilares";
import Sobre from "@/components/sections/Sobre";
import Diferenciais from "@/components/sections/Diferenciais";
import ParceiroEstrategico from "@/components/sections/ParceiroEstrategico";
import Fabricantes from "@/components/sections/Fabricantes";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Pilares />
      <Sobre />
      <Diferenciais />
      <ParceiroEstrategico />
      <Fabricantes />
      <CtaFinal />
    </>
  );
}