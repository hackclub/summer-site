import { useState, useEffect } from 'react'
import { Container, Heading, Box, Flex, Link as A, Button } from 'theme-ui'
import { random } from 'lodash'
import Head from 'next/head'
import Link from 'next/link'
import Meta from '@hackclub/meta'
import FullHeight from 'react-div-100vh'
import Flag from '../components/flag'
import Icon from '../components/icon'

const platforms = [
  'Slack bot',
  'SMS bot',
  'iPhone app',
  'Arduino board',
  'Website',
  'Robot',
  'Fake robot',
  'ML model',
  'Ancient software',
  'Smartwatch',
  'Smart camera',
  'Microcomputer',
  'Windows program',
  'Mac app'
]

const verbs = [
  'remixes',
  'generates',
  'psychoanalyzes',
  'transcribes',
  'scans',
  'hand-draws',
  'deep-fries',
  'stuns',
  'eats',
  'builds',
  'examines',
  'inspects',
  'researches',
  'solves',
  'explains',
  'investigates',
  'cleans',
  'measures',
  'cooks'
]

const subjects = [
  'Hack Club community members',
  'iPhone apps',
  'lamps',
  'floorplans',
  'iPad Pro keyboards',
  'chicken fingers',
  'McDonalds packaging',
  'chicken nuggets',
  'board games',
  'fruit',
  'fish',
  'pencils',
  'books',
  'headphones',
  'soccer balls',
  'insect repellent',
  'hazmat suits',
  'paint brushes',
  'video calls',
  'calendars',
  'cups',
  'speakers',
  'rulers',
  'erasers',
  'tv remotes',
  'bikes',
  'newspapers',
  'pens',
  'light bulbs',
  'LED lights',
  'apples',
  'oranges',
  'atlases',
  'power plugs',
  'computers',
  'ancient scrolls',
  'statues',
  'hammers',
  'superheros',
  'teddy bears',
  'alpacas',
  'cables',
  'stuffed toys'
]

const stacks = [
  'AI',
  'ML',
  'blockchain',
  'React.js',
  'a CLI',
  'Redwood.js',
  'Markdown',
  'Rust',
  'Go',
  'JavaScript',
  'Twilio',
  'the GitHub API',
  'Ruby on Rails',
  'serverless',
  'Python',
  'Next.js',
  'COBOL',
  'Flask',
  'Django',
  'Tensorflow',
  'C++',
  'Swift',
  'Java',
  'Binary'
]

export default () => {
  const get = arr => random(0, arr.length - 1)
  const randomize = () => [
    get(platforms),
    get(verbs),
    get(subjects),
    get(stacks)
  ]
  const [indices, setIndices] = useState(randomize())

  const makeText = () =>
    `${platforms[indices[0]]} that ${verbs[indices[1]]} ${
      subjects[indices[2]]
    } using ${stacks[indices[3]]}`
  const [text, setText] = useState('')
  useEffect(
    () => {
      setText(makeText())
    },
    [indices]
  )

  return (
    <>
      <Box
        as="header"
        variant="cards.translucent"
        sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 4 }}
      >
        <Container
          sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
        >
          <Flag />
          <Link href="/" passHref>
            <A
              sx={{
                fontSize: 2,
                textDecoration: 'none',
                color: 'black',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                ml: 'auto',
                transition: '.125s color ease-in-out',
                ':hover,:focus': { color: 'orange' },
                '@media (min-width: 32em)': {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }
              }}
            >
              Summer of Making
            </A>
          </Link>
        </Container>
      </Box>
      <Meta
        as={Head}
        name="Hack Club Summer of Making"
        title="Idea Generator"
        image="https://workshop-cards.hackclub.com/Idea%20Generator.png?theme=light&brand=Summer&fontSize=275px&caption=Gotta%2520make%2520%25E2%2580%2598em%2520all"
      />
      <FullHeight
        as={Box}
        sx={{
          minHeight: '100vh',
          width: '100%',
          bg: 'cyan',
          backgroundImage: t => t.util.gradient('yellow', 'cyan'),
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Container>
          <Icon glyph="idea" size={72} />
          <Heading
            as="h1"
            variant="title"
            sx={{ fontSize: [5, 6, 7], my: [3, 4] }}
            children={text}
          />
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              button: {
                color: 'yellow',
                backgroundImage: 'none',
                bg: 'black',
                fontSize: 3,
                textTransform: 'uppercase',
                py: 3,
                px: 4,
                m: 2,
                display: 'inline-flex',
                alignItems: 'center',
                svg: { ml: -2, mr: 2 }
              }
            }}
          >
            <Button onClick={() => setIndices(randomize())}>
              <Icon glyph="bolt" size={32} />
              Regenerate
            </Button>
            <Button
              onClick={() => {
                try {
                  navigator.share({
                    title: 'Summer of Making Ideas',
                    text,
                    url: 'https://summer.hackclub.com/ideas'
                  })
                } catch (e) {}
              }}
            >
              <Icon glyph="share" size={32} />
              Share
            </Button>
          </Flex>
        </Container>
      </FullHeight>
    </>
  )
}
