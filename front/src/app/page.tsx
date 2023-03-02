'use client'

import IFooter from "@/shared/components/footer/footer";

export default function Home() {
  return (
    <main>
      <div>
        <IFooter
          googleForm={true}
          ubicacion={true}
          confirmacion={true}
          pago={true}
          calendario={true}
        ></IFooter>
      </div>
    </main>
  );
}
