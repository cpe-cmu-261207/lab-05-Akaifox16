import { createContext, useEffect, useReducer } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";

export const CardContext = createContext({});

function App() {
  const reducer = (state , action) =>{
    switch(action.type){
      case "ADD_CARD":
      return {
        ...state,
        currentState: [...state.currentState, action.payload],
      };
      case "SET_CARD":
      return {
        ...state,
        currentState: action.payload,
      };
    case "DELETE_CARD":
      return {
        ...state,
        currentState: state.currentState.filter((card) => card.id !== action.payload),
      };
    }
  }
  const [state,dispatch] = useReducer(reducer, {currentState:[],})
  function fetchCards() {
    const localState = localStorage.getItem("currentState");
    if (localState) {
      dispatch({
        type: "SET_CARD",
        payload: JSON.parse(localState),
      })
    }
  }

  useEffect(fetchCards, [])
  useEffect(() => {
    localStorage.setItem("currentState", JSON.stringify(state.currentState));
  }, [state.currentState])
  
  return (
    <CardContext.Provider value = {{state,dispatch}}>
      <div>
        <h1>GPA CALCULATOR</h1>
        <CourseCard state={state.currentState} />
        <CourseForm />
      </div>
    </CardContext.Provider>
  );
}

export default App;
