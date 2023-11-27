import logo from './logo.svg';
import './App.css';
import MobileNumber from './components/MobileNumber';
import MobileVerification from './components/MobileVerification';
import { useState } from 'react';


function App() {
  const [mobileNo, setMobileNo] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
 {isVerified ? (
        <MobileVerification />
      ) : (
        <MobileNumber isVerified={isVerified} setIsVerified={setIsVerified} />
      )}
    </div>
  );
}

export default App;
