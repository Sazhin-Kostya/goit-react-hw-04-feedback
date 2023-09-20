// import React, { Component } from 'react';
// import { useState } from 'react';
// import { Buttons } from './Buttons/Buttons';
// import { Notification } from './Notification/Notification';
// import { SectionTitle } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';

// export const App = params => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleClick = option => {
//     switch (option) {
//       case 'good':
//         setGood(prevGood => prevGood + 1);
//         break;
//       case 'neutral':
//         setNeutral(prevNeutral => prevNeutral + 1);
//         break;
//       case 'bad':
//         setBad(prevBad => prevBad + 1);
//         break;
//       default:
//         break;
//     }
//   };
//   const useStateApp = ['good', 'neutral', 'bad'];
//   const total = good + bad + neutral;

//   return (
//     <>
//       <SectionTitle title={'Please leave feedback'} />
//       <Buttons handleClick={handleClick} names={useStateApp} />
//       <Statistics good={good} neutral={neutral} bad={bad} total={total} />
//       <Notification message={'There is no feedback'} option={total} />
//     </>
//   );
// };
