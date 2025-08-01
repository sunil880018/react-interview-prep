import React, { useState } from 'react';
import './styles.css';

function Tabs({ tabs }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const changeTab = (index) => {
    setActiveTabIndex(index);
  };

  if (!tabs || tabs.length === 0) {
    return <div className="tabs-container">No tabs available</div>;
  }

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {tabs.map((t, index) => (
          <button
            key={index}
            className={index === activeTabIndex ? 'active-tab' : ''}
            onClick={() => changeTab(index)}
          >
            {t?.title || `Tab ${index + 1}`}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs[activeTabIndex]?.content || (
          <div style={{ fontStyle: 'italic', color: '#999' }}>
            No content available
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
