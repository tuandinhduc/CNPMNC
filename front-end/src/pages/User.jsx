import React from "react";
import { useAuth } from "./../hooks/use-auth.js";

export default function User() {
  const auth = useAuth();
  console.log(auth);
  return <div>USER</div>;
}
