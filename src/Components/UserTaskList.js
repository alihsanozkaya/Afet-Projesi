import { List } from "antd";
import React, {useContext , useEffect} from "react";
import UserTaskItem from './UserTaskItem.js'
import { UserTaskContext, GetUserTasks  } from "../Context/UserTaskContext";
 
const UserTaskList  = () => {
    const {state,dispatch,fetchUserTasksWithDispatch} = useContext(UserTaskContext)

  const fetchUserTasks = () => {
    fetchUserTasksWithDispatch();
  
  };
  console.log(state.userTasks) 
    return (
          <div className='scrollbar-ripe-malinka' style={{maxHeight: "200px", overflowY:"auto"}}>
        
        <List
          itemLayout="horizontal"
          dataSource={state.userTasks}
          renderItem={(task) => (
              <UserTaskItem 
                task={task}
                key={task._id}
              />
          )}
        />
        </div>
    )

}

export default UserTaskList ;