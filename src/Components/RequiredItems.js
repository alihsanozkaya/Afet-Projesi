import { Badge, Tag } from 'antd'
import React from 'react'

const RequiredItems = ({product, person, isPerson}) => {
  return (
    <div
    className="d-flex justify-content Center flex-wrap"
  >
    <Badge
      color="green"
      count={isPerson ? person.quantity: product.quantity}
      className="ml-2 my-0 p-0"
    ></Badge>
    <Tag color="blue" className="mx-0 my-2 p-1">
      {isPerson ? person.Person.name : product.Product.title}
    </Tag>
  </div>  )
}

export default RequiredItems