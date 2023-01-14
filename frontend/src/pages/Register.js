import { useState, useEffect } from "react";

function Register() {
  const { formData, setFormData } = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  return <div></div>;
}

export default Register;
