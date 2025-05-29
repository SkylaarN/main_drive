import React from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNavigation from '@/components/MobileNavigation';
import Header from '@/components/Header';
import '../globals.css'; 
import { getCurrentUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  if ( !currentUser ) return redirect("/sign-in");

  const { fullName, email } = currentUser;
  return (
    <div className="flex h-screen">
      <Sidebar fullName={fullName} email={email} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout;

