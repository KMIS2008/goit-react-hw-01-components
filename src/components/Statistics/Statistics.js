import PropTypes from 'prop-types';
import {StatisticsSection,
        StatisticsTitle,
        StatisticsStats,
        StatisticsItem,
        StatisticsLabel,
        StatisticsPecentege} from './Statistics.styled';

export const Statistics = ({title, stats})=> {
return (
    
<StatisticsSection>
  {title && <StatisticsTitle>{title}</StatisticsTitle>}

  <StatisticsStats>
    {stats.map(stat => {
        return (
    <StatisticsItem $label={stat.label} key={stat.id}>
      <StatisticsLabel>{stat.label}</StatisticsLabel>
      <StatisticsPecentege>{stat.percentage}%</StatisticsPecentege>
    </StatisticsItem>
        );
    }) }
  </StatisticsStats>
</StatisticsSection>
)
}

Statistics.propTypes = {
    tittle: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}