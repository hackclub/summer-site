import {
  Button,
  Box,
  Badge,
  Card,
  Text,
  Image,
  Grid,
  Avatar,
  Flex
} from 'theme-ui'
import { formatDate } from '../lib/dates'
import { filter } from 'lodash'
import Masonry from 'react-masonry-css'
import FadeIn from './fade-in'

const Post = ({
  id = new Date().toISOString(),
  profile = false,
  user = {
    username: 'abc',
    avatar: '',
    streakDisplay: false,
    streakCount: 0
  },
  text,
  attachments = [],
  mux = [],
  postedAt
}) => (
  <FadeIn
    as={Card}
    className="post"
    sx={{ p: [3, 3], width: '100%', bg: 'rgba(255,255,255,0.9)' }}
  >
    <Flex
      as="a"
      href={`https://scrapbook.hackclub.com/${user.username}`}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        alignItems: 'center',
        mb: 3
      }}
    >
      <Avatar loading="lazy" src={user.avatar} alt={user.username} mr={2} />
      <Text variant="subheadline" my={0}>
        @{user.username}
      </Text>
      {user.streakDisplay && (
        <Badge
          ml={2}
          sx={{
            bg: 'pink',
            borderRadius: 'circle',
            minWidth: 20,
            lineHeight: '20px',
            verticalAlign: 'middle',
            textAlign: 'center'
          }}
        >
          {user.streakCount}
        </Badge>
      )}
      <Text as="time" variant="caption" sx={{ ml: 'auto' }}>
        {formatDate(postedAt)}
      </Text>
    </Flex>
    <Text as="p" fontSize={3}>
      {text}
    </Text>
    {attachments.length > 0 && (
      <>
        <Grid
          gap={2}
          columns={2}
          sx={{ alignItems: 'center', textAlign: 'center', mt: 2 }}
        >
          {filter(attachments, a => a.type.startsWith('image')).map(img => (
            <Image
              key={img.thumbnails.large.url}
              alt={img.filename}
              src={img.thumbnails.large.url}
              sx={{
                maxWidth: '100%',
                maxHeight: 256,
                borderRadius: 'default',
                bg: 'sunken',
                gridColumn: attachments.length === 1 ? 'span 2' : null
              }}
            />
          ))}
        </Grid>
      </>
    )}
  </FadeIn>
)

const Posts = ({ data = [] }) => (
  <Box
    as="section"
    sx={{
      backgroundImage: t => t.util.gradient('pink', 'orange'),
      display: ['none', 'block'],
      position: 'relative'
    }}
  >
    <Masonry
      breakpointCols={{
        default: 4,
        1024: 3,
        768: 2,
        512: 1
      }}
      className="masonry-posts"
      columnClassName="masonry-posts-column"
    >
      {data.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </Masonry>
    <Box
      sx={{
        position: 'absolute',
        right: [null, 3, 5],
        bottom: 5,
        textAlign: 'right'
      }}
    >
      <Text as="p" variant="headline" sx={{ color: 'white', mb: 3 }}>
        These are just a few posts…
      </Text>
      <Button
        as="a"
        variant="cta"
        href="https://scrapbook.hackclub.com/"
        sx={{ bg: 'white', color: 'pink' }}
      >
        Keep exploring →
      </Button>
    </Box>
    <style>{`
      .masonry-posts {
        display: flex;
        width: 100%;
        max-width: 100%;
      }
      .masonry-posts-column {
        background-clip: padding-box;
      }
      .post {
        margin-bottom: 1px;
      }
      @media (min-width: 32em) {
        .masonry-posts {
          padding-right: 24px;
        }
        .masonry-posts-column {
          padding: 24px 0 0 24px;
        }
        .post {
          border-radius: 12px;
          margin-bottom: 24px;
        }
      }
    `}</style>
  </Box>
)

export default Posts
