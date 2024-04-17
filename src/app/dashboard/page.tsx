
import { auth } from '@/utils/auth';
import { redirect } from 'next/navigation'
import React from 'react'



const Dashboard = async () => {
  const session = await auth()
  console.log(!session);

  if (!session) redirect("/")

  return (
    <h1>داشبورد</h1>
  )
}

export default Dashboard