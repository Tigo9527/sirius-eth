import React, { memo, useEffect, useState } from 'react';
import fetch from '../../../utils/request';
import { useParams } from 'react-router-dom';
interface RouteParams {
  address: string;
  tokenAddress: string;
}
export const HexId = memo(({}) => {
  let { address, tokenAddress } = useParams<RouteParams>();
  address = tokenAddress || address;
  const [hexId, setHexId] = useState(0);
  const [token, setToken] = useState('?');
  useEffect(() => {
    fetch('/stat/devops/hexId?hexId=' + address).then(result => {
      // console.log(`result is `, result);
      setHexId(result.hex?.id || -1);
      setToken(result.token?.name || '-');
    });
  }, [address]);
  return (
    <>
      [{hexId}] [{token}]
    </>
  );
});
