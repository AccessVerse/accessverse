import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { DIDSession } from 'did-session';
import { toast } from 'react-toastify';

import compose from '../composeClient';

const wallectConnect = async () => {
  try {
    const ethProvider = window.ethereum;
    const addresses = await ethProvider.request({
      method: 'eth_requestAccounts',
    });
    const accountId = await getAccountId(ethProvider, addresses[0]);
    const authMethod = await EthereumWebAuth.getAuthMethod(
      ethProvider,
      accountId
    );

    const session = await DIDSession.authorize(authMethod, {
      resources: compose.resources,
    });

    if (session) {
      await compose.setDID(session.did);
      localStorage.setItem('session', JSON.stringify(session));
    }
  } catch (error) {
    toast.error('Could not Signin the user... Try again');
  }
};

export default wallectConnect;
