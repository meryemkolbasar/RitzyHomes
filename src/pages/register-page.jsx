import React from "react";
import PageHeader from '../components/common/page-header'
import RegisterForm from "../components/register/register-form";
import Spacer from '../components/common/spacer'
 
const RegisterPage = () => {
  return (
    <>
      <PageHeader title="REGISTER" />
      <RegisterForm />
      <Spacer />
    </>
  );
};

export default RegisterPage;
