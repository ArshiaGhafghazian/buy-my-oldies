
import { redirect } from 'next/navigation'
import React from 'react'
import { auth } from '../api/auth/[...nextauth]/route';


const Dashboard = async () => {
  const session = await auth()
  console.log(!session);
  
  if(!session) redirect("/")
 
  return (
    <h1>داشبورد</h1>
  )
}

export default Dashboard