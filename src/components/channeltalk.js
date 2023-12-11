import React from "react";
import ChannelService from "./channeltalkservice";

const ChannelTalk = () => {
  ChannelService.loadScript();
  ChannelService.boot({
    "pluginKey": "35dad63b-bdd2-41a7-b04a-4404ed64ce9b", // fill your plugin key
  });
  
  return (
    <>
    </>
  );
};

export default ChannelTalk;