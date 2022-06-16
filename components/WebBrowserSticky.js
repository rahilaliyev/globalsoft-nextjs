import React from "react";
import WebBrowserHeaderImage from "../public/images/WebBrowserImage.svg";
import Image from "next/image";

const WebBrowserSticky = () => {
  return (
    <>
      <div className="web-browser-header-image">
        <Image src={WebBrowserHeaderImage} alt="Web Browser Header" />
      </div>
      <div className="web-browser"></div>
    </>
  );
};

export default WebBrowserSticky;
