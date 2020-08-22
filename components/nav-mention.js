import { memo, useState, useEffect } from 'react'
import { trim } from 'lodash'
import Link from 'next/link'
import { Button } from 'theme-ui'

export const StaticMention = memo(
  ({ user = {}, className = '', children, ...props }) => (
    <Link href="/[username]" as={`/${user.username}`}>
      <a className={`mention ${className}`} {...props}>
        <img
          src={user.avatar}
          alt={user.username}
          width={24}
          className="mention-avatar"
        />
        @{user.username}
        {children}
      </a>
    </Link>
  )
)

const NavMention = memo(({ username }) => {
  const [img, setImg] = useState(null)
  useEffect(() => {
    try {
      fetch(`https://scrapbook.hackclub.com/api/profiles/${trim(username)}`)
        .then(r => r.json())
        .then(profile => setImg(profile.avatar))
    } catch (e) {}
  }, [])
  return (
    <Button
      variant="secondary"
      className="mention-nav-button"
      sx={{ height: '40px', display: ['none', 'none', 'inline-block'] }}
    >
      <a
        sx={{ textDecoration: 'none' }}
        href={`https://scrapbook.hackclub.com/${username}`}
        className="mention mention-nav post-text-mention"
      >
        <span className="nav-mention-start-hidden">
          made by <strong>@{username}</strong>
        </span>
        {img && (
          <img
            src={img}
            alt={username}
            width={40}
            height={40}
            className="nav-mention-avatar mention-avatar post-text-mention-avatar"
          />
        )}
      </a>
    </Button>
  )
})

export default NavMention
