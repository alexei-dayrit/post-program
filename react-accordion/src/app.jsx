import React, { useState } from 'react';

const App = props => {
  const [currentTab, setCurrentTab] = useState(null);
  const topics = props.topics;

  const handleTab = (id, event) => {
    (id !== currentTab) ? setCurrentTab(id) : setCurrentTab(null);
  };

  return (
    <>
      {topics.map(topic => {
        return (
          <div className="wrapper" key={topic.id}>
            <h3 onClick={event => handleTab(topic.id, event)} className="heading">
              {topic.name}
            </h3>
            {currentTab === topic.id && (
              <div className="text">
                {topic.text}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default App;
