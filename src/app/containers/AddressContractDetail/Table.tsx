import React /*useEffect,*/ from 'react';
// import queryString from 'query-string';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
// import { useHistory, useLocation } from 'react-router';
import { TabsTablePanel } from 'app/components/TabsTablePanel/Loadable';
import // isContractAddress,
// isZeroAddress,
// isAccountAddress,
'utils';
import { CFX_TOKEN_TYPES } from 'utils/constants';
// import { ContractContent, CheckCircleIcon } from './ContractContent';
// import AlertCircle from '@zeit-ui/react-icons/alertCircle';
import { ExcutedAndPendingTxns } from 'app/containers/Transactions/Loadable';
// import lodash from 'lodash';

import {
  // ExcutedTxns,
  // CFXTxns,
  CRC20Txns,
  CRC721Txns,
  CRC1155Txns,
  // PendingTxns,
} from 'app/containers/Transactions/Loadable';
// import { MinedBlocks } from 'app/containers/Blocks/Loadable';
// import { NFTAsset } from 'app/containers/NFTAsset/Loadable';
// import { Card } from '../../components/Card';
// import { LineChart as Chart } from '../../components/Chart/Loadable';
// import styled from 'styled-components/macro';

export function Table({ address, addressInfo, type }) {
  const { t } = useTranslation();
  // const location = useLocation();
  // const history = useHistory();
  // const queries = queryString.parse(location.search);

  // const isContract = type === 'contract';

  const tabs: any = [
    {
      value: `transaction`,
      action: 'accountTransactions',
      label: t(translations.general.transactions),
      content: <ExcutedAndPendingTxns address={address} />,
    },
  ];

  tabs.push({
    hidden: !addressInfo.erc20TransferCount,
    value: `transfers-${CFX_TOKEN_TYPES.erc20}`,
    action: 'transfersErc20',
    label: t(translations.general.tokenTxnsErc20),
    content: <CRC20Txns address={address} />,
  });

  tabs.push({
    hidden: !addressInfo.erc721TransferCount,
    value: `transfers-${CFX_TOKEN_TYPES.erc721}`,
    action: 'transfersErc721',
    label: t(translations.general.tokenTxnsErc721),
    content: <CRC721Txns address={address} />,
  });

  tabs.push({
    hidden: !addressInfo.erc1155TransferCount,
    value: `transfers-${CFX_TOKEN_TYPES.erc1155}`,
    action: 'transfersErc1155',
    label: t(translations.general.tokenTxnsErc1155),
    content: <CRC1155Txns address={address} />,
  });

  const clientWidth = document.body.clientWidth;
  let chartWidth = clientWidth - 36;
  if (clientWidth > 1350) chartWidth = 1350;
  if (chartWidth < 365) chartWidth = 365;
  // const analysisPanel = () => (
  //   <StyledTabWrapper>
  //     <Card>
  //       <Chart
  //         width={chartWidth}
  //         indicator="contractAnalysis"
  //         contractAddress={address}
  //       />
  //     </Card>
  //   </StyledTabWrapper>
  // );
  // if (isContract) {
  //   tabs.push({
  //     value: 'analysis',
  //     action: 'contractAnalysis',
  //     label: t(translations.token.analysis),
  //     content: analysisPanel(),
  //   });
  // }

  // if (isContract) {
  //   // trick by frontend, the better way is api always return 'verify' info
  //   let checkIcon: React.ReactNode = '';
  //   if (
  //     !lodash.isNil(addressInfo.isRegistered) ||
  //     !lodash.isNil(addressInfo.cfxTransferCount)
  //   ) {
  //     if (addressInfo.verify?.exactMatch === true) {
  //       checkIcon = <CheckCircleIcon />;
  //     } else {
  //       checkIcon = <AlertCircle size={16} color="#e36057" />;
  //     }
  //   }

  //   tabs.push({
  //     value: 'contract-viewer',
  //     action: 'contractViewer',
  //     label: (
  //       <div>
  //         {t(translations.token.contract)} {checkIcon}
  //       </div>
  //     ),
  //     content: <ContractContent contractInfo={addressInfo} />,
  //   });
  // }

  // if (!(isContract || isZeroAddress(address))) {
  //   tabs.push(
  //     ...[
  //       {
  //         value: 'nft-asset',
  //         action: 'NFTAsset',
  //         label: t(translations.addressDetail.NFTAsset),
  //         content: <NFTAsset />,
  //       },
  //       {
  //         value: 'mined-blocks',
  //         action: 'minedBlocks',
  //         label: t(translations.addressDetail.minedBlocks),
  //         content: <MinedBlocks address={address} />,
  //       },
  //     ],
  //   );
  // }

  return <TabsTablePanel key="table" tabs={tabs} />;
}
// const StyledTabWrapper = styled.div`
//   .card {
//     padding: 0.3571rem !important;

//     .content {
//       overflow-x: auto;
//       & > div {
//         box-shadow: none !important;
//       }
//     }
//   }
// `;
