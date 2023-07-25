import { Button, Switch } from 'antd';
import Layout from 'components/common/Layout';

function Settings() {
  return (
    <Layout page="Settings">
      <div className="m-4">
        <div className="">
          <h1 className="text-xl my-4">Preferences</h1>

          <div className="flex flex-col">
            <span className="my-2">
              Receive Event Emails <Switch className="mx-2" defaultChecked />
            </span>

            <span className="my-2">
              Receive Group Notifications
              <Switch className="mx-2" defaultChecked />
            </span>

            <span className="my-2">
              Receive Promotional Emails
              <Switch className="mx-2" defaultChecked />
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-xl my-4">Settings & Privacy</h1>

          <Button className="cpbutton mr-2">Logout</Button>
          <Button ghost danger>
            Delete Account
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
