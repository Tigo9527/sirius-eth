import React, { useEffect, useState } from 'react';
import announcementNotification from 'images/notice/announcementNotification.png';
import FAQNotification from 'images/notice/FAQNotification.png';
import updateNotification from 'images/notice/updateNotification.png';
import { useTranslation } from 'react-i18next';
import fetch from '../../../utils/request';
import { translations } from 'locales/i18n';
import { Link } from 'app/components/Link/Loadable';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

export const noticeInfo = {
  hot: false,
  type: 'Announcement',
  brief: {
    en: 'ConfluxScan debug!',
    zh: 'ConfluxScan 【调试版】',
  },
  link: {
    en:
      'https://confluxscansupportcenter.zendesk.com/hc/en-us/articles/4412074333595-Nov-22-2021-Dec-5-2021',
    zh:
      'https://confluxscansupportcenter.zendesk.com/hc/zh-cn/articles/4412074333595-2021-11-22-2021-12-5',
  },
};

const ImgNotice = () => {
  if (noticeInfo.type === 'Announcement') {
    return <img src={announcementNotification} alt="notice indicator" />;
  } else if (noticeInfo.type === 'FAQ') {
    return <img src={FAQNotification} alt="notice indicator" />;
  } else if (noticeInfo.type === 'update') {
    return <img src={updateNotification} alt="notice indicator" />;
  }
  return null;
};
// notice
export const Notices = React.memo(() => {
  const { t, i18n } = useTranslation();
  const iszh = i18n.language.includes('zh');
  const [apiInfo, setApiInfo] = useState('api-back');
  const [statInfo, setStatInfo] = useState('stat-back');
  useEffect(() => {
    fetch('/stat/server-info').then(result => {
      console.log(`result is `, result);
      setStatInfo(
        result.serverInfo.replace('Conflux-Stat 2021.04.08 04.13.', ''),
      );
    });
    fetch('/v1/').then(result => {
      console.log(`result is `, result);
      setApiInfo(result.message);
    });
  }, []);
  return (
    <NoticeWrapper className="notice">
      [{apiInfo}] <a href={'/stat/d/'}>[{statInfo}]</a>
      <div className={`content ${noticeInfo.hot ? 'hot' : ''}`}>
        {noticeInfo.brief[iszh ? 'zh' : 'en']}
      </div>
    </NoticeWrapper>
  );
});

const NoticeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  ${media.s} {
    margin-top: 10px;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }

  .content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #6c6d75;

    &.hot {
      color: #e64e4e;
    }
  }

  .more {
    white-space: nowrap;
    margin-left: 24px;
    margin-right: 10px;
    border-bottom: 1px solid #1e3de4;

    &:hover,
    &:active {
      border-bottom: 1px solid #0f23bd;
    }
  }
`;
