import React, { useEffect, useState } from "react";

const Hintsboard = ({ hints, wrong, setWrong }) =>{
  const [ displayHints, setDisplayHints ] = useState();
  const copyHints = [...hints]
  useEffect(() => {
    if (wrong && copyHints.length) {
      setDisplayHints(copyHints.pop());
      setWrong(false);
    } else if(!copyHints.length){
      return <div> No more hints </div>
    } else {
      return <div> Great job next question </div>
    }
  }, [wrong]);
  return(
    <div>
      {displayHints}
    </div>
  );
};
export default Hintsboard;