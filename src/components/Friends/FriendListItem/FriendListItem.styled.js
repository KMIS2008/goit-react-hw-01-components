import styled from 'styled-components';



export const FriendItem = styled.div`
display: flex;
align-items: center;
`
export const FriendStatus = styled.span`
width: 20px;
height: 20px;
margin-right: ${p=>p.theme.spacing(4)};
border-radius: 50%;
background-color: ${props => (props.isOnline ? p=>p.theme.colors.green : p=>p.theme.colors.red)};
`
export const FriendName = styled.p`
margin-left: ${p=>p.theme.spacing(4)};;
font-size: 800;
font-weight: bold;
`