import { createContext, useContext } from "solid-js";
import { createStore,createSignal } from "solid-js/store";

export const DropdownContext = createContext();

// Dropdown provider component
export const DropdownProvider = (props) => {
  const [selectedOption, setSelectedOption] = createSignal(null);

  return (
    <DropdownContext.Provider value={[selectedOption, setSelectedOption]}>
      {props.children}
    </DropdownContext.Provider>
  );
};

