import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

//layout component
import { Container, Div } from "../components/layout/Container";
import { LoginCard } from "../components/Card";

//components
import { Input } from "../components/Input";
import Button from "../components/Button";
import { Checkbox } from "../components/Checkbox";

//token
import { blue, neutral, spacing } from "../components/token";
import { Google } from "../assets/Icons";

//redux
import { signin, signup } from "../reducers/authReducer";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSwitch = () => {
    setIsSignup((prev) => !prev);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj; //? does not throw an error
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In Failed");
  };

  const handleSubmit = (values) => {
    if (isSignup) {
      dispatch(signup(values, history));
    } else {
      dispatch(signin(values, history));
    }
  };

  const validate = Yup.object({
    email: Yup.string()
      .email("Must be a valid email form")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ...(isSignup && {
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirm password is required"),
    }),
  });

  return (
    <Container
      color={blue[10]}
      padding={`${spacing.xxxl} ${spacing.xl} ${spacing.xl}`}
    >
      <div className="flexCenter">
        <LoginCard>
          <Div padding={`${spacing.l} 0`} className="center">
            <h2>{isSignup ? "Create an account" : "Sign In"}</h2>
          </Div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              ...(isSignup && { confirmPassword: "" }),
              ...(isSignup && { acceptTerms: false }),
            }}
            validationSchema={validate}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(formik) => (
              <Form>
                <Input label="Email" name="email" type="email" />
                <Input label="Password" name="password" type="password" />
                {isSignup && (
                  <>
                    <Input
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                    />
                    <Field
                      label="I agree to the terms and conditions."
                      name="acceptTerms"
                      type="checkbox"
                      component={Checkbox}
                    />
                  </>
                )}
                <Button
                  label={isSignup ? "Sign Up" : "Sign In"}
                  color={blue[300]}
                  type="submit"
                />
              </Form>
            )}
          </Formik>
          <div className="flexCenter">
            <GoogleLogin
              clientId="670096274955-v4f3kamrodgbqhnqs8i64t22g4m0iqg7.apps.googleusercontent.com"
              render={(props) => (
                <Button
                  label="Google Login"
                  color={neutral[300]}
                  fontColor={neutral[400]}
                  icon={<Google width={16} height={16} fill={neutral[400]} />}
                  shape="outline"
                  handleClick={props.onClick}
                />
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              coookiePolicy="single_host_origin"
            />
          </div>
          <Button
            fontColor={blue[300]}
            label={
              isSignup
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"
            }
            shape="text"
            handleClick={handleSwitch}
          />
        </LoginCard>
      </div>
    </Container>
  );
};

export default Signup;
