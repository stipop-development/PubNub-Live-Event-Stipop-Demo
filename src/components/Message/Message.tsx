import React from 'react';
import { MessageMessageWrapper, MessageWrapper, AvatarWrapper,SenderNameWrapper } from './Message.styles';
import {UserMessage} from '../../AppStateContext'


interface MessageProps {
  message: UserMessage;
}

export const Message: React.SFC<MessageProps> = (props: MessageProps) => {

const checkImage = (message) => {
  if ((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(message)) {
    return (
      <MessageMessageWrapper>
        <img style={{ height: '20%', width: '20%' }} src={message} />
      </MessageMessageWrapper>
    )
  }
  else {
    return (
      <MessageMessageWrapper>
        {message}
      </MessageMessageWrapper>
    )
  }
}

return (
  <MessageWrapper style={{  marginBottom: '20px'}}>
    <AvatarWrapper src={props.message.UserAvatar}/>
    <SenderNameWrapper>{props.message.senderName}</SenderNameWrapper>
    {/* <MessageMessageWrapper> */}
      {checkImage(props.message.message)}
    {/* </MessageMessageWrapper> */}
  </MessageWrapper>
);

}

