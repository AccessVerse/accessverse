import { useMutation } from '@apollo/client';
import routes from 'config/routes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import client from '../apolloClient';
import CREATE_USER from '../mutations/createUser';

function CreateProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    client,
  });

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const user = await createUser({
        variables: {
          input: {
            content: {
              name,
              email,
              balance: 100,
            },
          },
        },
        client, // Set the Apollo Client instance for the mutation
      });

      console.log('User Mutation successful');
      localStorage.setItem('accessverseUser', JSON.stringify(user));
      navigate(routes.DASHBOARD);
    } catch (err) {
      console.log('Error occurred during mutation:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Create Profile</h1>
      <span>Hey! Looks like you have not created a profile yet.</span>
      <div>
        <input
          type="text"
          id="name" // Add an id attribute for the input
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="email" // Add an id attribute for the input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        {loading && <p>Creating profile...</p>}
      </div>
    </>
  );
}

export default CreateProfile;
