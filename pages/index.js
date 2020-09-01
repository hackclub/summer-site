import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import Banner from '../components/recap/banner'
import HardwareIntro from '../components/recap/hardware-intro'
import HardwareGrants from '../components/recap/hardware'
import Polaroid from '../components/recap/polaroid'
import KawasakiDetector from '../components/recap/kawasakiDetector'
import MIDI from '../components/recap/midi'
import LedMusic from '../components/recap/ledMusic'
import ScrapbookIntro from '../components/recap/scrapbook-intro'
import Scrapbook from '../components/recap/scrapbook'
import Arts from '../components/recap/arts'
import AMA from '../components/recap/amas'
import Connect from '../components/recap/connect'
import Map from '../components/recap/map'
import Thanks from '../components/recap/thankyou'
import Intro from '../components/recap/intro'
import Footer from '../components/recap/footer'

export default () => (
  <>
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
  </>
)
