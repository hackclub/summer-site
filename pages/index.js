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
import Banner from '../components/recap/banner'
import Head from 'next/head'
import Scrapbook from '../components/recap/scrapbook'
import HardwareGrants from '../components/recap/hardwaregrants'
import Polaroid from '../components/recap/polaroid'
import KawasakiDetector from '../components/recap/kawasakiDetector'
import MIDI from '../components/recap/midi'
import LedMusic from '../components/recap/ledMusic'
import Arts from '../components/recap/arts'
import AMA from '../components/recap/AMA'
import Connect from '../components/recap/connect'
import Map from '../components/recap/map'
import Thanks from '../components/recap/thankyou'
import Meta from '@hackclub/meta'
import Footer from '../components/recap/footer'
import Intro from '../components/recap/intro'
import HardwareIntro from '../components/recap/hardware-intro'
import ScrapbookIntro from '../components/recap/scrapbook-intro'
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
    <MIDI />
    <ScrapbookIntro />
    <Scrapbook />
    <AMA />
    <Arts />
    <Connect />
    <Thanks />
    <Footer />
  </Box>
)