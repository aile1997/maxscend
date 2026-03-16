import { designAssets } from "../designAssets";

export function EventBackdrop() {
  return (
    <div className="event-backdrop" aria-hidden="true">
      <img className="event-backdrop__image" src={designAssets.eventBackdrop} alt="" />
    </div>
  );
}
