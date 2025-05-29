import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import FileUploader from './FileUploader';
import Search from './Search';
const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <Search />
      <div className="flex items-center gap-4">
        <FileUploader />
        <form>
          <Button type="submit" className="p-2 bg-red-100 hover:bg-red-200 rounded-lg">
            <Image src='/assets/icons/logout.svg' alt="Logout" width={24} height={24} />
          </Button>
        </form>
      </div>
    </header>
  )
};

export default Header;


