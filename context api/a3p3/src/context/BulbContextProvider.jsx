import { createContext, useState } from "react";
import App from "../App";

// Step 1: Create Context
export const BulbContext = createContext();

// Step 2.A : Provide Context
export function BulbContextProvider() {
  const [isOn, setIsOn] = useState(false);

  const switchOn = () => {
 
   setIsOn(true)
  };

  const switchOff = () => {
    /*complete the missing code*/
    setIsOn(false)
  };

  return (
    <BulbContext.Provider
      value={
        {
          isOn,
          switchOn,
          switchOff
          /*complete the missing code*/
        }
      }
    >
      {/* {props.children} */}
      <App/>
    </BulbContext.Provider>
  );
}
