import axios from "axios";
import { useEffect, useState } from "react";

export default function useUserData(method, url, payload) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.request({
          data: payload,
          method,
          url,
        });
        console.log(response.data);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, []);
  return {
    userData,
    loading,
    error,
  };
}
