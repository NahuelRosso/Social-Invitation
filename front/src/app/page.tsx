'use client'

import IFooter, { BottomItem } from "@/shared/components/footer/footer";
import Carousel from "@/shared/components/slider/slider";
import Slider from "@/shared/components/slider/slider";

export default function Home() {
  return (
    <main>
      <div>
        <IFooter
          ubicacion="Las heras 740"
          confirmacion={true}
          pago="link de mercado pago"
          calendario=" "
        ></IFooter>
      </div>
    </main>
  );
}
