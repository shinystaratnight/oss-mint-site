import TwitterIcon from "components/TwitterIcon";
import DiscordIcon from "components/DiscordIcon";
import TelegramIcon from "components/TelegramIcon";
import * as Element from "./styles";

const Footer = () => {
  return (
    <Element.SocialLinkSection>
      <p>Follow us:</p>
      <div className="social-icons">
        <TwitterIcon />
        <DiscordIcon />
        <TelegramIcon />
      </div>
    </Element.SocialLinkSection>
  );
};

export default Footer;
