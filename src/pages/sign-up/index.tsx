import React from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import styles from "./signup.module.scss";
import { Form } from "react-bootstrap";
import GoogleIcon from "../../assets/icons/google.svg";
import FormHeader from "../../components/FormHeader/FormHeader";
import MainNavbar from "../../components/Navbar/MainNavbar";
import { useRouter } from "next/router";
import Axios from "axios";
import { PATH } from "../../constants/paths";
import { motion } from "framer-motion";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { validateEmail } from "../../utils/util";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import AuthContext from "../../store/auth-context";
interface Props {
  isLoggedIn: () => void;
}

const SignUp: React.FC<Props> = ({ isLoggedIn = () => {} }: Props) => {
  const authCtx = React.useContext(AuthContext);
  const history = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [revealPassword, setRevealPassword] = React.useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [revealConfirmPassword, setRevealConfirmPassword] =
    React.useState<boolean>(false);
  const [formValidated, setFormValidated] = React.useState<boolean>(false);
  const [emailValidation, setEmailValidation] = React.useState<boolean>(false);
  const [passwordValidation, setPasswordValidation] =
    React.useState<boolean>(false);

  const [agreedTerms, setAgreedTerms] = React.useState<boolean>(false);

  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    const route = "/api/auth/register";
    const payload = {
      email: email,
      password: password,
      password_repeat: confirmPassword,
    };

    try {
      const rese = await Axios.post(route, payload)
        .then((res) => {
          authCtx.settingToken(res.data.access_token);
          isLoggedIn();
          history.push("/questionnaire");
        })
        .catch((error: any) => {
          var answer: any = "";
          Object.entries(error.response.data.errors).map(
            ([key, value]: [key: any, value: any]) => {
              answer += answer + "\n" + "Error" + " : " + value;
            }
          );
          return alert(answer);
        });
    } catch (err) {
      alert("Username or password are not good!" + err);
    }
  };

  React.useEffect(() => {
    setEmailValidation(validateEmail(email));
    setPasswordValidation(password.length >= 8);

    if (
      passwordValidation &&
      emailValidation &&
      agreedTerms === true &&
      password === confirmPassword
    ) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  }, [email, password, confirmPassword, agreedTerms]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.screenContainer}>
        <div className={styles.contentContainer}>
          <FormHeader
            primary="WELCOME TO FiveCornerRx!"
            secondary="No waiting rooms. No expensive doctors visits. Prescription treatments sent to your door, discreetly. This is the future of tele-medicine."
          />
          <div className={styles.formContainer}>
            <InputComponent
              value={email}
              setValue={setEmail}
              bigInput={true}
              type="text"
              placeholder="Enter your email"
              label="Email Address"
            />
            {email.length > 0 && !emailValidation && (
              <p className="errorMessage">Please Enter Valid Email Address</p>
            )}
            <br />
            <Row>
              <Col md={11} className="p-0 m-0">
                <InputComponent
                  value={password}
                  setValue={setPassword}
                  bigInput={true}
                  type={revealPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  label="Create Password"
                />
              </Col>
              <Col md={1} className="p-0 m-0">
                <button
                  className={styles.reveal}
                  onClick={() => {
                    setRevealPassword(!revealPassword);
                  }}
                >
                  {revealPassword ? <Eye /> : <EyeSlash />}
                </button>
              </Col>
            </Row>
            {password.length > 0 && !passwordValidation && (
              <p className="errorMessage">
                Password must contain min 8 characters
              </p>
            )}
            <br />
            <Row>
              <Col md={11} className="p-0 m-0">
                <InputComponent
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  bigInput={true}
                  type={revealConfirmPassword ? "text" : "password"}
                  placeholder="Re-type your password"
                  label="Confirm Password"
                />
              </Col>
              <Col md={1} className="p-0 m-0">
                <button
                  className={styles.reveal}
                  onClick={() => {
                    setRevealConfirmPassword(!revealConfirmPassword);
                  }}
                >
                  {revealConfirmPassword ? <Eye /> : <EyeSlash />}
                </button>
              </Col>
            </Row>
            {confirmPassword.length > 0 && password !== confirmPassword && (
              <p className="errorMessage">
                Confirm Password must match Password
              </p>
            )}
            <div className={styles.rowContent}>
              <div className={styles.remebermeCheckboxContainer}>
                <Form.Check.Input
                  className={styles.rememberMecheckbox}
                  checked={agreedTerms}
                  onChange={() => {
                    setAgreedTerms(!agreedTerms);
                  }}
                />
                <p className={styles.primaryText}>
                  I agree to the{" "}
                  <span onClick={() => history.push("/terms")}>
                    Terms of Conditions
                  </span>{" "}
                  and
                  <span onClick={() => history.push("/privacy-policy")}>
                    {" "}
                    Privacy Policy.
                  </span>
                </p>
              </div>
            </div>
            {!agreedTerms && (
              <p className="errorMessage">You must agree to the terms</p>
            )}

            <button
              disabled={!formValidated}
              onClick={onSubmitForm}
              className={styles.formBtn + " " + styles.dangerBtn}
            >
              Sign Up
            </button>
            {/* <button className={styles.formBtn + " " + styles.secondaryBtn}>
              <Image alt="googleIcon" src={GoogleIcon} width={24} height={24} />
              Continue with Google
            </button> */}
            <p
              style={{ textAlign: "center" }}
              onClick={() => history.push(PATH.SignIn)}
              className={styles.primaryText}
            >
              Already have an account? <span>Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default SignUp;
