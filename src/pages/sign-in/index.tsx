import React from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import styles from "./signin.module.scss";
import { Container, Form } from "react-bootstrap";
import GoogleIcon from "../../assets/icons/google.svg";
import FormHeader from "../../components/FormHeader/FormHeader";
import MainNavbar from "../../components/Navbar/MainNavbar";
import { useRouter } from "next/router";
import { PATH } from "../../constants/paths";
import { motion } from "framer-motion";
import { validateEmail } from "../../utils/util";
import Image from "next/image";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
interface Props {
  isLoggedIn: () => void;
}

const SignIn: React.FC<Props> = ({ isLoggedIn = () => {} }: Props) => {
  const [formValidated, setFormValidated] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const authCtx = React.useContext(AuthContext);
  const [emailValidation, setEmailValidation] = React.useState<boolean>(false);
  const [passwordValidation, setPasswordValidation] =
    React.useState<boolean>(false);
  const history = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const route = "/api/auth/login/";
    const payload = {
      email: email,
      password: password,
    };
    try {
      const rese = await Axios.post(route, payload)
        .then((res) => {
          authCtx.settingToken(res.data.access_token);
          isLoggedIn();
          history.push("/dashboard");
        })
        .catch((error: any) => {
          alert(error.response.data.errors.password);
        });
    } catch (err) {
      alert("Username or password are not good!" + err);
    }
  };

  React.useEffect(() => {
    setEmailValidation(validateEmail(email));
    setPasswordValidation(password.length >= 5);

    if (passwordValidation && emailValidation) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  }, [email, password]);

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
            primary="Sign in to your account"
            secondary="No waiting rooms. No expensive doctors visits. Sign in to access your account."
          />
          <div className={styles.formContainer}>
            <InputComponent
              value={email}
              setValue={setEmail}
              bigInput={true}
              type="email"
              placeholder="Enter your email"
              label="Email Address"
            />
            {email.length > 0 && !emailValidation && (
              <p className="errorMessage">Please Enter Valid Email Address</p>
            )}
            <br />
            <InputComponent
              value={password}
              setValue={setPassword}
              bigInput={true}
              type="password"
              placeholder="Enter your password"
              label="Password"
            />
            {password.length > 0 && !passwordValidation && (
              <p className="errorMessage">
                Password must contain min 5 characters
              </p>
            )}
            <div className={styles.rowContent}>
              <div className={styles.remebermeCheckboxContainer}>
                <Form.Check.Input
                  className={styles.rememberMecheckbox}
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);
                  }}
                />

                <p className={styles.primaryText}>Remember me</p>
              </div>
              {/* <p className={styles.primaryText + " " + styles.forgotPassText}>
                Forgot password?
              </p> */}
            </div>
            <button
              disabled={!formValidated}
              onClick={handleSubmit}
              className={styles.formBtn + " " + styles.dangerBtn}
            >
              Sign In
            </button>
            {/* <button className={styles.formBtn + " " + styles.secondaryBtn}>
              <Image src={GoogleIcon} width={24} height={24} alt="" />
              Continue with Google
            </button> */}
            <p style={{ textAlign: "center" }} className={styles.primaryText}>
              Don't have an account?{" "}
              <span onClick={() => history.push(PATH.SignUp)}>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default SignIn;
