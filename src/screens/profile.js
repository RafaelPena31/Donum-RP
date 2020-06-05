import React from "react";
import ScreenTemplate from "../components/templates/screenTemplate";
import { Topside } from "../components/organims/Profile/Topside";
import { CampaignSpace } from "../components/organims/Profile/CampaignSpace";

export const Profile = () => (
  <ScreenTemplate>
    <Topside />
    <CampaignSpace />
  </ScreenTemplate>
);
