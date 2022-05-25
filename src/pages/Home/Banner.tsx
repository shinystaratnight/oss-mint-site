import React, { useEffect } from "react";
import { useMintPublicData } from "state/mint/hooks";
import * as Element from "./styles";

const Banner = () => {
  const { goldenMaxSupply, silverMaxSupply, commonMaxSupply } =
    useMintPublicData();

  return (
    <Element.Banner>
      <Element.PictureAlignmentWrapper>
        <Element.PictureAlignment>
          <img className="picture-01" alt="" src="nfts/0.png" />
          <img className="picture-02" alt="" src="nfts/1.png" />
          <img className="picture-03" alt="" src="nfts/2.png" />
          <img className="picture-04" alt="" src="nfts/3.png" />
          <img className="picture-05" alt="" src="nfts/4.png" />
          <img className="picture-06" alt="" src="nfts/5.png" />
          <img className="picture-07" alt="" src="nfts/6.png" />
          <img className="picture-08" alt="" src="nfts/7.png" />
          <img className="picture-09" alt="" src="nfts/8.png" />
          <img className="picture-10" alt="" src="nfts/9.png" />
          <img className="picture-11" alt="" src="nfts/10.png" />
          <Element.BannerContent>
            <Element.BannerTitle>
              {(
                commonMaxSupply +
                silverMaxSupply +
                goldenMaxSupply
              ).toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </Element.BannerTitle>
            <h1>OS Sneakers NFTs</h1>
          </Element.BannerContent>
        </Element.PictureAlignment>
      </Element.PictureAlignmentWrapper>
    </Element.Banner>
  );
};

export default Banner;
