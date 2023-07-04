import { Button } from 'antd';
import { blogURL, docsURL, goToAppURL } from 'config/data';
import { AiOutlineArrowRight } from 'react-icons/ai';

function HomeNav() {
  return (
    <nav className="sm:sticky top-5 z-20 bg-[#1F232C] w-[90%] sm:w-[80%] backdrop-filter backdrop-blur-lg bg-opacity-30 border border-[#505050] firefox:bg-opacity-90 text-white rounded-xl m-5">
      <div className="flex items-center justify-between h-16 mx-auto px-4">
        <a href="/" target="_self">
          <img src="/logo.png" alt="sbg" width={60} height={60} />
        </a>

        <section className="flex items-center text-lg space-x-4 text-white z-10">
          <a
            href={docsURL}
            className="mr-1 sm:mx-2 hidden sm:inline hover:-translate-y-1 border-[#1573FE] hover:border-b-2 hover:border-[#1573FE] transition-all duration-200 ease-in-out"
          >
            Docs
          </a>

          <a
            href={blogURL}
            className="mr-1 sm:mx-2 hidden sm:inline hover:-translate-y-1 border-[#1573FE] hover:border-b-2 hover:border-[#1573FE] transition-all duration-200 ease-in-out"
          >
            Blog
          </a>

          <Button
            type="primary"
            ghost
            className="flex items-center text-base font-semibold mx-4"
            href={goToAppURL}
            target="_blank"
          >
            Get Started
            <AiOutlineArrowRight />
          </Button>
        </section>
      </div>
    </nav>
  );
}

export default HomeNav;
