import * as React from "react";
import { BtnTypes, is18YearsOld } from "../../utils/util";
import ActionButton from "../ActionButton/ActionButton";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import InputComponent from "../InputComponent/InputComponent";
import Image from "next/image";
import Axios from "axios";

import AuthContext from "../../store/auth-context";
type Props = {
  step_no: number;
  setStep_no: React.Dispatch<React.SetStateAction<number>>;
};
const CompleteProfile: React.FC<Props> = ({ step_no, setStep_no }) => {
  const authCtx = React.useContext(AuthContext);
  const [formValidated, setFormValidated] = React.useState<boolean>(false);
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [dob, setDOB] = React.useState<Date | null>(null);

  const handleSubmit = async (event: any) => {
    var dateObj: any = dob;
    var date = dateObj
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");

    event.preventDefault();
    const route = "/api/case/medical-form";
    const payload = {
      firstName: firstName,
      lastName: lastName,
      dob: date,
    };
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), payload })
        .then((res) => {
          step_no < 3 && setStep_no(step_no + 1);
        })
        .catch((error) => {
          var answer: any = "";
          Object.entries(error.response.data.errors).map(
            ([key, value]: [key: any, value: any]) => {
              answer += answer + "\n" + "Error" + " : " + value;
            }
          );

          return alert(answer);
        });
    } catch (err) {
      alert("Username or password are not good! 22" + err);
    }
  };

  React.useEffect(() => {
    if (
      firstName.length >= 3 &&
      lastName.length >= 3 &&
      dob &&
      is18YearsOld(dob)
    ) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  }, [firstName, lastName, dob]);

  console.log("dob", is18YearsOld(dob));

  return (
    <div>
      <InputComponent
        value={firstName}
        setValue={setFirstName}
        type="text"
        placeholder="Enter first name"
        label="Patient First Name"
        bigInput={true}
      />
      {firstName && firstName.length < 3 && (
        <p className="errorMessage">First name must contain min 3 characters</p>
      )}
      <br />
      <InputComponent
        value={lastName}
        setValue={setLastName}
        type="text"
        placeholder="Enter last name"
        label="Patient Last Name"
        bigInput={true}
      />
      {lastName && lastName.length < 3 && (
        <p className="errorMessage">Last name must contain min 3 characters</p>
      )}
      <br />
      {/* <InputComponent type="text" placeholder="DD/MM/YYYY" label="Date of Birth" bigInput={true} /> */}
      <DatePickerComponent
        placeholder="DD/MM/YYYY"
        bigInput={true}
        label="Date of Birth"
        setDate={setDOB}
        date={dob}
      />
      {dob && !is18YearsOld(dob) && (
        <p className="errorMessage">
          You must be at least 18 years old to proceed
        </p>
      )}
      <br />
      <br />
      <ActionButton
        disabled={!formValidated}
        action={() => {
          handleSubmit(event);
        }}
        type={BtnTypes.Success}
        text="Next"
      />
    </div>
  );
};

export default CompleteProfile;
