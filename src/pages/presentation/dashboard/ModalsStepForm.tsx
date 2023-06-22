import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, useFormik } from "formik";
import Page from "../../../layout/Page/Page";
import Modal, {
  ModalBody,
  ModalFooter,
} from "../../../components/bootstrap/Modal";
import Input from "../../../components/bootstrap/forms/Input";
import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import Checks from "../../../components/bootstrap/forms/Checks";
import Select from "../../../components/bootstrap/forms/Select";

import DashboardScreen from "../../../assets/img/wanna/wanna5.png";

const ModalsStepForm: React.FC = () => {
  const savedValue = localStorage.getItem("user");
  const parsedValue = savedValue ? JSON.parse(savedValue) : null;
  // Access the properties of the parsed object
  const newUserEmail = parsedValue?.newUserEmail;
  const newUserName = parsedValue?.newUserName;
  const newUserPassword = parsedValue?.newUserPassword;
  const newUserSurname = parsedValue?.newUserSurname;
  // Formik uses
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      newUserEmail: "",
      newUserteliphone: "",
      newUserPassword: "",
      newUserConformation: "",
    },
    validate: (values) => {
      const errors: {
        newUserEmail?: string;
        newUserteliphone?: string;
        newUserPassword?: string;
        newUserConformation?: string;
      } = {};
      if (!values.newUserEmail) {
        errors.newUserEmail = "Required";
      }

      if (!values.newUserteliphone) {
        errors.newUserteliphone = "Required";
      }
      if (!values.newUserPassword) {
        errors.newUserPassword = "Required";
      }
      if (!values.newUserConformation) {
        errors.newUserConformation = "Required";
      }

      return errors;
    },
    validateOnChange: false,
    onSubmit: (_values) => {},
  });

  // Steps forms
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    navigate("/");
  };

  return (
    <Page className="w-100 mt-10">
      <Modal isOpen setIsOpen={setIsOpen} id="sdmsk12" size="lg">
        <ModalBody>
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              {steps[currentStep] === "Step 1" ? (
                <div>
                  <div className="text-center h1 my-3 fw-bold">MA OSSIM</div>
                  <div className="text-center display-2 fw-bold mb-5 lh-1">
                    START YOUR FREE TRAIL
                  </div>
                  <div className="text-center text-muted h5 mb-5">
                    Try all the features -{" "}
                    <span className="text-danger">
                      No credit card required??
                    </span>
                  </div>
                  <div className="mb-3">
                    <FormGroup id="signup-email" isFloating label="EMAIL">
                      <Input
                        type="email"
                        name="newUserName"
                        value={newUserEmail}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup id="signup-email" isFloating label="TELEPHONE">
                      <Input
                        type="tel"
                        name="newUserteliphone"
                        onChange={formik.handleChange}
                        value={formik.values.newUserteliphone}
                        isValid={formik.isValid}
                        isTouched={formik.touched.newUserteliphone}
                        invalidFeedback={formik.errors.newUserteliphone}
                        onBlur={formik.handleBlur}
                        onFocus={() => {
                          formik.setErrors({});
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup id="password" isFloating label="PASSWORD">
                      <Input
                        type="password"
                        name="newUserPassword"
                        onChange={formik.handleChange}
                        value={formik.values.newUserPassword}
                        isValid={formik.isValid}
                        isTouched={formik.touched.newUserPassword}
                        invalidFeedback={formik.errors.newUserPassword}
                        onBlur={formik.handleBlur}
                        onFocus={() => {
                          formik.setErrors({});
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup
                      id="confirmpassword"
                      isFloating
                      label="CONFIRM PASSWORD"
                    >
                      <Input
                        type="password"
                        name="newUserConformation"
                        onChange={formik.handleChange}
                        value={formik.values.newUserConformation}
                        isValid={formik.isValid}
                        isTouched={formik.touched.newUserConformation}
                        invalidFeedback={formik.errors.newUserConformation}
                        onBlur={formik.handleBlur}
                        onFocus={() => {
                          formik.setErrors({});
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup>
                      {/* <input
                        type="checkbox"
                        name="newUserConformation"
                        value={formik.values.newUserConformation}
                      /> */}
                      <Checks
                        type="checkbox"
                        checked="checked"
                        label="I agree to the Terms of Use and Privacy Policy"
                      ></Checks>
                      {/* <Link to="" className="mx-2">
                        </Link>
                        <Link to="" className="mx-2"></Link> */}
                    </FormGroup>
                  </div>
                </div>
              ) : steps[currentStep] === "Step 2" ? (
                <div>
                  <div className="text-center h1 fw-bold mb-4">
                    Welcome to MA OSSIM!
                  </div>
                  <div className="text-center h3 mb-4">
                    Let’s set up your account
                  </div>
                  <div className="text-center h5 mb-4">
                    You can always change it later
                  </div>
                  <div className="mb-3">
                    <FormGroup id="signup-company" isFloating label="COMPANY">
                      <Input type="text" name="newUserCompany" value="" />
                    </FormGroup>
                  </div>
                </div>
              ) : steps[currentStep] === "Step 3" ? (
                <div>
                  <div className="text-center h1 fw-bold mb-4">
                    Welcome to MA OSSIM!
                  </div>
                  <div className="text-center h4 mb-4">
                    Let’s set up your account
                  </div>
                  <div className="text-center text-muted h5 mb-4">
                    You can always change it later
                  </div>
                  <div className="mb-3">
                    <FormGroup id="firstname" isFloating label="NAME">
                      <Input type="text" name="firstname" value="" />
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup id="lastname" isFloating label="SURNAME">
                      <Input type="text" name="lastname" value="" />
                    </FormGroup>
                  </div>
                </div>
              ) : steps[currentStep] === "Step 4" ? (
                <div>
                  <div className="text-center h1 fw-bold mb-4">
                    Which best describes you?
                  </div>
                  <div className="text-center h4 mb-5">
                    This will help us adapt the platform to fit your business
                    needs
                  </div>
                  <div className="mb-3">
                    <FormGroup>
                      <Checks
                        type="radio"
                        name="describescheck"
                        checked="checked"
                        label="Student"
                      ></Checks>
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup>
                      <Checks
                        type="radio"
                        label="New Entrepreneur (1 year and less)"
                        name="describescheck"
                      ></Checks>
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup>
                      <Checks
                        type="radio"
                        label="Entrepreneur (2-3 years)"
                        name="describescheck"
                      ></Checks>
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup>
                      <Checks
                        type="radio"
                        label="Entrepreneur (more than 3 years)"
                        name="describescheck"
                      ></Checks>
                    </FormGroup>
                  </div>
                  <div className="mb-3 mt-4">
                    <FormGroup
                      id="activity"
                      label="Field of activity"
                      //   isFloating
                    >
                      <Select
                        ariaLabel="activity"
                        placeholder="Choose..."
                        list={[
                          { value: "a1", text: "Field of activity 1" },
                          { value: "a2", text: "Field of activity 2" },
                          { value: "a3", text: "Field of activity 3" },
                          { value: "a4", text: "Field of activity 4" },
                        ]}
                        // onChange={formikAddress.handleChange}
                        // onBlur={formikAddress.handleBlur}
                        // value={formikAddress.values.state}
                        // isValid={formikAddress.isValid}
                        // isTouched={formikAddress.touched.state}
                        // invalidFeedback={formikAddress.errors.state}
                      />
                    </FormGroup>
                  </div>
                </div>
              ) : steps[currentStep] === "Step 5" ? (
                <div>
                  <div className="text-center h1 fw-bold mb-4">MA OSSIM</div>
                  <div className="text-center h4 mb-5">
                    How many are you on your team?
                  </div>
                  <div className="team-button text-center h-100">
                    <button
                      type="button"
                      className="btn btn-light-info px-4 m-1"
                    >
                      Just Me
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-info px-4 m-1"
                    >
                      2-4
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-info px-4 m-1"
                    >
                      5-10
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-info px-4 m-1"
                    >
                      11-30
                    </button>
                    <button
                      type="button"
                      className="btn btn-light-info px-4 m-1"
                    >
                      31+
                    </button>
                  </div>
                </div>
              ) : steps[currentStep] === "Step 6" ? (
                <div>
                  <div className="text-center h1 fw-bold mb-4">MA OSSIM</div>
                  <div className="text-center h4 mb-5">
                    Where are you located?
                  </div>
                  <div className="text-center h5 mb-5">
                    This will help us adapt the platform to fit your business
                    needs.
                  </div>
                  <div className="mb-3">
                    <FormGroup
                      id="countries"
                      label="Countries"
                      //   isFloating
                    >
                      <Select
                        ariaLabel="countries"
                        placeholder="Choose from list of countries"
                        list={[
                          { value: "count1", text: "Alabama" },
                          { value: "count2", text: "Alaska" },
                          { value: "count3", text: "Arizona" },
                          { value: "count4", text: "Arkansas" },
                        ]}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb-3">
                    <FormGroup
                      id="cities"
                      label="Cities"
                      //   isFloating
                    >
                      <Select
                        ariaLabel="cities"
                        placeholder="Choose from list of cities"
                        list={[
                          { value: "city1", text: "Andalusia" },
                          { value: "city2", text: "Anchorage" },
                          { value: "city3", text: "Avondale" },
                          { value: "city4", text: "Arkadelphia" },
                        ]}
                      />
                    </FormGroup>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-center h2 fw-bold mb-4">
                    <img src={DashboardScreen} alt="DashboardScreen" />
                  </div>
                  <div className="text-center h2 fw-bold mb-4">
                    Welcome to MaOssim, we hope you enjoy it and make the most
                    of it !
                  </div>
                  <div className="text-center h4 mb-5">
                    An all-in-one platform that will allow you to promote your
                    business with confidence.
                  </div>
                </div>
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="justify-content-center">
          {/* <h2>{steps[currentStep]}</h2>
          <p>Step {currentStep + 1} content goes here.</p> */}

          <div className="steps-action">
            {currentStep > 0 && (
              <button
                onClick={previousStep}
                className="btn btn-light-info border-transparent px-4 mx-1"
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button onClick={nextStep} className="btn btn-info px-4 mx-1">
                Next
              </button>
            )}
            {currentStep === steps.length - 1 && (
              <button onClick={closeModal} className="btn btn-info px-4 mx-1">
                Submit
              </button>
            )}
          </div>
        </ModalFooter>
        <ModalFooter className="justify-content-center">
          <div className="mb-3 text-muted">
            Already have an account?
            <Link to="" className="ms-2">
              Login
            </Link>
          </div>
        </ModalFooter>
      </Modal>
    </Page>
  );
};

export default ModalsStepForm;
