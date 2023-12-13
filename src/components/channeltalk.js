/* 
-------------------------------------------------------------------------
	파일명		: channeltalk.js
	설명		: 채널톡 컴포넌트 설치
	담당자		: 박효연
	개발날짜	: 2023/12/11
-------------------------------------------------------------------------
*/

import React from "react";
import ChannelService from "./channeltalkservice";

const ChannelTalk = () => {
  ChannelService.loadScript();
  ChannelService.boot({
    "pluginKey": "35dad63b-bdd2-41a7-b04a-4404ed64ce9b",
  });
  
  return (
    <>
    </>
  );
};

export default ChannelTalk;