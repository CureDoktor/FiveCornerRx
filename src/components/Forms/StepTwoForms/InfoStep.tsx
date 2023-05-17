import * as React from "react";
import Image from "next/image";
import { BtnTypes } from "../../../utils/util";
import ActionButton from "../../ActionButton/ActionButton";
import DoctorVector from "../../../assets/images/doctorvector.svg";
import Spacer from "../../Spacer/Spacer";
import "./steptwoforms.module.scss";

type Props = {
  title?: string;
  description?: string;
  step_no: number;
  setStep_no: React.Dispatch<React.SetStateAction<number>>;
  image: string;
  clickAction?: () => void;
  setHideFormHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

const InfoStep: React.FC<Props> = ({
  clickAction,
  step_no,
  setStep_no,
  title,
  description,
  image,
  setHideFormHeader,
}) => {
  React.useEffect(() => {
    setHideFormHeader(false);
  }, []);

  return (
    <div>
      <center>
        {title && (
          <p style={{ margin: "3px 0" }} className="primaryText">
            {title}
          </p>
        )}
        {description && (
          <p style={{ fontSize: "2rem" }} className="headText">
            {description}
          </p>
        )}
      </center>
      <p></p>
      <Spacer />
      <center>
        <Image src={image} alt="" width={150} height={150} />
      </center>
      <Spacer />
      <Spacer />
      <ActionButton
        action={() => step_no < 3 && setStep_no(step_no + 1)}
        type={BtnTypes.Success}
        text="Next"
      />
    </div>
  );
};

export default InfoStep;
