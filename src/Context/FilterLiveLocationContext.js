import React, {createContext , useEffect ,useState, useReducer} from "react";
import axios from 'axios'
export const FilterLiveLocationContext = createContext();

const initialState = {
    userLocations: []
}
export const getAllUserLocationFilterReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
    
      case "FILTER_BY_ROLE_REQUEST" : 
        return { ...state, loading: true };
  

      case "FILTER_BY_ROLE_SUCCESS" : 
        return {
          ...state,
          loading: false,
          success: true,
          userLocations: action.payload,
        };

      case "FILTER_BY_ROLE_FAIL" : 
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
        case "FILTER_BY_ROLE_RESET" : 
        return {
          ...state,
          success : false ,
          
        }
      default:
        return state;
    }
  

  };
  export const GetUsersByRole = (userRoles) => async (dispatch) => {
   
   
}
  

export const FilterLiveLocationContextProvider = ({children}) =>{
    
  const [filterLocations, dispatch] = useReducer(getAllUserLocationFilterReducer, initialState);
  const [selectedRoles, setSelectedRoles] = useState([])
  const fetchFilterLiveLocationWithDispatch = async () => {
  try {
    dispatch({
      type: "FILTER_BY_ROLE_REQUEST",
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/users/filter-by-role?userRoles=${selectedRoles}`
    );

    dispatch({
      type: "FILTER_BY_ROLE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FILTER_BY_ROLE_FAIL",
      error: error.response,
    });
  }
};
useEffect(() => {
  fetchFilterLiveLocationWithDispatch();
  
}, []);
  return(
        <FilterLiveLocationContext.Provider value={{filterLocations, dispatch,fetchFilterLiveLocationWithDispatch,selectedRoles, setSelectedRoles}}>
            {children}
        </FilterLiveLocationContext.Provider>
    )
}