import { memo, useState, useEffect } from 'react'
import { trim } from 'lodash'
import Link from 'next/link'

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

const Mention = memo(({ username }) => {
  const [img, setImg] = useState(null)
  useEffect(() => {
    try {
      fetch(`https://scrapbook.hackclub.com/api/profiles/${trim(username)}`)
        .then(r => r.json())
        .then(profile => setImg(profile.avatar))
    } catch (e) {}
  }, [])
  return (
    <a href={`https://scrapbook.hackclub.com/${username}`}>
      <a className="mention post-text-mention" href={`https://scrapbook.hackclub.com/${username}`} >
        {img && (
          <img
            src={img}
            alt={username}
            width={24}
            height={24}
            className="mention-avatar post-text-mention-avatar"
          />
        )}
        @{username}
      </a>
    </a>
  )
})

export default Mention
