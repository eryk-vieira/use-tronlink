import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface IReturnInteface {
  address: string;
  walletName: string;
  trxBalance: number;
  isConnected: boolean;
}

export const useTronlink = (): IReturnInteface => {
  const [trxBalance, setTrxBalance] = useState(0);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [walletName, setWalletName] = useState<string>('');

  const connectToWallet = useCallback(async (): Promise<boolean> => {
    if (window.tronLink) {
      await window.tronLink.request({ method: 'tron_requestAccounts' });
    }

    if (!window.tronWeb) return false;

    const { name, base58 } = window.tronWeb.defaultAddress;

    if (base58) {
      setAddress(base58);
      setWalletName(name || '');
      setIsConnected(true);

      const trxAmount = await window.tronWeb.trx.getBalance(base58);

      setTrxBalance(trxAmount);

      tronLinkEventListener();
      return true;
    }

    setIsConnected(false);
    return false;
  }, []);

  const cleanData = useCallback(() => {
    setTrxBalance(0);
    setIsConnected(false);
    setAddress('');
    setWalletName('');
  }, []);

  const tronLinkEventListener = useCallback(() => {
    window.addEventListener('load', connectToWallet);

    window.addEventListener('message', async (msg) => {
      const { message } = msg.data;

      if (!message) return;

      if (
        message.action === 'setAccount' ||
        message.action === 'setNode' ||
        message.action === 'tabReply' ||
        message.action === 'accountsChanged'
      ) {
        if (message.data.address) {
          connectToWallet();
        }

        if (message.action !== 'tabReply' && !message.data.address) {
          cleanData();
        }
      }
    });
  }, []);

  useEffect(() => {
    connectToWallet();
  }, [])

  return {
    address,
    isConnected,
    trxBalance,
    walletName
  }
};

