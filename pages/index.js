import dynamic from 'next/dynamic'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import Banner from '../components/recap/banner'
import Scrapbook from '../components/recap/scrapbook'
import HardwareGrants from '../components/recap/hardwaregrants'
import Polaroid from '../components/recap/polaroid'
const KawasakiDetector = dynamic(
  () => import('../components/recap/kawasakiDetector'),
  { loading: () => <p>...</p> }
)
const MIDI = dynamic(
  () => import('../components/recap/midi'),
  { loading: () => <p>...</p> }
)
const LedMusic = dynamic(
  () => import('../components/recap/ledMusic'),
  { loading: () => <p>...</p> }
)
const Arts = dynamic(
  () => import('../components/recap/arts'),
  { loading: () => <p>...</p> }
)
const AMA = dynamic(
  () => import('../components/recap/AMA'),
  { loading: () => <p>...</p> }
)
import Connect from '../components/recap/connect'
import Map from '../components/recap/map'
import Thanks from '../components/recap/thankyou'
import Intro from '../components/recap/intro'
import HardwareIntro from '../components/recap/hardware-intro'
import ScrapbookIntro from '../components/recap/scrapbook-intro'
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
