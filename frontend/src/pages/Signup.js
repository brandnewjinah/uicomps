import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

//token
import { blue, spacing } from "../components/token";

//layout component
import { Container, Div, Article } from "../components/layout/Container";
import { LoginCard } from "../components/Card";

//components
import { Input } from "../components/Input";
import { FilledButton } from "../components/Button";
import { Checkbox } from "../components/Checkbox";

const Signup = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Must be a valid email form")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Container
      color={blue[10]}
      padding={`${spacing.xxxl} ${spacing.xl} ${spacing.xl}`}
    >
      <div className="flexCenter">
        <LoginCard>
          <Div padding={`${spacing.l} 0`} className="center">
            <h2>Create an account</h2>
          </Div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              acceptTerms: false,
            }}
            validationSchema={validate}
            onSubmit={(values) => console.log(values)}
          >
            {(formik) => (
              <Form>
                <Article padding={`${spacing.m} 0`}>
                  <Input label="Email" name="email" type="email" />
                </Article>
                <Article padding={`${spacing.m} 0`}>
                  <Input label="Password" name="password" type="password" />
                </Article>
                <Article padding={`${spacing.m} 0`}>
                  <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                </Article>
                <Article padding={`${spacing.xxs} 0`}>
                  <Field
                    label="I agree to the terms and conditions."
                    name="acceptTerms"
                    type="checkbox"
                    component={Checkbox}
                  />
                </Article>
                <Article padding={`${spacing.xxl} 0`}>
                  <FilledButton
                    label={"Sign up"}
                    primaryColor={blue[300]}
                    shape="rounded"
                    fullwidth
                    type="submit"
                  />
                </Article>
              </Form>
            )}
          </Formik>
        </LoginCard>
      </div>
    </Container>
  );
};

export default Signup;
