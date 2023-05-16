import React, { Dispatch, SetStateAction } from "react";
import { stepTypes } from "../../constants/quessionairesteps";
import styles from "./questionnairesteps.module.scss";
import Image from "next/image";
type Props = {
  steps: stepTypes[];
  step_no: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const QuestionnaireSteps: React.FC<Props> = ({ steps, step_no, setStep }) => {
  var i = 0;
  return (
    <div className={styles.stepsContainer}>
      {steps.map((step) => {
        i++;
        return (
          <div
            onClick={() => step.step_no < step_no && setStep(step.step_no - 1)}
            className={
              step.step_no === step_no
                ? styles.step + " " + styles.stepSelected
                : styles.step
            }
            key={i}
          >
            <div className={styles.stepNoContainer}>
              <p className={styles.stepNoContainer}>{String(step.step_no)}</p>
            </div>
            <p>{step.step_text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionnaireSteps;
