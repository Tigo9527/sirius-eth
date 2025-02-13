/**
 *
 * Footer
 *
 */

import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link/Loadable';
import { media } from 'styles/media';
import { Footer as FooterComp } from 'app/components/Footer/Loadable';
import { TextLogo } from 'app/components/TextLogo/Loadable';
import { translations } from 'locales/i18n';
import { Language } from './Language';
// import { Currency } from './Currency';
import { ScanEvent } from 'utils/gaConstants';
import { NETWORK_TYPE, NETWORK_TYPES } from 'utils/constants';

import iconWechatQrcode from 'images/footer/wechat-qrcode.png';

import {
  Conflux,
  Discord,
  Git,
  KakaoTalk,
  Medium,
  Naver,
  Reddit,
  Telegram,
  Twitter,
  Wechat,
  Weibo,
  Youtube,
} from './Icon';

export function Footer() {
  const { t, i18n } = useTranslation();
  const iszh = i18n.language.includes('zh');

  const left = [<TextLogo key="logo" color="var(--theme-color-gray0)" />];

  const reportLink = (
    <Link
      className="footer-link"
      href="/report"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.report,
      }}
    >
      {t(translations.footer.report)}
    </Link>
  );

  const suggestionBoxLink = iszh ? (
    <Link
      className="footer-link"
      href="https://confluxscansupportcenter.zendesk.com/hc/zh-cn/requests/new"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.suggestionBox,
      }}
    >
      {t(translations.footer.suggestionBox)}
    </Link>
  ) : (
    <Link
      className="footer-link"
      href="https://confluxscansupportcenter.zendesk.com/hc/en-us/requests/new"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.suggestionBox,
      }}
    >
      {t(translations.footer.suggestionBox)}
    </Link>
  );
  const techIssueLink = (
    <Link
      className="footer-link"
      href="https://github.com/Conflux-Chain/sirius/issues"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.techIssue,
      }}
    >
      {t(translations.footer.techIssue)}
    </Link>
  );
  const websiteLink = (
    <Link
      className="footer-link"
      href="https://confluxnetwork.org"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.confluxNetwork,
      }}
    >
      {t(translations.footer.confluxnetwork)}
    </Link>
  );
  const portalLink = (
    <Link
      className="footer-link"
      href="https://portal.confluxnetwork.org"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.confluxPortal,
      }}
    >
      {t(translations.footer.confluxportal)}
    </Link>
  );
  const bountyLink = (
    <Link
      className="footer-link"
      href="https://bounty.conflux-chain.org"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.confluxBounty,
      }}
    >
      {t(translations.footer.confluxbounty)}
    </Link>
  );
  const privacyPolicy = (
    <Link
      className="footer-link"
      href="https://confluxnetwork.org/zh/policy"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.privacyPolicy,
      }}
    >
      {t(translations.footer.aboutUs.privacyPolicy)}
    </Link>
  );
  const terms = (
    <Link
      className="footer-link"
      href="https://confluxnetwork.org/terms"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.terms,
      }}
    >
      {t(translations.footer.aboutUs.terms)}
    </Link>
  );
  const supportCenter = iszh ? (
    <Link
      className="footer-link"
      href="https://confluxscansupportcenter.zendesk.com/hc/zh-cn"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.supportCenter,
      }}
    >
      {t(translations.footer.aboutUs.supportCenter)}
    </Link>
  ) : (
    <Link
      className="footer-link"
      href="https://confluxscansupportcenter.zendesk.com/hc/en-us"
      ga={{
        category: ScanEvent.menu.category,
        action: ScanEvent.menu.action.supportCenter,
      }}
    >
      {t(translations.footer.aboutUs.supportCenter)}
    </Link>
  );

  const icons = (
    <FooterContentIconWrapper>
      <FooterContentIconLink>
        <Link
          href="https://twitter.com/Conflux_Network"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.twitter,
          }}
        >
          <Twitter></Twitter>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://t.me/Conflux_English"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.tme,
          }}
        >
          <Telegram></Telegram>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://discord.com/invite/aCZkf2C"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.discord,
          }}
        >
          <Discord></Discord>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://medium.com/@ConfluxNetwork"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.medium,
          }}
        >
          <Medium></Medium>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://github.com/conflux-chain"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.github,
          }}
        >
          <Git></Git>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://weibo.com/confluxchain"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.weibo,
          }}
        >
          <Weibo></Weibo>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://open.kakao.com/o/gmyEjl2b"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.kakao,
          }}
        >
          <KakaoTalk></KakaoTalk>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <StyledIconWechatWrapper>
          <img
            alt="wechat qrcode icon"
            src={iconWechatQrcode}
            className="footer-qrcode"
          />
          <Wechat></Wechat>
        </StyledIconWechatWrapper>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://www.youtube.com/channel/UCFSTmjoSU8jn6DE_4V2TIzA"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.youtube,
          }}
        >
          <Youtube></Youtube>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://blog.naver.com/conflux-chain"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.naver,
          }}
        >
          <Naver></Naver>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://forum.conflux.fun/"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.forum,
          }}
        >
          <Conflux></Conflux>
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink>
        <Link
          href="https://www.reddit.com/r/Conflux_Network/"
          ga={{
            category: ScanEvent.menu.category,
            action: ScanEvent.menu.action.reddit,
          }}
        >
          <Reddit></Reddit>
        </Link>
      </FooterContentIconLink>
    </FooterContentIconWrapper>
  );

  const developResourceLinks = {
    developerAPI: (
      <Link
        className="footer-link"
        href={
          NETWORK_TYPE === NETWORK_TYPES.testnet
            ? 'https://api-testnet.confluxscan.net/doc'
            : 'https://api.confluxscan.net/doc'
        }
        ga={{
          category: ScanEvent.menu.category,
          action: ScanEvent.menu.action.developerAPI,
        }}
      >
        {t(translations.footer.developResource.developerAPI)}
      </Link>
    ),
    developerDocuments: (
      <Link
        className="footer-link"
        href="https://developer.confluxnetwork.org/"
        ga={{
          category: ScanEvent.menu.category,
          action: ScanEvent.menu.action.developerDocuments,
        }}
      >
        {t(translations.footer.developResource.developerDocuments)}
      </Link>
    ),
    confluxStudio: (
      <Link
        className="footer-link"
        href="https://github.com/ObsidianLabs/ConfluxStudio/"
        ga={{
          category: ScanEvent.menu.category,
          action: ScanEvent.menu.action.confluxStudio,
        }}
      >
        {t(translations.footer.developResource.confluxStudio)}
      </Link>
    ),
    confluxTruffle: (
      <Link
        className="footer-link"
        href="https://github.com/Conflux-Chain/conflux-truffle/"
        ga={{
          category: ScanEvent.menu.category,
          action: ScanEvent.menu.action.confluxTruffle,
        }}
      >
        {t(translations.footer.developResource.confluxTruffle)}
      </Link>
    ),
  };
  const ICP = useMemo(() => {
    return window.location.hostname.includes('confluxscan.net') ? (
      <CopyRight>
        <Link href="https://beian.miit.gov.cn">沪ICP备20007940号-2</Link>
      </CopyRight>
    ) : (
      <></>
    );
  }, []);

  const rightTop = [
    <FooterWrapper key="right-top">
      <FooterContentWrapper>
        <FooterContentTitle>
          {t(translations.footer.product)}
        </FooterContentTitle>
        <FooterContent>
          <FooterContentRow>
            <FooterContentLink>{websiteLink}</FooterContentLink>
            <FooterContentLink>{portalLink}</FooterContentLink>
            <FooterContentLink>{bountyLink}</FooterContentLink>
          </FooterContentRow>
        </FooterContent>
      </FooterContentWrapper>
      <FooterContentWrapper>
        <FooterContentTitle className="footer-develop-resource">
          {t(translations.footer.developResource.title)}
        </FooterContentTitle>
        <FooterContent>
          <FooterContentRow>
            {NETWORK_TYPE === NETWORK_TYPES.mainnet ||
            NETWORK_TYPE === NETWORK_TYPES.testnet ? (
              <FooterContentLink>
                {developResourceLinks.developerAPI}
              </FooterContentLink>
            ) : null}
            <FooterContentLink>
              {developResourceLinks.developerDocuments}
            </FooterContentLink>
            <FooterContentLink>
              {developResourceLinks.confluxStudio}
            </FooterContentLink>
            <FooterContentLink>
              {developResourceLinks.confluxTruffle}
            </FooterContentLink>
          </FooterContentRow>
        </FooterContent>
      </FooterContentWrapper>
      <FooterContentWrapper>
        <FooterContentTitle className="contact-us">
          {t(translations.footer.contactUs)}
        </FooterContentTitle>
        <FooterContent>
          <FooterContentRow>
            <FooterContentLink>{techIssueLink}</FooterContentLink>
            <FooterContentLink>{reportLink}</FooterContentLink>
            <FooterContentLink>{suggestionBoxLink}</FooterContentLink>
          </FooterContentRow>
        </FooterContent>
      </FooterContentWrapper>
      <FooterContentWrapper>
        <FooterContentTitle className="footer-tool">
          {t(translations.footer.aboutUs.title)}
        </FooterContentTitle>
        <FooterContent>
          <FooterContentRow>
            <FooterContentLink>{privacyPolicy}</FooterContentLink>
            <FooterContentLink>{terms}</FooterContentLink>
            <FooterContentLink>{supportCenter}</FooterContentLink>
          </FooterContentRow>
        </FooterContent>
      </FooterContentWrapper>
      <FooterContentWrapper>
        <FooterContentTitle className="preference">
          {t(translations.footer.preference)}
        </FooterContentTitle>
        <FooterContent>
          <FooterContentRow>
            <FooterContentLink>
              <Language />
            </FooterContentLink>
            {/* <FooterContentLink>
              <Currency />
            </FooterContentLink> */}
          </FooterContentRow>
        </FooterContent>
      </FooterContentWrapper>
    </FooterWrapper>,
    <FooterContentRow key="right-top-icons">{icons}</FooterContentRow>,
  ];
  const rightBottom = [
    <CopyRight key="copryRight">{t(translations.footer.copryRight)}</CopyRight>,
    <span key="ICP">{ICP}</span>,
  ];

  return (
    <FooterComp left={left} rightTop={rightTop} rightBottom={rightBottom} />
  );
}

// wrapper
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${media.m} {
    flex-flow: wrap;
  }
`;
const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.m} {
    margin-bottom: 1.1429rem;
    width: 50%;
  }
`;

// right top
const FooterContentTitle = styled.span`
  margin-bottom: 1.07rem;
  font-weight: 600;
  color: var(--theme-color-green0);
  margin-right: 6rem;
  /* margin-right: 8.5714rem;
  width: 5.7143rem;

  &.footer-develop-resource {
    margin-right: 6rem;
    width: auto;
  } */
  /* 
  &.footer-tool {
    margin-right: 12rem;
  }

  &.contact-us {
    margin-right: 6rem;
  } */

  ${media.m} {
    margin-bottom: 0.86rem;
    margin-right: inherit;
  }
`;
const FooterContent = styled.div`
  font-size: 0.86rem;
  display: flex;
  flex-direction: row;
`;

const FooterContentRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContentLink = styled.span`
  margin-bottom: 0.5rem;

  .link.footer-link {
    color: var(--theme-color-gray0);
    font-size: 0.86rem;
    margin-right: 5.1429rem;

    &:hover {
      color: var(--theme-color-green0);
    }

    ${media.m} {
      margin-right: inherit;
    }
  }

  ${media.m} {
    .link.footer-link {
      font-size: 0.71rem;
    }
  }
`;
const FooterContentIconWrapper = styled.div`
  margin-top: 1.14rem;
`;
const FooterContentIconLink = styled.span`
  margin-right: 0.57rem;
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--theme-color-gray2);

    &:hover {
      color: var(--theme-color-green0);
    }
  }

  ${media.m} {
    margin-top: 0.86rem;
  }
`;

const CopyRight = styled.span`
  display: block;
  color: var(--theme-color-gray0);

  a.link,
  a.link:hover,
  a.link:active {
    color: var(--theme-color-gray0);
  }

  ${media.s} {
    font-size: 0.71rem;
  }
`;

const StyledIconWechatWrapper = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    img.footer-qrcode {
      display: inherit;
    }
  }

  img.footer-qrcode {
    position: absolute;
    width: 8.1429rem;
    height: 8.1429rem;
    max-width: 8.1429rem;
    top: -8.2143rem;
    left: -3.2143rem;
    display: none;
  }
`;
