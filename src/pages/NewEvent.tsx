import { useMutation } from '@apollo/client';
import { Button, Form, Input, Select, Tooltip } from 'antd';
import Layout from 'components/common/Layout';
import routes from 'config/routes';
import { ChangeEvent, useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import client from '../apolloClient';
// import client from 'src/apolloClient';
import CREATE_EVENT from '../mutations/createEvent';

type EventMode = 'virtual' | 'inperson';

type FormData = {
  name: string;
  description: string;
  mode: EventMode;
  venue: string;
  city: string;
  cost: string;
  date: string;
  limit: string;
};

const eventModes = [
  {
    label: 'Virtual',
    value: 'virtual',
  },
  {
    label: 'In Person',
    value: 'inperson',
  },
];

const NewEvent = function NewEvent() {
  const [eventData, setEventData] = useState<FormData>({
    name: '',
    description: '',
    mode: 'inperson',
    venue: '',
    city: '',
    cost: '0',
    date: '1/1/2023',
    limit: '10',
  });

  const navigate = useNavigate();
  const [googlePick, setGooglePick] = useState(false);
  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT, {
    client,
  });

  const handleFormChanges = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChanges = (option: EventMode) => {
    setEventData({
      ...eventData,
      mode: option,
    });
  };

  const handleSubmit = async () => {
    // TODO: api call for the event form submit
    const mode = eventData.mode === 'inperson' ? 0 : 1;
    console.log(eventData);
    try {
      const event = await createEvent({
        variables: {
          input: {
            content: {
              name: eventData.name,
              city: eventData.city,
              cost: +eventData.cost,
              mode,
              venue: eventData.venue,
              status: 1,
              maxLimit: +eventData.limit,
              description: eventData.description,
              creationDate: '2023-07-25T12:34:56.789Z',
              dateTime: '2023-08-25T12:34:56.789Z',
            },
          },
        },
        client,
      });
      console.log('Event creation successful- ', event);
      navigate(routes.DASHBOARD);
    } catch (err) {
      console.log('Error occured while creating event: ', err);
    }
    // redirect to home page
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout page="New Event">
      <div className="flex flex-col items-center p-2 overflow-y-auto cscrollbar">
        <span className="m-2">Enter details to create a new event</span>

        <Form
          className=" w-[60%] bg-[#252334] p-4 rounded-lg"
          layout="vertical"
        >
          <Form.Item
            label={<span className="text-white">Event Name</span>}
            className="my-4"
            required
            name="name"
          >
            <Input
              placeholder="AccessVerse Event"
              name="name"
              required
              onChange={handleFormChanges}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Description</span>}
            className="my-4"
            required
            name="description"
          >
            <Input.TextArea
              name="description"
              placeholder="Some description about the event"
              required
              onChange={handleFormChanges}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Mode</span>}
            required
            className="my-4"
          >
            <Select
              options={eventModes}
              value={eventData.mode}
              onChange={handleSelectChanges}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Venue</span>}
            required
            className="my-4"
          >
            <div className="flex w-full space-x-2">
              <Input
                placeholder="AccessVerse Event"
                name="venue"
                required
                onChange={handleFormChanges}
              />

              <Tooltip
                title={
                  googlePick
                    ? 'Select a location from pop up'
                    : 'Unable to pick location from Google maps'
                }
              >
                <Button
                  disabled={!googlePick}
                  className="!text-white flex items-center justify-center"
                >
                  Select from Google Maps <BiWorld className="ml-2" size={18} />
                </Button>
              </Tooltip>
            </div>
          </Form.Item>

          <Form.Item
            label={<span className="text-white">City</span>}
            required
            className="my-4"
          >
            <div className="flex w-full space-x-2">
              <Input
                placeholder="City"
                name="city"
                required
                onChange={handleFormChanges}
              />
            </div>
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Registration Cost</span>}
            required
            className="my-4"
          >
            <div className="flex w-full space-x-2">
              <Input
                type="number"
                placeholder="Price for tickets"
                name="cost"
                required
                onChange={handleFormChanges}
              />
            </div>
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Event Date</span>}
            required
            className="my-4"
          >
            <div className="flex w-full space-x-2">
              <Input
                placeholder="DD/MM/YYYY"
                name="date"
                required
                onChange={handleFormChanges}
              />
            </div>
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Participant Limit</span>}
            required
            className="my-4"
          >
            <div className="flex w-full space-x-2">
              <Input
                type="number"
                placeholder="Enter number of participants"
                name="limit"
                required
                onChange={handleFormChanges}
              />
            </div>
          </Form.Item>

          <div className="flex space-x-4">
            <Button
              className="cpbutton"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button ghost>Cancel</Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default NewEvent;
