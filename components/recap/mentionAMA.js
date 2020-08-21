import { memo, useState, useEffect } from 'react'
import { trim } from 'lodash'
import Link from 'next/link'
import {Button} from 'theme-ui'

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

const Mention = memo(({ name, img, url }) => {
  return (
    <Button>
    <a sx={{textDecoration:'none'}} href={`${url}`}>
      <a sx={{textDecoration:'none'}} className="mention post-text-mentionama">
        {img && (
          <img
            src={img}
            alt={name}
            width={40}
            height={40}
            className="mention-avatar-ama post-text-mention-avatar"
          />
        )}
        {name}
      </a>
    </a>
    </Button>
  )
})

export default Mention
