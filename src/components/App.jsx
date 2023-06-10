import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section"
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";



export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onHandleFeedback(e) {
    switch (e.target.name) {

      case "good":
        setGood(state => state + 1);
        break;
      
      case "neutral":
        setNeutral(state => state + 1);
        break;
      
      case "bad":
        setBad(state => state + 1);
        break;
      
      default:
        return;
    }
      
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback()
    let totalPositive = 0;
    if (total > 0) {
      return totalPositive = ((good / total) * 100).toFixed(0);
    }
    return totalPositive;
  }

  const options = ["good", "neutral", "bad"]
  return (
     <>
         <Section title={'Please leave feedback'}>
         <FeedbackOptions handleFeedback={onHandleFeedback} options={options} />
         </Section>

         <Section title="Statistics">
           {countTotalFeedback() > 0 ? (
          <Statistics
            good = {good}
            neutral = {neutral}
            bad = {bad}
            total = {countTotalFeedback()}
            percentage = {countPositiveFeedbackPercentage()}
          />
          ) : (
              <Notification message={"There is no feedback"}/>
          )}
          
        </Section>
      </>
  );
}