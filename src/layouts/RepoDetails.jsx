import React from "react";

const RepoDetails = ({ reposList }) => {
  return (
    <div className="repo-holder">
      <h4 className="title">Popular Repositories</h4>
      <ul className="list-group">
        {reposList.map(
          ({
            name,
            created_at,
            updated_at,
            description,
            stargazers_count,
            forks,
            language,
            html_url
          }) => (
            <li className="list-item" key={name}>
              <div className="list-header">
                <h5 className="repo-name">{name}</h5>
                <div className="year-holder">
                  <span role="contentinfo" className="year">
                    {`${created_at} - ${updated_at}`}
                  </span>
                </div>
              </div>
              <div className="list-title">
                <span role="contentinfo">{`${language} - Public`}</span>
              </div>
              <div className="description-holder">
                <p className="description-title">{description}</p>
                <p>
                  {`
                This Repositary has ${stargazers_count} Starts and ${forks} folks. If you would
                like more information about this repository and my contributed
                code, please visit the `}
                  <a href={html_url}>{`${name} `}</a>
                  on the github
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RepoDetails;
