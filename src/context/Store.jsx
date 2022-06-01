import React,{useState} from 'react'

const Store = () => {
    let [user,setUser] = useState(null)
  return {user,setUser}
}

export default Store