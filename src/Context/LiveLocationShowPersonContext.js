import React, {createContext, useEffect,useReducer} from "react";
import axios from 'axios'
export const LiveLocationShowPersonContext = createContext();

const initialState = {
    userLocations: []
}
export const getAllUserLocationsReducer = (
    state =  initialState,
    action
  ) => {
    switch (action.type) {
      case "GET_USERS_LOCATIONS_REQUEST":
    
        return { ...state, loading: true };
  
      case "GET_USERS_LOCATIONS_SUCCESS":
    
        return {
          ...state,
          loading: false,
          success: true,
          userLocations: action.payload,
        };
  
      case "GET_USERS_LOCATIONS_FAIL":
   
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

  



export const LiveLocationShowPersonContextProvider = ({children}) => {
    const [stateLocationUsers, dispatch] = useReducer(getAllUserLocationsReducer, initialState);
    const fetchLiveLocationWithDispatch = async () => {
    try {
        dispatch({
          type: "GET_USERS_LOCATIONS_REQUEST",
        });
    
        const { data } = await axios.get(
          `https://afetapi.onrender.com/api/map/users`
        );
    
        dispatch({
          type: "GET_USERS_LOCATIONS_SUCCESS",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "GET_USERS_LOCATIONS_FAIL",
          error: error.response,
        });
      }
    }
    useEffect(() => {
        fetchLiveLocationWithDispatch();
      }, []);

    return(
        <LiveLocationShowPersonContext.Provider value={{stateLocationUsers , dispatch}}>
            {children}
        </LiveLocationShowPersonContext.Provider>
    )
}
