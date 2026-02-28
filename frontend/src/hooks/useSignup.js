import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "applicatio/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);

      setLoading(true);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Por favor, preencha todos os campos");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Senhas não correspondem");
    return false;
  }

  if (password.length < 6) {
    toast.error("A senha tem menos de 6 caracteres");
    return false;
  }
}
