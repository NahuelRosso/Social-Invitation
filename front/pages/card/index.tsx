import Invitation from "@/shared/components/card/card";
import IFooter from "@/shared/components/footer/footer";
import React from "react";
import FormularioContacto from "@/shared/components/form_contact/form-contact";

export default function Card() {
  return (
    <main>
      <div>
        <Invitation
          guestName={"Nicolas"}
          date={""}
          time={0}
          hostName={"Bodega Mendoza"}
        ></Invitation>
      </div>
      <FormularioContacto></FormularioContacto>
      <footer>
      <IFooter
        ubicacion="Las heras 740"
        confirmacion={true}
        pago="link de mercado pago"
        calendario=" "
      ></IFooter>
      
      </footer>
     
    </main>
  );
}
