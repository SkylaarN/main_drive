'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { avatarPlaceholderUrl, navItems } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Add props type
type SidebarProps = {
  fullName: string;
  email: string;
};

const Sidebar = ({ fullName, email }: SidebarProps ) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar w-16 lg:w-[250px] bg-green flex flex-col transition-all duration-300">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center justify-center py-4">
          {/* Full logo on large screens */}
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={160}
            height={50}
            className="hidden lg:block h-auto w-auto"
          />
          {/* Compact logo on small screens */}
          <Image
            src="/assets/icons/logo-brand.svg"
            alt="logo"
            width={40}
            height={40}
            className="block lg:hidden"
          />
        </div>
      </Link>

      {/* Nav links */}
      <nav className="flex flex-col gap-2">
        {navItems.map(({ name, url, icon }) => (
          <Link key={url} href={url}>
            <div
              className={cn(
                'flex items-center justify-center lg:justify-start gap-0 lg:gap-3 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue text-gray-700 transition-colors',
                pathname === url && 'bg-red text-white font-semibold'
              )}
            >
              <Image src={icon} alt={name} width={24} height={24} />
              {/* Hide text on small screens */}
              <span className="hidden lg:inline">{name}</span>
            </div>
          </Link>
        ))}
      </nav>
      <Image
          src="/assets/images/files-2.png"
          alt="logo"
          width={506}
          height={418}
          className="w-full mt-auto"
        />

        <div className='sidebar-user-info'>
          <Image src={avatarPlaceholderUrl} alt='Avatar' width={44} height={44} className='sidebar-user-avatar'/>
          <div  className='hidden lg:block'>
            <p className='subtitle-2 capitalize'>{fullName}</p>
            <p className='caption'>{email}</p>
          </div>
        </div>
    </aside>
  );
};
 
export default Sidebar;
