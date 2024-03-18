import React from 'react';
// import recoil
import { useRecoilState } from 'recoil';
import { usernameState, emailState, addressState } from './AccountSettings';

// Component for displaying totals
function TotalsBox({ subtotal, tax, total }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
      <h2>Totals</h2>
      <p>Subtotal: ${subtotal}</p>
      <p>Tax: ${tax}</p>
      <p>Total: ${total}</p>
    </div>
  );
}


function Cart({ lightMode, toggleLightMode }) {
  const subtotal = 100; 
  const taxRate = 0.1; 
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const [username, setUsername] = useRecoilState(usernameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [address, setAddress] = useRecoilState(addressState);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ width: '70%' }}>
          <h1>{username}'s Cart</h1>
        </div>
        <TotalsBox subtotal={subtotal} tax={tax} total={total} />
        
      </div>
      Will be delivered to your address at: {address}
    </div>
  );
}

export default Cart;
