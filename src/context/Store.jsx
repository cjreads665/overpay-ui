import React,{useState} from 'react'

const Store = () => {
    let [user,setUser] = useState('')
  return {user,setUser}
}

export default Store