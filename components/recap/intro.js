import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Image, Grid, Heading, Link, Text } from 'theme-ui'
import theme from '@hackclub/theme'
import Icon from '../icon'

export default () => (
  <Container
    variant="copy"
    sx={{
      my: 3,
      py: 3,
      border: '2px dashed',
      borderColor: 'sunken',
      borderRadius: 'default',
      mt: [3, 4],
      mb: [3, 4]
    }}
  >
    <Text sx={{ fontSize: '24px' }}>
      In 1967, 100,000 people gathered in San Francisco for the Summer of Love.
      In 2020, we at Hack Club hosted the Summer of Making. It wasn't an event
      or a program.{' '}
      <span className="highlight">
        It was a theme for the summer and a challenge for students to take on.
      </span>{' '}
      It was also a summer like no other, with hackers around the world stuck at
      home. To support makers, we distributed $50,000 in free electronics
      (thanks GitHub!) & built Snapchat streaks for coding—
      <span className="highlight">
        but really Summer of Making was about the{' '}
        <div className="tooltip">
          <span
            dangerouslySetInnerHTML={{
              __html: `
              <span onmouseenter="var users = [[
                'sampoder','https://dl.airtable.com/.attachmentThumbnails/b5ee2836d276cb5366438adbc331f07e/2f07b605', 'Australia'],
                ['caleb','https://dl.airtable.com/.attachmentThumbnails/0c5e94e340faec97baba23c7d57c038d/f6098ca5', 'New Hampshire'], 
                ['yuto','https://avatars2.githubusercontent.com/u/10691605?s=460&u=22986cc78b835c6fbf29d074b9216d24c6d078ad', 'the USA'], 
                ['hkatzdev','https://dl.airtable.com/.attachmentThumbnails/32b3f5481eeee002d40b0f0ad5b86908/ddf766ed', 'California'], 
                ['linus','https://dl.airtable.com/.attachmentThumbnails/436e1a737cd3db0957d231104a599012/9a5a4167', 'Washington'], 
                ['jessding','https://dl.airtable.com/.attachmentThumbnails/70f1625f6546b14ccad9ff508bd1cbea/dfb73a80', 'Texas'], 
                ['winston','https://dl.airtable.com/.attachmentThumbnails/359ce095f3d57743607efcc948aa404b/e50b820d', 'California'], 
                ['kayleyseow','https://dl.airtable.com/.attachmentThumbnails/e2864eaf6aa2f745b9e3378f19e0113a/bb587b41', 'California'], 
                ['bri4nong','https://dl.airtable.com/.attachmentThumbnails/e5dcccaf99860a9de3a523347ce2ce4a/29f01ef3', 'Indonesia'], 
                ['ongzhizheng','https://dl.airtable.com/.attachmentThumbnails/12b89e0164190273e1ad81e435b3a638/1f6b20ee', 'Malaysia'], 
                ['fayd','https://dl.airtable.com/.attachmentThumbnails/cc90d77e42e2df2704e983f00babb1c3/d4a3f065', 'India'], 
                ['rishi','https://dl.airtable.com/.attachmentThumbnails/5b93bc0539e271da14aff5f26409ba0f/a2e285bc', 'Canada'], 
                ['clairebookworm','https://dl.airtable.com/.attachmentThumbnails/35728134593f36c5c2f0cc1f3b222b16/45912656', 'LA'], 
                ['austin','https://dl.airtable.com/.attachmentThumbnails/2cdf69801e29bffc975fdda0005a2a5c/d4974439', 'New York'], 
                ['avrohomtravers','https://dl.airtable.com/.attachmentThumbnails/1e120e4304f23b3f7ee1aa18f4bae95d/0f0777ab', 'the UK'], 
                ['aurora42lambda','https://dl.airtable.com/.attachmentThumbnails/fad2f9af350c6cd3d5ce347af56a15f3/a0b6fb16', 'France'], 
                ['anthonykung','https://dl.airtable.com/.attachmentThumbnails/9a00247b55690d8f1c9e9dfbd759a7a1/b0819a3b', 'Oregon'], 
                ['muirrum','https://dl.airtable.com/.attachmentThumbnails/485ae4f3810bb78d4dd8ff8e66e2fe11/f71279cf', 'Boston'],
                ['orangelemon','https://dl.airtable.com/.attachmentThumbnails/56b4e14d07d64120478efc86b93ebe24/c7da7fd7', 'Connecticut'],
                ['elizabethq','https://dl.airtable.com/.attachmentThumbnails/ad161e26ed305544f746e1115f60f98b/f9b0d38d', 'Washington DC'], 
                ['abby','https://dl.airtable.com/.attachmentThumbnails/f86e77d5b3ba28394d0994c525d499ec/05ff65c1', 'the USA'], 
                ['rjhangiani','https://dl.airtable.com/.attachmentThumbnails/76b229b9ce18bddfe1a07301e5759146/5654b54e', 'the USA'], 
                ['kiyac2005','https://dl.airtable.com/.attachmentThumbnails/076829c3fa8796e0095c1bf4363590d3/9b8191e3', 'Texas'], 
                ['yashkarthik95','https://dl.airtable.com/.attachmentThumbnails/0d44280817a3b30c039437ca3dd8f607/fb98d733', 'India'], 
                ['malte','https://dl.airtable.com/.attachmentThumbnails/a53240e11a0bc0d01b41682437a85f20/1dec12ed', 'Germany']]; function getRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));}; var randome = getRandomInt(users.length); console.log(randome); document.getElementById('tooltiptext').innerHTML=\`Meet&nbsp; 
              <a href=\'https://scrapbook.hackclub.com/\`+users[randome][0]+\`\' class=\'black-color mention post-text-mention\' color=\'black\'> 
              <img src=\'\`+users[randome][1]+\`\' 
              alt=\'sampoder\' width=\'24\' height=\'24\' class=\'mention-avatar post-text-mention-avatar\'> 
              &nbsp;@\`+users[randome][0]+'</a></a> from '+users[randome][2]+'\'\"> makers </span>`
            }}
          ></span>
          <span class="tooltiptext" id="tooltiptext"></span>
        </div>
      </span>
      . We left it them to get hacking & they built some pretty awesome things…
    </Text>
  </Container>
)
