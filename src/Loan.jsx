import BusinessSchema from "./schema/BusinessSchema.json";
import LoanSchema from "./schema/LoanSchema.json";
import loanUISchema from "./uiSchema/loanUISchema.json";
import "./Loan.css";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { useState } from "react";

const uiWidget = {};
const steps = [BusinessSchema, { ...LoanSchema }];

const Loan = () => {
  // console.log(steps[0]);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const onSubmit = ({ formData }) => {
    setFormData((prev) => {
      const latestData = { ...prev, ...formData };
      return latestData;
    });

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert("Form Submitted Successfully");
      console.log("Final Form Data:", formData);
    }
  };

  return (
    <>
      <div className="loan-container">
        <div className="step-indicator">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`step ${step === index ? "active" : ""}`}
            ></div>
          ))}
        </div>

        <h1>{steps[step].title}</h1>
        <Form
          schema={steps[step]}
          uiSchema={loanUISchema}
          formData={formData}
          validator={validator}
          onSubmit={onSubmit}
        />
        <div className="button-group">
          {step > 0 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Loan;
