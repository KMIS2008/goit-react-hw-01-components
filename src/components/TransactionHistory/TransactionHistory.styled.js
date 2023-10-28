import styled from 'styled-components';

export const TransactionHistoryContainer = styled.table`
width: 400px;
margin: 0 auto;
box-shadow: 3px 10px 5px 0px rgba(155,143,143,0.75);
-webkit-box-shadow: 3px 10px 5px 0px rgba(155,143,143,0.75);
-moz-box-shadow: 3px 10px 5px 0px rgba(155,143,143,0.75);
`
export const TransactionThead = styled.thead`
height: 50px;
padding: ${p => p.theme.spacing(4)};
background-color: ${p=>p.theme.colors.darkblue};
color: ${p=>p.theme.colors.white};
`            
export const TransactionInfo = styled.tr`
text-align: center;

`