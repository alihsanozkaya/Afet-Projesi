import axios from 'axios';
import React, { createContext, useReducer , useEffect} from 'react'
import UserTaskReducer from '../reducer/userTaskReducer'

export const UserTaskContext = createContext();
const initialState = {
    userTasks : [],
    success: false,
    error : null 
}


export const getUserTasksReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case "GET_USER_TASKS_REQUEST":
        return { ...state, loading: true };
  
      case "GET_USER_TASKS_SUCCESS":
        return {
          ...state,
          loading: false,
          success: true,
          
          userTasks: action.payload,
        };
  
      case "GET_USER_TASKS_FAIL":
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };



 
export const UserTaskContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(getUserTasksReducer ,initialState)
 


    const fetchUserTasksWithDispatch = async () => {
      try {
        dispatch({ type: "GET_USER_TASKS_REQUEST" });
  
        const user = JSON.parse(localStorage.getItem("user"));
        const { data } = await axios.get(
          `https://afetapi.onrender.com/api/users/${user._id}/tasks`
        );
  
        dispatch({
          type: "GET_USER_TASKS_SUCCESS",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "GET_USER_TASKS_FAIL",
          payload: error.message,
        });
      }
    };
    useEffect(() => {
        fetchUserTasksWithDispatch();
      }, []);
    

    return(
        <UserTaskContext.Provider value={{state,dispatch}}>
            {children}
        </UserTaskContext.Provider>
    )
}


