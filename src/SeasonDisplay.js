import './SeasonDisplay.css';
import React from 'react';

/* config object 
https://igracelee.medium.com/configuration-objects-in-react-d946e425c6d1  */

const seasonConfig = {
  
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

//helper f()
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return (lat > 0 ? 'summer' : 'winter');
  } else {
    return (lat > 0 ? 'winter' : 'summer');
  }
};


const SeasonDisplay = ({lat}) => {
  const season = getSeason({lat}, new Date().getMonth());

  /* object destructing to extract text and iconName from seasonconfig object */

  const { text, iconName } = seasonConfig[season];





  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );

};

export default SeasonDisplay;
