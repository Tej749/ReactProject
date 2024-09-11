import { useEffect, useState } from "react";

function LearningUseEffect() {
  //   //-----first page--------
  //   useEffect(() => {
  //     console.log("Hello check page");
  //     // data fetch logic
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(1);
  const [latitude, setLatitude] = useState(2343);
  const [longitude, setLongitude] = useState(12321);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const likeBadau = () => {
    setLike(count + 1);
  };

  //   useEffect(() => {
  //     console.log("haha");
  //   }, [count]);

  //   useEffect(() => {
  //     console.log("Like button");
  //   }, like);
  // };

  useEffect(() => {
    console.log("ma sadhai execute huedinxu la..");
    setLatitude(latitude + 0.1);
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <h2>Like : {like}</h2>
      <button onClick={likeBadau}>Like Me</button>
    </>
  );
}

export default LearningUseEffect;
