import styled from 'styled-components';

export const FriendContainer = styled.ul`
width: 300px;
margin: 0 auto;
margin-bottom: ${p=>p.theme.spacing(6)};

`
export const FriendListContainer = styled.li`
margin-bottom: ${p=>p.theme.spacing(2)};
padding: ${p=>p.theme.spacing(4)};
border: 1px solid #dfd3d3;
box-shadow: 3px 10px 5px 0px rgba(155,143,143,0.75);
-webkit-box-shadow: 3px 10px 5px 0px rgba(155,143,143,0.75);
-moz-box-shadow: 3px 10px 5px 0px rgba(155,143,143,0.75);
`