import React, { useEffect, useState } from 'react';

const Hintsboard = ({ hints, wrong, setWrong }) =>{
  //Pulling hints from state
  //deep copying them into copyHints
  //making empty displayHints
  //As we go, we are popping from copyHints, into displayHints. 
  //displaying displayHints.


<<<<<<< HEAD
  // const [ displayHints, setDisplayHints ] = useState(hints);
  // const copyHints = [...hints]

  // useEffect(() => {
  //   if (wrong && copyHints.length) {
  //     setDisplayHints(copyHints.pop());
  //     setWrong(false);
  //   } else if(!copyHints.length){
  //     return <div> No more hints </div>
  //   } else {
  //     return <div> Great job next question </div>
  //   }
  // }, [wrong]);

=======
  const [ displayHints, setDisplayHints ] = useState();
  const copyHints = [...hints];
  useEffect(() => {
    if (wrong && copyHints.length) {
      setDisplayHints(copyHints.pop());
      setWrong(false);
    } else if(!copyHints.length){
      return <div> No more hints </div>;
    } else {
      return <div> Great job next question </div>;
    }
  }, [wrong]);
>>>>>>> dev
  return(
    <div className="hints">
      {JSON.stringify(hints)}
    </div>
  );
};

export default Hintsboard;