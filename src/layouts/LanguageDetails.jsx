import React from "react";

const LanguageDetails = ({ languageData }) => {
  return (
    <div className="content-body">
      <div className="lang-section">
        <h4 className="title">Languages</h4>
        <div className="lang-wrapper">
          {languageData.map(({ name, percentage }) => (
            <div className="lang-holder" key={name}>
              <div className="lang-content">
                <span role="contentinfo" className="text-primary">
                  {name}
                </span>
                <span role="contentinfo" className="percentage">
                  {` ${percentage} %`}
                </span>
                <div className="final-1">
                  <div className="final" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDetails;
