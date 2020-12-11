import React from "react";
import { useAuth } from "./../hooks/use-auth";

export default function Error() {
  const { user } = useAuth();
  console.log(user);
  return <div>Error</div>;
}
