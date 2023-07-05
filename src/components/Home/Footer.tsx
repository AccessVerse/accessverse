import { Button, Input } from 'antd';
import { useState } from 'react';

function Footer() {
  const [inputVal, setInputVal] = useState<string>('');

  const onEmailSubmit = () => {
    // TODO: send email id to api
    setInputVal('');
    // TODO: show a toast
  };

  return (
    <div className="flex mt-10 w-screen justify-around items-center z-10">
      <div>
        <img src="/logo.png" alt="main logo" height={200} width={200} />
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
        <div className="flex h-max">
          <Input
            placeholder="Email"
            className="h-max"
            allowClear
            value={inputVal}
            style={{ width: '240px' }}
            onChange={(event) => setInputVal(event.target.value)}
          />
          <Button className="text-white text-sm" onClick={onEmailSubmit}>
            Get updates
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
