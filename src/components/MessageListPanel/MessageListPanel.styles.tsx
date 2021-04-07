import styled from 'styled-components';

export const MessageListPanelWrapper = styled.div`
display: flex;
flex-grow: 1;
justify-content: space-between;
flex-direction: column;
 //justify-content: flex-start
 //flex-wrap: wrap;
 //justify-content: flex-end;
 //justify-content: start;
 //position: relative;
 width: 100%;
//  width: 100px;
 height: 500px;
 z-index: 50;
 
`;

export const StipopWindow = styled.div`
    width: 380px; 
    min-width: 380px; 
    height: 430px; 
    background-color: #ffffff;
    border: solid 1px #d9d9d9;
    border-radius: 6px;
    overflow: scroll;
    @media (max-width: 600px) {
        width: 400px;
        top: 20;
        position: absolute;
        min-width: 380px;
        height: 430px; 
        background-color: #ffffff;
        border: solid 1px #d9d9d9;
        border-radius: 6px;
        overflow: scroll;
    }
    
`;


