
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  console.log(!session);
  
  if(!session) redirect("/")
 
  return (
    <h1>داشبورد</h1>
  )
}

export default Dashboard