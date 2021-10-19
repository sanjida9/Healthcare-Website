import { useEffect, useState } from "react";

const useService = () => {
  const [details, setDetails] = useState([]);
  console.log(details);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return { details, setDetails };
};

export default useService;
