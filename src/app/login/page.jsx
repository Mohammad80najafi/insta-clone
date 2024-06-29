"use client";

import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { status } = useSession();
  console.log(status);
  return <div onClick={() => signIn()}>Login</div>;
};

export default Login;
