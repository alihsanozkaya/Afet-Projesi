import { List } from "antd";
import React, {useContext} from "react";
import UserTaskItem from './UserTaskItem.js'
import { UserTaskContext } from "../Context/UserTaskContext";

const UserTaskList  = () => {
    const {data} = useContext(UserTaskContext)
    return (
          <div className='scrollbar-ripe-malinka' style={{maxHeight: "200px", overflowY:"auto"}}>
        
        <List
          itemLayout="horizontal"
          dataSource={data}
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