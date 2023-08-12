import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../../components";
import { useRouter } from "next/router";

const CreateDAO = () => {

    return (
        <>
          <div className="cards-container">
            <div className="card create-dao-card">
              <div className="card-title">Select Blockchain</div>
              <div className="card-body">
                Effortlessly mint tokens, configure governance parameters, and deploy your DAO on the blockchain within minutes</div>
            </div>
              <div className="card view-dao-card">
                <div className="card-title">View DAO</div>
                <div className="card-body">
                  Explore DAO activities, analyze governance decisions, and monitor blockchain-based operations effortlessly</div>
              </div>
            </div>
        </>
    );
};