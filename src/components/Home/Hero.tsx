import { useLazyQuery } from '@apollo/client';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { Button } from 'antd';
import ScrollButton from 'components/common/ScrollButton';
import { blockchainName, heroSecondary } from 'config/data';
import routes from 'config/routes';
import { DIDSession } from 'did-session';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { LiaEthereum } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import client from '../../apolloClient';
import compose from '../../composeClient';
import LOGIN_QUERY from '../../queries/login';

function Hero() {
  const handleQueryCompleted = (data: { viewer: { user: any } }) => {
    console.log('data: ', data);
    if (data && data.viewer && data.viewer.user) {
      localStorage.setItem('accessverseUser', JSON.stringify(data));
      navigate(routes.DASHBOARD);
    } else {
      console.log('no data:', data);
      navigate('/createprofile');
    }
  };
  const [executeQuery, { loading, error }] = useLazyQuery(LOGIN_QUERY, {
    client,
    fetchPolicy: 'network-only',
    onCompleted: handleQueryCompleted,
  });
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    console.log(error);
  }

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
        compose.setDID(session.did);
        localStorage.setItem('session', JSON.stringify(session));
        executeQuery();
      }
    } catch (err) {
      toast.error('Could not Signin the user... Try again');
      console.log('error: ', err);
    }
  };

  return (
    <div className="h-[85vh] w-[70%] sm:w-[70%] md:w-[60%] flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-5xl text-center font-bold tracking-wider z-10">
        Unlock the{' '}
        <span className="glow text-transparent bg-clip-text bg-gradient-to-b from-white via-[#AFCFFF] to-[#AFCFFF]">
          Power of Engagement
        </span>{' '}
        in your events
      </h1>

      <p className="text-[#8B8B8B] text-center mt-8 text-sm sm:text-base z-10 w-[80%]">
        {heroSecondary}
      </p>

      <Button
        type="primary"
        size="large"
        className="bg-[#1573FE] flex items-center justify-center mt-8 text-lg px-5 shadow-[#1573fe5c] shadow-xl z-10"
        onClick={wallectConnect}
      >
        Go to app
        <AiOutlineArrowRight />
      </Button>

      <div className="mt-12 z-10">
        <div className="flex bg-[#1F232C] px-2 py-2 sm:py-1 rounded-xl border border-gray-500 justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gradient-to-r from-[#20242C] via-[#342034] to-[#20242C]">
          <span className="mx-2 text-xs sm:text-lg">Powered By</span>
          <LiaEthereum size={30} />
          <span className="mx-2 text-xs sm:text-lg text-gray-300 font-bold">
            {blockchainName}
          </span>
        </div>
      </div>

      <div className="hidden sm:mt-24 sm:inline z-10">
        <ScrollButton />
      </div>
    </div>
  );
}

export default Hero;
