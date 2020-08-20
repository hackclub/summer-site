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
import Polaroid from '../components/polaroid'
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
import Nav from '../components/nav'

export default () => (
  <Box>
    <Meta
      as={Head}
      title="Summer of Making"
      description="A recap of an action packed summer full of hardware, Zoom calls, making friends, art and hacking!"
      image="https://assets.hackclub.com/log/2020-06-18_summer.jpg"
    />
    <Nav />
    <Banner />
    <Intro />
    <Map />
    <HardwareIntro />
    <HardwareGrants />
    <Polaroid />
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