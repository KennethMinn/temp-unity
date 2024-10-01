import { useState } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState("");

  const handleOTPChange = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = () => {
    if (otp.length < 6) return;
    console.log("Entered OTP:", otp);
  };
  return (
    <div className="flex items-center justify-center h-screen ">
      <CommonOTPInput length={6} onChangeOTP={handleOTPChange} />
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default OtpInput;

const CommonOTPInput = ({ length, onChangeOTP }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    onChangeOTP(newOtp.join(""));

    // Focus next input if the current one has a value
    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace and move focus to the previous input
    if (e.key === "Backspace") {
      let newOtp = [...otp];
      newOtp[index] = ""; // Clear current input
      setOtp(newOtp);
      onChangeOTP(newOtp.join(""));

      if (index > 0 && e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          name="otp"
          onFocus={() => console.log(index)}
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
};
