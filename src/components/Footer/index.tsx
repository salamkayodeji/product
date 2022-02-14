import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <a href="https://www.coinmac.org/contact/">
              <Chat>{t("Tell us everything")}</Chat>
              </a>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:info@coinmac.org">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
              <a href="https://tawk.to/chat/5eda42af4a7c62581799fe3f/default">
                {t("Support Center")}
              </a>
              </Large>
              <Large left="true" to="/">
              <a href="https://tawk.to/chat/5eda42af4a7c62581799fe3f/default">
                {t("Customer Support")}
                </a>
              </Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Suite 209 Bolingo Hotels and Towers,</Para>
              <Para>Central Business District,</Para>
              <Para>Abuja, Nigeria</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="">
              <a href="https://www.coinmac.org/about/">
                {t("About")}
              </a>
              </Large>
              <Large left="true" to="">
              <a href="https://www.coinmac.org/people/">
                {t("People")}
              </a>
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://web.facebook.com/coinmacltd"
                src="facebook.svg"
              />
              <SocialLink
                href="https://twitter.com/coinmacltd"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.instagram.com/coinmacintl/"
                src="instagram.svg"
              />
              
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
