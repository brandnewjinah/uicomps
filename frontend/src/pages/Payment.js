import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

const Payment = () => {
  const formik = useFormik({
    initialValues: {
      ccnumber: "",
      name: "",
      expiration: "",
      cvv: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (setFieldValue, field, e) => {
    if (field === "ccnumber") {
      let val = e.target.value
        .replace(/[^\d]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      setFieldValue(field, val);
    }
    if (field === "expiration") {
      let val = e.target.value && e.target.value.split("/").join("");
      let newVal = val && val.match(/.{1,2}/g).join("/");
      setFieldValue(field, newVal);
    }

    if (field === "cvv") {
      let val = e.target.value.replace(/[^\d]/g, "");
      setFieldValue(field, val);
    }
  };
  console.log("form values", formik.values);

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="ccnumber">Credit Card Number</label>
        <input
          type="text"
          pattern="\d*"
          name="ccnumber"
          maxLength="19"
          onChange={(e) => handleChange(formik.setFieldValue, "ccnumber", e)}
          value={formik.values.ccnumber}
        />

        <label htmlFor="expiration">Cardholder Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="expiration">Expiraton</label>
        <input
          type="text"
          name="expiration"
          maxLength="5"
          onChange={(e) => handleChange(formik.setFieldValue, "expiration", e)}
          value={formik.values.expiration}
        />

        <label htmlFor="channel">CVV</label>
        <input
          type="text"
          name="cvv"
          maxLength="3"
          onChange={(e) => handleChange(formik.setFieldValue, "cvv", e)}
          value={formik.values.cvv}
        />

        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  input {
    display: block;
  }
`;

export default Payment;
