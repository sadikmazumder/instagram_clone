import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/user";
import { getUserObjByUserId } from "../serevices/firebase";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(userContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      // we need a function that we can call (firebase service) that gets the user data based on the id
      const [response] = await getUserObjByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
}
