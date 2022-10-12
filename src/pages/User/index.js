import React from 'react'
import { useSelector } from 'react-redux'

export default function UserPage() {
  const {userInfo} = useSelector(({user}) => user)
  console.log(userInfo)
  return (
    <div>
      你好，{userInfo.name}
    </div>
  )
}
