import main from '../../assets/main.png';

function Footer() {
  return (
    <div className="flex mt-10 w-screen justify-around items-center">
      <div>
        <img src={main} alt="main logo" height={200} width={200} />
      </div>
      <div className="flex flex-col">
        <a href="/">BLOG</a>
        <a href="/">COMMUNITY</a>
        <a href="/">CONTACT</a>
        <a href="/">TWITTER</a>
      </div>
      <div className="flex flex-col">
        <a href="/">LINKEDIN</a>
        <a href="/">CALENDER</a>
        <a href="/">DISCORD</a>
        <a href="/">DOCS</a>
      </div>
      <div>
        <p className="mb-4">Join our mailing list for updates</p>
        <input type="text" className="pl-4 pt-2 pb-2" />
        <button type="button" className="bg-white text-[#1F232C] p-2">
          Get updates
        </button>
      </div>
    </div>
  );
}

export default Footer;
