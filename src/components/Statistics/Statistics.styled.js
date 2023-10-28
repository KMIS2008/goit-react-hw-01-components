import styled from 'styled-components';

const getBackgroundColor = props => {
    switch (props.$isOnline) {
        case 'false':
          return props.theme.colors.darkblue;
        case '.pdf':
          return props.theme.colors.purpel;
        case '.mp3':
          return props.theme.colors.red;
        case '.psd':
          return props.theme.colors.darkblue;   
        default:
          return props.theme.colors.gray;
      }
    
}

export const StatisticsSection = styled.section `
width: 400px;
margin: 0 auto;
margin-bottom: ${p => p.theme.spacing(5)};;
padding: ${p => p.theme.spacing(6)};
background-color: ${p=>p.theme.colors.rose};
text-align: center;
` 
export const StatisticsTitle = styled.h2`
padding: ${p => p.theme.spacing(6)};;
font-size: 800;
text-transform: uppercase;
background-color: ${p=>p.theme.colors.white};
`
export const StatisticsStats = styled.ul`
display: flex;
justify-content: center;
`
export const StatisticsItem = styled.li`
padding-top: ${p => p.theme.spacing(2)};
padding-bottom: ${p => p.theme.spacing(2)};
display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
background-color: ${getBackgroundColor};
`
export const StatisticsLabel = styled.span`
font-size: 12px;
color: ${p=>p.theme.colors.white}
`
export const StatisticsPecentege = styled.span`
font-size: 800;
color: ${p=>p.theme.colors.white}
`