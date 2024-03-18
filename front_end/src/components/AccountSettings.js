import React from 'react';
import { useRecoilState } from 'recoil';
import { atom } from 'recoil';
import './AccountSettings.css';

export const usernameState = atom({
  key: 'usernameState',
  default: 'Lance', 
});

export const emailState = atom({
  key: 'emailState',
  default: 'lancealthouse@gmail.com',
});

export const addressState = atom({
  key: 'addressState',
  default: 'lincoln, nebraska',
});

function AccountSettings() {
  const [username, setUsername] = useRecoilState(usernameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [address, setAddress] = useRecoilState(addressState); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <div style={{ padding: '20px' }}>
        <div style={{ display:'flex', flexDirection: 'column', width: '50%', gap: '10px' }}>
          <h1>Account Settings</h1>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} />
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;