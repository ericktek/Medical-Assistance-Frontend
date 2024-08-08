'use client'
import { useRouter } from 'next/navigation'; // Import useRouter
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const DashboardTesting = () => {
  const router = useRouter(); // Initialize router
  const { data: session, status } = useSession();

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  // Sign out function to be called when the user clicks the logout button
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/login'); // Redirect to login page after signing out
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex justify-center mt-40'>
      {status === 'authenticated' ? (
        <div>
          <h1>Welcome, {session.user.name}!</h1>
          <p>You are authenticated and have access to your dashboard.</p>
          <button
            onClick={handleSignOut}
            className='bg-blue-500 text-white py-3 px-14 rounded flex justify-center items-center text-center mt-5'
          >
            Sign Out 
          </button>
        </div>
      ) : (
        <p>You are not authenticated.</p>
      )}
    </div>
  );
};

export default DashboardTesting;
