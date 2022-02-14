import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";

// @ts-ignore
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";






const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
  button,
  weblink
  
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>

          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h4>{t(title)}</h4>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                        <AwesomeButton
                          cssModule={AwesomeButtonStyles}
                          type="primary"
                          size="large"
                          ripple="true"
                          href= {t(weblink)}
                          >
                          {t(button)}
                          </AwesomeButton>


                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
