interface IReturnInteface {
    address: string;
    walletName: string;
    trxBalance: number;
    isConnected: boolean;
}
export declare const useTronlink: () => IReturnInteface;
export {};
