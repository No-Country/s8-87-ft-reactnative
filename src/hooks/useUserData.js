import { useState, useEffect } from "react";

export const useUserData = (db, table, userId) => {
  const [dataUser, setDataUser] = useState(null);
  const [error, setError] = useState(null);

  const getUserById = async (id) => {
    console.log(userId);
    const dbRef = db.collection({ table }).doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setDataUser(user);
  };

  useEffect(() => {
    getUserById(userId);
  });
  console.log(dataUser);
  return dataUser;
};
