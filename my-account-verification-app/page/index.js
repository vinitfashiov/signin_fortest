import { useState } from 'react';
import AccountCreation from '../components/AccountCreation';
import VerificationCode from '../components/VerificationCode';

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="background">
      {step === 1 && <AccountCreation onNext={() => setStep(2)} />}
      {step === 2 && <VerificationCode onComplete={() => setStep(3)} />}
      {step === 3 && <h2 className="success">Account created successfully!</h2>}
    </div>
  );
}
