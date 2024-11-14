import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const { user } = useSelector((state) => state.auth);

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    user ? setisLoggedIn(true) : setisLoggedIn(false);
    setCheck(false);
  }, [user]);

  return { isLoggedIn, check };
};

export default useAuthStatus;
