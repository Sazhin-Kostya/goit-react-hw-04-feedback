import { Statisticss } from './Statistics.styled';
export function Statistics({ good, bad, neutral, total }) {
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };
  const totalFeedBack = () => {
    return good + bad + neutral;
  };
  return (
    <Statisticss $total={total}>
      <h3>Statistics</h3>
      <span>Good:{good}</span>
      <br></br>
      <span>Neutral:{neutral}</span>
      <br></br>
      <span>Bad:{bad}</span>
      <br></br>
      <span>Total:{totalFeedBack()}</span>
      <br></br>
      <span>
        Positive feedback{' '}
        {countPositiveFeedbackPercentage() > 0
          ? `${countPositiveFeedbackPercentage()}`
          : '0'}
        %
      </span>
    </Statisticss>
  );
}
