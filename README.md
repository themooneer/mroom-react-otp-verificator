# Mroom-UI: OTP Component for react

🔑 A simple One Time Password verification input for your react application.

## Installation

```
bower install mroom-react-otp-input

# or

npm install mroom-react-otp-input
```

## Example

```

import React from "react";
import OneTimePasswordInput from "./components/OneTimePasswordInput";

function App() {
  return (
    <OneTimePasswordInput onVerifyCode={(input) => input === "000000"} />
  );
}

export default App;


```

### Features

- Configure inputs numbers based on your needs.
- Supports tab and backspace keyboard events.

### API

| Props                     | Type     | Description                                                                                        | Default |
| ------------------------- | -------- | -------------------------------------------------------------------------------------------------- | ------- |
| digitInputCount           | Number   | Specify how many input you want for your otp verification length                                   | 6       |
| disableVerificationStatus | Boolean  | Hide the verification status below the digit inputs.                                               | false   |
| wrapperStyle              | Object   | Customize the global wrapper style containing the inputs                                           | {}      |
| inputStyle                | Object   | Customize the style of the inputs                                                                  | {}      |
| onVerifyCode              | function | A callback function required to use in order to verify the input with a backend verification code. | -       |

## TODOS

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)]() [![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/themooneer/mroom-react-otp-verificator.git)

- [] Migrate it to typescript
- [] Improve performance.
- [] Write tests

## Note

This is my first time building a small component for the open-source 🌎. <br/> I will be so thunkfull 🙏 if you send me your feedback and recommendations.

## Socials

<img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/themooneer?style=social">

<img alt="GitHub followers" src="https://img.shields.io/github/followers/themooneer?style=social">

<small>Made with ❤️ by Mounir Hamzaoui</small>
