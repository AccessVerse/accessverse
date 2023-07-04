import { ReactNode } from 'react';

import SideNav from './SideNav';
import TopNav from './TopNav';

type Props = {
  page: string;
  children: ReactNode;
};

function Layout({ children, page }: Props) {
  return (
    <div className="flex w-screen">
      <SideNav />

      <div className="flex flex-col w-full h-screen">
        <TopNav page={page} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
