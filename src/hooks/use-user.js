import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/user";
import { getUserByUserId } from "../serevices/firebase";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(userContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      // we need a function that we can call (firebase service) that gets the user data based on the id
      const [response] = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
}

// import React, { useContext, useEffect, useState } from "react";
// import userContext from "../context/user";
// import { getUserObjByUserId } from "../serevices/firebase";

// export default function useUser(userId) {
//   const [activeUser, setActiveUser] = useState();

//   useEffect(() => {
//     async function getUserObjByUserId(userId) {
//       const [user] = await getUserObjByUserId (userId);
//       setActiveUser(user || {});
//     }

//     if (userId) {
//       getUserObjByUserId(userId);
//     }
//   }, [userId]);

//   return { user: activeUser, setActiveUser };
// }
