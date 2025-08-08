import OTPInput from './OTPInput';

export default function App() {
  const handleOTPChange = (otp) => {
    console.log('Entered OTP:', otp);
  };

  return <OTPInput onChangeOTP={handleOTPChange} />;
}
