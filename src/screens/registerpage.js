import React from "react";
import ScreenTemplate from "../components/templates/screenTemplate";
import { Choice } from "../components/molecules/Choice";
import {
  Form1,
  FormOng2,
  FormOng3,
  FormOng4,
  FormUser2,
} from "../components/molecules/FormRegister/";

export const Register = (props) => {
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState("");

  return (
    <ScreenTemplate>
      {(() => {
        switch (step) {
          case 0:
            return <Choice onClick={(value) => (setType(value), setStep(1))} />;
            break;
          case 1:
            return <Form1 onClick={() => setStep(2)} />;
            break;
          case 2:
            return type === "ong" ? (
              <FormOng2 onClick={() => setStep(3)} />
            ) : (
              <FormUser2 />
            );
            break;
          case 3:
            return <FormOng3 onClick={() => setStep(4)} />;
            break;
          case 4:
            return <FormOng4 />;
            break;
          default:
            window.location.href = "/";
            break;
        }
      })()}
    </ScreenTemplate>
  );
};
