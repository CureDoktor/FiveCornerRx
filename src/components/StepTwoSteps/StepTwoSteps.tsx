import * as React from "react";
import { questions } from "../../constants/questions";
import { BtnTypes } from "../../utils/util";
import ActionButton from "../ActionButton/ActionButton";
import InfoStep from "../Forms/StepTwoForms/InfoStep";
import StepsCounter from "../Forms/StepTwoForms/StepsCounter";
import StepTwo from "../Forms/StepTwoForms/StepTwo";
import DoctorVector from "../../assets/images/doctorvector.svg";
import { AccordionContext, Form } from "react-bootstrap";
import styles from "./steptwosteps.module.scss";
import { useRouter } from "next/router";
import { Col, Container, Button, Row } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import Image from "next/image";
import Axios from "axios";

type Props = {
  setOuterStep: React.Dispatch<React.SetStateAction<number>>;
  setHideFormHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

const StepTwoSteps: React.FC<Props> = ({ setOuterStep, setHideFormHeader }) => {
  const [step, setSteps] = React.useState(0);

  const [questions, setQuestions] = React.useState({});
  const [showQuestions, setShowQuestions] = React.useState(false);
  const [checkedState, setCheckedState] = React.useState<any>(false);
  const router = useRouter();
  var question_i = 0;

  React.useEffect(() => {
    setHideFormHeader(true);
  }, []);

  const authCtx = React.useContext(AuthContext);
  const gettingQuestions = async () => {
    const route = "/api/case/get-questions";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res: any) => {
          setQuestions(res.data);
        })
        .catch((error: any) => {
          console.log(error);
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  const getCase = async () => {
    const route = "/api/case/get-case";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res);
          if (res.data != null) {
            //router.push("/switch");
          } else {
            gettingQuestions();
            setShowQuestions(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
  };

  React.useEffect(() => {
    getCase();
  }, []);

  const [formQuestions, setFormQuestions] = React.useState({
    Are_you_seeking_treatment_for_improved_sexual_activity: "",
    Are_you_experiencing_erectile_dysfunction_symptoms: "",
    Are_you_currently_taking_any_medication_for_ED: "",
    What_are_those_medication_for_ED_you_are_taking: "",
    Specify_other_medication_for_ED_you_are_taking: "",
    Can_you_walk_1_mile_on_a_flat_surface_in_20_minutes: "",
    How_long_does_it_take_you_to_climb_2_flights_of_stairs: "",
    Are_you_currently_taking_any_nitrate_medications: "",
    Are_you_currently_taking_any_prescription_medications: "",
    What_prescription_medications_you_are_taking: "",
    Are_you_taking_any_other_medications_vitamins_or_supplements: "",
    All_non_prescription_medications_or_drugs_you_take: "",
    Specify_non_prescription_medication: "",
    Do_you_have_allergies: "",
    allergies_details: "",
    Have_you_ever_been_told_you_are_not_healthy_enough_to_have_sexual_intercourse:
      "",
    Do_you_have_any_other_medical_conditions_or_surgeries: "",
    Records_of_Medical_Condition_and_Surgeries: "",
    Do_you_take_any_of_the_following_medications: "",
    Have_you_ever_been_diagnosed_with_low_blood_pressure: "",
    Have_you_ever_been_diagnosed_with_high_blood_pressure: "",
    How_do_you_manage_your_hypertension_without_medication: "",
    Do_you_have_any_heart_conditions_or_experience_abnormal_heart_beats_fast_irregular_unusually_slow:
      "",
    Have_you_experienced_chest_pain_pressure_or_difficulty_breathing_while_active:
      "",
    Have_you_experienced_any_episodes_of_fainting_severe_lightheadedness_dizziness:
      "",
    Have_you_experienced_any_blurry_abnormal_vision_or_severe_unexplained_headaches:
      "",
    Is_there_anything_else_you_would_like_to_tell_the_doctor: "",
    additional_notes: "",
  });

  const checkboxChange = (event: any) => {
    event.target.blur();
    const { value, name, id } = event.target;

    var arrayCheckbox = document.getElementsByName(name);
    var maskArray: any = [];

    arrayCheckbox.forEach((element: any) => {
      if (element.checked == true) {
        maskArray.push(element.value);
      }
    });

    if (value === "None Apply") {
      var arrMark: any = document.getElementsByName(name);
      for (var i = 0; i < arrMark.length; i++) {
        arrMark[i].checked = false;
      }
      event.target.checked = true;
    } else {
      var none_apply: any = document.querySelectorAll(
        "input[name='" + name + "'][value='None Apply']"
      );
      if (none_apply.length > 0) {
        none_apply[0].checked = false;
      }

      var arrayCheckbox = document.getElementsByName(name);
      var maskArray: any = [];

      arrayCheckbox.forEach((element: any) => {
        if (element.checked == true) {
          maskArray.push(element.value);
        }
      });

      //event.target.checked = true;
    }
    setFormQuestions({
      ...formQuestions,
      [name]: maskArray,
    });
  };

  const handleTextArea = (event: any) => {
    const { value, name } = event.target;

    setFormQuestions({
      ...formQuestions,
      [name]: value,
    });
  };

  const handleQuestions = (event: any) => {
    const { value, name } = event.target;
    var showMore = event.target.getAttribute("data-showmore");
    var validationRegex = event.target.getAttribute("data-regex");
    var validationReqValue = event.target.getAttribute("data-required_value");
    var validationErrorMessage =
      event.target.getAttribute("data-error_message");

    if (showMore != "null") {
      const obj = JSON.parse(showMore);

      Object.entries(obj).map(([key, value]: [key: any, value: any]) => {
        if (event.target.value === key) {
          const element: any = document.getElementById(value[0]);

          element.style.display = "block";
        } else {
          const element: any = document.getElementById(value[0]);

          element.style.display = "none";
        }
      });
    }

    if (validationReqValue != null) {
      if (value != validationReqValue) {
        alert(validationErrorMessage);
      }
    }

    setFormQuestions({
      ...formQuestions,
      [name]: value,
    });
  };

  const handleQuestionsSubmit = async (event: any) => {
    event.preventDefault();
    const route = "/api/case/save-questions";
    const payload = {
      Are_you_seeking_treatment_for_improved_sexual_activity:
        formQuestions.Are_you_seeking_treatment_for_improved_sexual_activity,
      Are_you_experiencing_erectile_dysfunction_symptoms:
        formQuestions.Are_you_experiencing_erectile_dysfunction_symptoms,
      Are_you_currently_taking_any_medication_for_ED:
        formQuestions.Are_you_currently_taking_any_medication_for_ED,
      What_are_those_medication_for_ED_you_are_taking:
        formQuestions.What_are_those_medication_for_ED_you_are_taking,
      Specify_other_medication_for_ED_you_are_taking:
        formQuestions.Specify_other_medication_for_ED_you_are_taking,
      Can_you_walk_1_mile_on_a_flat_surface_in_20_minutes:
        formQuestions.Can_you_walk_1_mile_on_a_flat_surface_in_20_minutes,
      How_long_does_it_take_you_to_climb_2_flights_of_stairs:
        formQuestions.How_long_does_it_take_you_to_climb_2_flights_of_stairs,
      Are_you_currently_taking_any_nitrate_medications:
        formQuestions.Are_you_currently_taking_any_nitrate_medications,
      Are_you_currently_taking_any_prescription_medications:
        formQuestions.Are_you_currently_taking_any_prescription_medications,
      What_prescription_medications_you_are_taking:
        formQuestions.What_prescription_medications_you_are_taking,
      Are_you_taking_any_other_medications_vitamins_or_supplements:
        formQuestions.Are_you_taking_any_other_medications_vitamins_or_supplements,
      All_non_prescription_medications_or_drugs_you_take:
        formQuestions.All_non_prescription_medications_or_drugs_you_take,
      Specify_non_prescription_medication:
        formQuestions.Specify_non_prescription_medication,
      Do_you_have_allergies: formQuestions.Do_you_have_allergies,
      allergies_details: formQuestions.allergies_details,
      Have_you_ever_been_told_you_are_not_healthy_enough_to_have_sexual_intercourse:
        formQuestions.Have_you_ever_been_told_you_are_not_healthy_enough_to_have_sexual_intercourse,
      Do_you_have_any_other_medical_conditions_or_surgeries:
        formQuestions.Do_you_have_any_other_medical_conditions_or_surgeries,
      Records_of_Medical_Condition_and_Surgeries:
        formQuestions.Records_of_Medical_Condition_and_Surgeries,
      Do_you_take_any_of_the_following_medications:
        formQuestions.Do_you_take_any_of_the_following_medications,
      Have_you_ever_been_diagnosed_with_low_blood_pressure:
        formQuestions.Have_you_ever_been_diagnosed_with_low_blood_pressure,
      Have_you_ever_been_diagnosed_with_high_blood_pressure:
        formQuestions.Have_you_ever_been_diagnosed_with_high_blood_pressure,
      How_do_you_manage_your_hypertension_without_medication:
        formQuestions.How_do_you_manage_your_hypertension_without_medication,
      Do_you_have_any_heart_conditions_or_experience_abnormal_heart_beats_fast_irregular_unusually_slow:
        formQuestions.Do_you_have_any_heart_conditions_or_experience_abnormal_heart_beats_fast_irregular_unusually_slow,
      Have_you_experienced_chest_pain_pressure_or_difficulty_breathing_while_active:
        formQuestions.Have_you_experienced_chest_pain_pressure_or_difficulty_breathing_while_active,
      Have_you_experienced_any_episodes_of_fainting_severe_lightheadedness_dizziness:
        formQuestions.Have_you_experienced_any_episodes_of_fainting_severe_lightheadedness_dizziness,
      Have_you_experienced_any_blurry_abnormal_vision_or_severe_unexplained_headaches:
        formQuestions.Have_you_experienced_any_blurry_abnormal_vision_or_severe_unexplained_headaches,
      Is_there_anything_else_you_would_like_to_tell_the_doctor:
        formQuestions.Is_there_anything_else_you_would_like_to_tell_the_doctor,
      additional_notes: formQuestions.additional_notes,
    };
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), payload })
        .then((res) => {
          // router.push("/switch");
          setOuterStep(2);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          const cure = error.response.data.errors;
          const rest = Object.entries(cure);
          var values = "";
          rest.map(([question, answer]) => {
            values = values + question + " : " + answer + "  ";
          });
          alert(values);
        });
    } catch (err) {
      alert("Username or password are not good! 22" + err);
    }
  };

  return (
    <React.Fragment>
      <Col md={{ span: 12, offset: 0 }}>
        <div>
          <br />
          <br />
          <Form onSubmit={handleQuestionsSubmit}>
            {showQuestions &&
              Object.entries(questions).map(
                ([name, question]: [name: any, queston: any]) => {
                  question_i++;
                  if (question.type === "radio") {
                    var labela = <div>{question.label}</div>;
                    if (question.validation != null) {
                      if (question.validation.message != null) {
                        var error_message = (
                          <div>{question.validation.message}</div>
                        );
                      } else {
                        error_message = <div></div>;
                      }
                    }
                    var options = Object.entries(question.answers).map(
                      ([key, value]: [key: any, value: any]) => {
                        var yesNo = "";
                        if (value === "YES" || value === "NO") {
                          yesNo = "col-md-3";
                        }
                        var validations = {
                          regex: null,
                          required_value: null,
                          message: null,
                        };
                        if (question.validation != null) {
                          validations = question.validation;
                        }

                        return (
                          <div
                            key={value.label + key}
                            className={yesNo + styles.textFont}
                          >
                            <Form.Check>
                              <Form.Check.Input
                                required
                                type="radio"
                                className="btn-check"
                                data-regex={validations.regex}
                                data-required_value={validations.required_value}
                                data-error_message={validations.message}
                                data-showmore={JSON.stringify(
                                  question.show_more
                                )}
                                name={name}
                                id={name + key}
                                onChange={handleQuestions}
                                value={key}
                              />
                              <Form.Check.Label
                                htmlFor={name + key}
                                className={
                                  styles.buttons + " btn" + " btn-primary"
                                }
                              >
                                {value}
                              </Form.Check.Label>
                              <Form.Control.Feedback type="invalid">
                                Please choose .
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        );
                      }
                    );
                    return (
                      <div
                        className={styles.textFont}
                        id={name}
                        key={question.label}
                      >
                        {labela}
                        <br /> <Row>{options}</Row>
                        <div className={styles.error_message}>
                          {question.validation.message}
                        </div>
                        <br /> <br /> <br /> <br />
                      </div>
                    );
                  } else if (question.type === "checkbox") {
                    var labela = <div>{question.label}</div>;
                    var options = Object.entries(question.answers).map(
                      ([key, value]: [key: any, value: any], index) => {
                        return (
                          <div
                            className={styles.textFont + "col-12"}
                            key={value.label + key}
                          >
                            <br />
                            <Form.Check>
                              <Form.Check.Input
                                type="checkbox"
                                className="btn-check"
                                name={name}
                                id={name + index}
                                onChange={checkboxChange}
                                value={key}
                                checked={checkedState[index]}
                              />
                              <Form.Check.Label
                                htmlFor={name + index}
                                className={
                                  styles.buttons + " btn" + " btn-primary"
                                }
                              >
                                {value}
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        );
                      }
                    );
                    return (
                      <div
                        className={styles.textFont}
                        id={name}
                        key={question.label}
                      >
                        {labela} <Row>{options}</Row>
                        <br /> <br /> <br /> <br />
                      </div>
                    );
                  } else if (question.type === "textarea") {
                    var textarea = (
                      <div>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>{question.label}</Form.Label>
                          <Form.Control
                            onChange={handleTextArea}
                            name={name}
                            as="textarea"
                            rows={3}
                          />
                        </Form.Group>
                      </div>
                    );
                    return (
                      <div
                        className={styles.textFont}
                        id={name}
                        key={question.label}
                      >
                        <div>{textarea}</div>
                        <br />
                        <br />
                      </div>
                    );
                  }
                }
              )}
            {showQuestions && (
              <Button className={styles.submitBtn} type="submit">
                Submit Questions
              </Button>
            )}
          </Form>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default StepTwoSteps;
