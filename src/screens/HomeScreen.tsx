import { copy } from "../content";
import { designAssets } from "../designAssets";

export function HomeScreen() {
  return (
    <section className="screen home-screen">

      <img
        className="screen__header-logo"
        src={designAssets.headerLogo}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />

      <img
        className="home-screen__copy-image"
        src={designAssets.homeCopyImage}
        alt={`${copy.eventName} ${copy.sloganStart}${copy.sloganEnd} ${copy.venue} ${copy.dateRange}`}
        fetchPriority="high"
      />
    </section>
  );
}
