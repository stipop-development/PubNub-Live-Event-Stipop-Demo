import React, { useReducer, useEffect, useRef, useState }  from 'react';
import { MessageListPanelWrapper } from './MessageListPanel.styles';
import {  MessageInputWrapper, ComposeMessageBoxWrapper, UserImgWrapper, EmojiInputWrapper, StickerButton } from '../ComposeMessageBox/ComposeMessageBox.styles';
import { MessageList } from '../MessageList/MessageList';
import { AppStateProvider, appData, useAppState, Message, appStateReducer } from "../../AppStateContext";
import axios from 'axios';


interface MessageListPanelProps {


}

export const MessageListPanel: React.SFC<MessageListPanelProps> = (props: MessageListPanelProps) => {

  const textAreaEl = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(appStateReducer, appData);
  const [isOpen, setIsOpen] = useState(false);
  const [searchSticker, setSearchSticker] = useState<any>([]);
  const [query, setQuery] = useState("");


  const search = async (query: string) => {
    const response = await axios(`/v1/search?userId=123&searchText=${query}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'apiKey': 'e0fb71a7418582285972d33562218343',
        }
    });
    const results = response.data.body.stickerList;
    // console.log(results);
    setSearchSticker(results);
    return results;
  }


  // React.useEffect(() => {
  //   fetch('/v1/package?userId=123&pageNumber=3&lang=en', {
  //     // const response = fetch('/v1/package?userId=123&pageNumber=1&country=us', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'
  //       },
  //       method:"get"
  //     })
  //     .then((response) => response.json())
  //     .then((json) => {setSticker(json.body.packageList)})      // .then((json) => setStickers(json.body.packageList))
  //     // .then(json => console.log(json))
  //       // .then((responseJson) => {console.log(responseJson)});
  //     // console.log(response);
  // }, [])

  const handleKeyDown: React.KeyboardEventHandler = event => {
    if (event.key === 'Enter') {

      if (textAreaEl?.current !== null) {

        dispatch({
          type: "SEND_MESSAGE",
          payload: { messageContent: textAreaEl.current!.value! }
        } as {
          type: "SEND_MESSAGE",
          payload: {
            messageContent: string
          }
        }
        );
        textAreaEl.current!.value = "";
        textAreaEl.current.blur();
        console.log('do validate');
      }

    }
  };

  const handleClick = (image) => {
      if (image) {
          dispatch({
            type: "SEND_MESSAGE",
            payload: { messageContent: image }
          } as {
            type: "SEND_MESSAGE",
            payload: {
              messageContent: string
            }
          }
          );
          console.log('do validate');
        }
  }

  return (
    <>
      {/* <AppStateProvider> */}
        <MessageListPanelWrapper>
          <MessageList />
          <ComposeMessageBoxWrapper>
            <UserImgWrapper src={state.eventHostAvatar} />
            <MessageInputWrapper
              autoComplete="off"
              onKeyPress={handleKeyDown}
              ref={textAreaEl}
              id="messageContent"
              // onSubmitEditing={Keyboard.dismiss}
            />
            {/* <StickerButton onClick={() => setIsOpen(!isOpen)} /> */}
            <img src={'../../../../src/img/sticker.svg'} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer'}} />
            {isOpen === true ?  
              <div 
                style={{ 
                  width: '380px', 
                  minWidth: '380px', 
                  height: '430px', 
                  backgroundColor: '#ffffff',
                  border: 'solid 1px #d9d9d9',
                  borderRadius: '6px',
                  overflow: 'scroll'
                }}
              >
                <input
                  style={{
                    width: '330px',
                    height: '26px',
                    margin: '10px 9px 11px 9px',
                    padding: '9px 14px',
                    objectFit: 'contain',
                    borderRadius: '18px',
                    border: 'solid 1px #d9d9d9',
                    backgroundColor: '#ffffff'
                  }}
                  placeholder="Search for stickers"
                  value={query}
                  onChange={e => [search(e.target.value), setQuery(e.target.value)]}
                  >
                </input>
                { query ?
                    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    {
                      searchSticker && searchSticker.map((stickers, index) => {
                        console.log("Stickers: ", stickers);
                        return (
                          <div
                            key={stickers.stickerId}
                          >
                            <img
                              style={{
                                width: '72px',
                                height: '70px',
                                marginLeft: '20px',
                                marginTop: '10px',
                                cursor: 'pointer'
                              }}  
                              src={stickers.stickerImg} 
                              onClick={() => handleClick(stickers.stickerImg)} 
                            />
                          </div>
                        );
                      })
                    }
                    </div>
                    :
                    <>
                      <div style={{ textAlign: 'center'}}>
                          <img style={{width: '250px', height: '250px' }}src="https://img.stipop.io/2019/5/30/1559203142542_MOE_006.gif" />
                      </div>
                      <div style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0px', fontFamily: 'Rawline'}}>Search for Stickers!</div>
                    </> 
                }
                {/* <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                  <img style={{width: '80px', height: '80px' }} src={sticker.length > 0 && sticker[0].packageImg} onClick={() => handleClick(sticker[0].packageImg)} />
                  <img style={{width: '80px', height: '80px' }} src={sticker.length > 0 && sticker[1].packageImg} onClick={() => handleClick(sticker[1].packageImg)} />
                  <img style={{width: '80px', height: '80px' }} src={sticker.length > 0 && sticker[2].packageImg} onClick={() => handleClick(sticker[2].packageImg)} />
                  <img style={{width: '80px', height: '80px' }} src={sticker.length > 0 && sticker[3].packageImg} onClick={() => handleClick(sticker[3].packageImg)} />
                  <img style={{width: '80px', height: '80px' }} src={sticker.length > 0 && sticker[4].packageImg} onClick={() => handleClick(sticker[4].packageImg)} />
                  <img style={{width: '80px', height: '80px' }} src={sticker.length > 0 && sticker[5].packageImg} onClick={() => handleClick(sticker[5].packageImg)} />
                </div> */}
              </div>
              : 
              <div></div>
            }
            {/* <EmojiInputWrapper src="/images/emojiInput@3x.png" /> */}
          </ComposeMessageBoxWrapper>
        </MessageListPanelWrapper>
      {/* </AppStateProvider> */}
 </>
  );
}