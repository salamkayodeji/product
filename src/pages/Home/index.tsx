import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import BulkSms from "../../content/BulkSms.json";
import Security from "../../content/Security.json"
import Software from "../../content/Software.json"
import Network from "../../content/Network.json"
import Hardware from "../../content/Hardware.json"
import Digital from "../../content/Digital.json"
import Awesome from "../../components/Awesome";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <br/>
      <Awesome/>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="right"
        title={BulkSms.title}
        content={BulkSms.text}
        button={BulkSms.button}
        weblink={BulkSms.weblink}
        icon="hero-1.png"
        id="bulksms"
      />
      <ContentBlock
        type="left"
        title={Security.title}
        content={Security.text}
        section={Security.section}
        button={Security.button}
        weblink={Security.weblink}
        icon="security.png"
        id="security"
      />
      <ContentBlock
        type="right"
        title={Network.title}
        content={Network.text}
        button={Network.button}
        weblink={Network.weblink}
        icon="network.jpg"
        id="network"
      />

      <ContentBlock
        type="left"
        title={Software.title}
        content={Software.text}
        section={Software.section}
        button={Security.button}
        weblink={Security.weblink}
        icon="software-development.png"
        id="software"
      />
      <ContentBlock
        type="right"
        title={Hardware.title}
        content={Hardware.text}
        button={Hardware.button}
        weblink={Hardware.weblink}
        icon="nework1.jpeg"
        id="hardware"
      />
      <ContentBlock
        type="left"
        title={Digital.title}
        content={Digital.text}
        button={Digital.button}
        weblink={Digital.weblink}
        icon="target.png"
        id="product"
      />

      
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
