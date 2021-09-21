import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const TestState = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useQuery<any>(
    ["getDataAsync"],
    () => getDataAsync("https://goweather.herokuapp.com/weather/Hochiminh"),
    {
      onSuccess: (data: any) => {
        handleSetCount();
      },
    }
  );

  const getDataAsync = async (apiUrl: string): Promise<any> => {
    const response = await fetch(apiUrl);
    return response.json();
  };

  useEffect(() => {
    console.log("count", count);
    console.log("count1", count1);
  }, [count, count1]);

  const handleSetCount = () => {
    setCount(count + 1);
    setCount1(count1 + 1);
  };

  return (
    <div>
      <label>{`Current count in Project is ${count}`}</label>
      <br />
    </div>
  );
};

export default TestState;
