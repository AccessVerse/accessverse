import { ReactNode } from 'react';

import SideNav from './SideNav';

type Props = {
  page: string;
  children: ReactNode;
};

function Layout({ children, page }: Props) {
  const user = JSON.parse(localStorage.getItem('accessverseUser') || '');
  return (
    <div className="flex w-screen">
      <SideNav />
      <div className="flex flex-col w-full h-screen">
        <div className="w-full h-[8vh] border-b border-gray-800 p-4 flex items-center justify-between">
          <span className="border border-gray-500 px-4 py-1 rounded-lg select-none text-[#1673fe]">
            {page}
          </span>

          <span>{`Hi ${user?.viewer?.user?.name} :)`}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
