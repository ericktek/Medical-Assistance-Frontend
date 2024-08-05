import { useSession } from 'next-auth/react'
import React from 'react'

const DashboardTesting = () => {
    const { Data: session, status } = useSession();
  return (
    <div>
<p>Welcome, {session.user.username || session.user.name || "Guest"}</p>
    </div>
  )
}

export default DashboardTesting