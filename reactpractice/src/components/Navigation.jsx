/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  return (
        <div>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <button type="button" onClick={() => navigate(address)}>GO TO</button>
        </div>
  );
}

export default Navigation;