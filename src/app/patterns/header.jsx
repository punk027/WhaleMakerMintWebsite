import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Home.module.css";

import Metamask from "../utils/connector";
import {useUser} from "../core/user/user-context";
import {lengthOfAddress, setLocalStorageWalletStatus} from "../utils/wallet";

const Header = () => {

    const { walletAddress, connectWallet, setWalletAddress } = useUser();

  return (
    <div className={styles.header}>
      <Link href="/">
        <img
          src="/logo.svg"
          alt="logo"
          width={60}
          height={40}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <button
        className={styles.connect}
        onClick={async () => {
            console.log('aaa')
            if(walletAddress.length === lengthOfAddress) {

                setWalletAddress('');
                setLocalStorageWalletStatus('').then();
            } else {
                await connectWallet();
            }
        }}
      >
        <span>
          {walletAddress.length === lengthOfAddress
            ? `${walletAddress?.slice(0, 6)}...${walletAddress?.slice(walletAddress?.length - 6)}`
            : "connect wallet"}
        </span>
        <img src="/icons/wallet.svg" alt="wallet" />
      </button>
    </div>
  );
};

export default Header;
