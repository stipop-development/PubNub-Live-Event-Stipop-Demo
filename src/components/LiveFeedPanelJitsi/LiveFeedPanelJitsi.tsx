import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Jitsi from "react-jitsi";
import { 
  LiveFeedPanelWrapper,
  FormGroup,
  Label,
  Input,
  Message,
  Button,
  ButtonCreateEvent,
  EventNameWrapper,
  CreateEventWrapper,
  HostNameWrapper,
  CreateEventButtonWrapper
} from './LiveFeedPanelJitsi.styles';


const theme = {
  main: "mediumseagreen"
};


interface LiveFeedPanelJitsiProps {

}

export const LiveFeedPanelJitsi: React.SFC<LiveFeedPanelJitsiProps> = (props: LiveFeedPanelJitsiProps) => {
  const [displayName, setDisplayName] = useState('Event-00000-00000')
  const [roomName, setRoomName] = useState('Event-Location-00000-00001')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState({})
  const [onCall, setOnCall] = useState(false)
  return(
  <LiveFeedPanelWrapper>
      {onCall
        ? (
          <Jitsi
            roomName={roomName}
            displayName={displayName}
            //password={password}
            //loadingComponent={loader}
            containerStyle={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />)
        : (

          <>

          </>)
      }
  </LiveFeedPanelWrapper>

)}

const EventNameInput = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
      <input
          type="text"
          value={inputValue}
          placeholder="Event name"
          onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setInputValue(ev.target.value)}
      />
  );
};

const HostNameInput = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
      <input
          type="text"
          value={inputValue}
          placeholder="Your host name"
          onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setInputValue(ev.target.value)}
      />
  );
};
function CreateEventButton() {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = React.useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // strict null checks need us to check if inputEl and current exist.
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus! ✅
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      {/* in addition, inputEl only can be used with input elements. Yay! */}
      {/* <input ref={inputEl} type="text" /> */}
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
// const CreateEventButton = (): JSX.Element => {
//   const [inputValue, setInputValue] = useState<string>("");
//   return (
//       <submit
//           type="text"
//           value={inputValue}
//           placeholder="Your host name"
//           onChange={(
//               ev: React.ChangeEvent<HTMLInputElement>,
//           ): void => setInputValue(ev.target.value)}
//       />
//   );
// };

