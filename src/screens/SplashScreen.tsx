import { copy } from "../content";
import { designAssets } from "../designAssets";

export function SplashScreen() {
  return (
    <section className="screen splash-screen">
      <img
        className="splash-screen__bg"
        src={designAssets.splashVisualBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />

      <img
        className="splash-screen__hero"
        src={designAssets.splashTwenty}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />
      <div className="splash-screen__copy">
        <p>{copy.brandUpper}</p>
        <p>{copy.anniversary}</p>
        <p>{copy.eventName}</p>
      </div>

      <img
        className="splash-screen__logo"
        src={designAssets.splashLogo}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />
    </section>
  );
}
