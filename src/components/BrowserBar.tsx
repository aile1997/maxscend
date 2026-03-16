import { BackIcon, MoreIcon, ReloadIcon, SettingsIcon } from "./Icons";

interface BrowserBarProps {
  dark?: boolean;
  domain: string;
}

export function BrowserBar({ dark = false, domain }: BrowserBarProps) {
  return (
    <div className={`browser-bar${dark ? " browser-bar--dark" : ""}`} aria-hidden="true">
      <button className="browser-bar__button" type="button" tabIndex={-1}>
        <BackIcon />
      </button>
      <div className="browser-bar__address">
        <span className="browser-bar__glyph">
          <SettingsIcon />
        </span>
        <span className="browser-bar__domain">{domain}</span>
        <span className="browser-bar__glyph">
          <ReloadIcon />
        </span>
      </div>
      <button className="browser-bar__button" type="button" tabIndex={-1}>
        <MoreIcon />
      </button>
    </div>
  );
}
