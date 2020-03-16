import React from 'react'

const UserDetails = ({
  userData: { name, followers, location, created_at, public_repos, html_url }
}) => {
  return (
    <div className='content-header'>
      <h2>{name}</h2>
      <h3>A passionate Github user</h3>
      <a className='link' href={html_url}>
        {html_url}
      </a>
      <p className='description'>
        {`On Github since ${new Date(
          created_at
        ).getFullYear()}, ${name} is a developer based in
        ${location}with`}
        <span role='contentinfo' className='text-primary'>
          {` ${public_repos} Public Repositories`}
        </span>
        {' '}
        &
        <span role='contentinfo' className='text-primary'>
          {` ${followers} followers`}
        </span>
      </p>
    </div>
  )
}

export default UserDetails
