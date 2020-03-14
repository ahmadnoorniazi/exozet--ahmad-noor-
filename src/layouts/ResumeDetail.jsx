import React from 'react'
import useFetch from '../fetchHook'
import { getPopularRepos, calculateLanguagePercentage } from '../utils'
import UserDetails from './UserDetails'
import LanguageDetails from './LanguageDetails'
import RepoDetails from './RepoDetails'

function ResumeDetails ({ name }) {
  const [reposData, isError, isLoading] = useFetch(
    `https://api.github.com/users/${name}/repos?per_page=100&page=1`
  )
  const [userData, isUserError, isUserLoading] = useFetch(
    `https://api.github.com/users/${name}`
  )

  if (isError || isUserError) {
    return <h1>User Not Found</h1>
  }
  return (
    <main>
      <section className='info'>
        <div className='container'>
          <div className='content-wrapper'>
            {/** Here we are using component Base Loaders */}
            {!isUserLoading && userData && Object.keys(userData).length ? (
              <UserDetails userData={userData} />
            ) : (
              <p>Wait user info Loading...</p>
            )}
            {!isLoading && reposData && reposData.length ? (
              <>
                <LanguageDetails
                  languageData={calculateLanguagePercentage(reposData)}
                />
                <RepoDetails reposList={getPopularRepos(reposData)} />
              </>
            ) : (
              <p>Repos Loading ...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResumeDetails
