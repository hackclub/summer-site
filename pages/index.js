import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Image,
  Text,
  Textarea
} from 'theme-ui'
import Banner from '../components/banner'
import Head from 'next/head'
import Scrapbook from '../components/scrapbook'
import HardwareGrants from '../components/hardwaregrants'
import ShoulderBot from '../components/shoulderbot'
import KawasakiDetector from '../components/kawasakiDetector'
import LedMusic from '../components/ledMusic'
import Arts from '../components/arts'
import AMA from '../components/AMA'
import Connect from '../components/connect'
import CommunityEvents from '../components/communityevents'
import Map from '../components/map'
import Thanks from '../components/thankyou'
import Meta from '@hackclub/meta'
import Footer from '../components/home-footer'
import Intro from '../components/intro'
import HardwareIntro from '../components/hardware-intro'
import ScrapbookIntro from '../components/scrapbook-intro'

export default () => (
  <Box>
    <Meta
      as={Head}
      title="Summer of Making"
      description="$50k in GitHub hardware grants, daily streak system, Slack community with 10k hackers, & weekly online events. Open to teenagers worldwide. What will you make?"
      image="https://assets.hackclub.com/log/2020-06-18_summer.jpg"
    />
    <Banner />
    <Intro />
    <Map />
    <HardwareIntro />
    <HardwareGrants />
    <ShoulderBot />
    <KawasakiDetector />
    <LedMusic />
    <KawasakiDetector />
    <ScrapbookIntro />
    <Scrapbook />
    <AMA />
    <Arts />
    <Connect />
    <Thanks />
    <Footer />
  </Box>
)
