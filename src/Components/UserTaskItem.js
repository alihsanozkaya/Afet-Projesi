import React from 'react'
import {List } from 'antd'

const UserTask = ({task}) => {
  return (
    <List.Item>
    <List.Item.Meta
      description={task.text}
     
    />
  </List.Item>
    

  )
}

export default UserTask

