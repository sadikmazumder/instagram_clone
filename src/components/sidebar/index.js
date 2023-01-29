import React from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();

  //console.log("fullName, username, userId", fullName, username, userId);
  return (
    <div className="p-4">
      <User />
      <Suggestion />
    </div>
  );
}
