import styled from 'styled-components';

export const ProfileWrapper = styled.div`
width: 400px;
margin: 0 auto;
margin-top: ${p=>p.theme.spacing(6)};
margin-bottom: ${p=>p.theme.spacing(6)};;
padding: ${p => p.theme.spacing(10)};
background-color: ${p => p.theme.colors.background};
`
export const ProfileInfo = styled.div`  
width: 240px;
margin: 0 auto;
padding: ${p=> p.theme.spacing(2)};
background-color: ${p=>p.theme.colors.white};
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
export const ProfileAvatar = styled.img`
width: 100px;
margin: 0 auto;
margin-top: ${p=>p.theme.spacing(2)};
margin-bottom: ${p=>p.theme.spacing(2)};
border-radius: 50%;
`
export const ProfileName = styled.p`
margin-bottom: ${p=>p.theme.spacing(2)};
text-align: center;
font-weight: 700;
font-size: 20px;
`
export const ProfileEmail = styled.p`
margin-bottom: ${p=>p.theme.spacing(2)};
text-align: center;
color: ${p=>p.theme.colors.gray};
`
export const ProfileLocation = styled.p`
margin-bottom: ${p=>p.theme.spacing(4)};
text-align: center;
color: ${p=>p.theme.colors.gray};
`

export const ProfileStats = styled.ul`
width: 240px;
height: 100px;
display: flex;
justify-content: space-evenly;
margin: 0 auto;
background-color: ${p=>p.theme.colors.blue};
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`
export const ProfileStat = styled.li`
width: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-right: 1px solid ${p=>p.theme.colors.border};
border-top: 1px solid ${p=>p.theme.colors.border};
`
export const ProfileTitleStat = styled.span`
color: ${p=>p.theme.colors.gray};
`
export const ProfileQuantity = styled.span`
font-weight: 700;
font-size: 20px;
`