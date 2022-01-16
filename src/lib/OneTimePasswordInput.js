import { createRef, useEffect, useState } from "react";
import keyCodes from "./keys";
import "./style.css";

function OneTimePasswordInput({
  digitInputCount = 6,
  onVerifyCode,
  disableVerificationStatus = false,
  wrapperStyle = {},
  inputStyle = {},
}) {
  const [isValidCode, setIsValidCode] = useState(false);
  const [lockInputs, setLockInputs] = useState(false);
  const [digits, setDigits] = useState(
    Array(digitInputCount)
      .fill("")
      .map(() => ({
        value: "",
        ref: createRef(),
        done: false,
      }))
  );
  const [activeDigitIndex, setActiveDigitIndex] = useState(0);
  const handleOnSetDigit = (e, index) => {
    const value = e.target.value;
    if (value > 9 || value < 0 || `${value}`.length > 1) {
      console.log(digits);
      return false;
    } else {
      let dArray = [...digits];
      dArray[index].value = value;
      dArray[index].done = true;
      setDigits(dArray);
      if (digits[index + 1] && value) {
        digits[index + 1].ref.current.focus();
        setActiveDigitIndex(index + 1);
      }
    }
  };

  useEffect(() => {
    const input = digits.map((d) => d.value).join("");
    if (input.length === digitInputCount) {
      setLockInputs(true);
      setIsValidCode(typeof onVerifyCode === "function" && onVerifyCode(input));
    } else {
      if (!isValidCode) setIsValidCode(false);
    }

    const listener = (e) => {
      const keyCode = e.keyCode || e.which;
      if (keyCode === keyCodes.tab) {
        e.preventDefault();
        const firstEmptyDigitInput = digits.findIndex((d) => d.value === "");
        if (digits[firstEmptyDigitInput]) {
          digits[firstEmptyDigitInput].ref.current.focus();
          return;
        }
      }
      if (keyCode === keyCodes.backspace) {
        if (!lockInputs) setLockInputs(false);

        const previousDigitIndex = activeDigitIndex - 1;
        if (digits[previousDigitIndex]) {
          let dArray = [...digits];
          dArray[activeDigitIndex].value = "";
          digits[previousDigitIndex].ref.current.focus();
          dArray[previousDigitIndex].done = false;
          dArray[activeDigitIndex].done = false;
          e.preventDefault();
          digits[previousDigitIndex].ref.current.select();
          setActiveDigitIndex(previousDigitIndex);
          setDigits(dArray);
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [activeDigitIndex, digits, digitInputCount]);

  return (
    <>
      <div className="digit-wrapper" style={wrapperStyle}>
        {digits.map((d, index) => (
          <div className="digit-input" key={index} style={inputStyle}>
            <input
              type="number"
              value={d.value && Number.parseInt(d.value)}
              onInput={(e) => {
                if (!d.done) handleOnSetDigit(e, index);
              }}
              ref={d.ref}
              disabled={lockInputs}
            />
          </div>
        ))}
      </div>
      {!disableVerificationStatus && (
        <div>
          Status:{" "}
          {isValidCode ? (
            <span className="statusOK">Valid</span>
          ) : (
            <span className="statusKO">Invalid</span>
          )}
        </div>
      )}
    </>
  );
}

export default OneTimePasswordInput;
