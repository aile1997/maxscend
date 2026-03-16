import { navIconAssets, navIconSizes } from "../designAssets";
import type { NavId, NavItemDefinition } from "../types";

interface BottomNavProps {
  activeId: NavId;
  items: NavItemDefinition[];
  onSelect: (item: NavItemDefinition) => void;
}

export function BottomNav({ activeId, items, onSelect }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => {
        const isActive = item.id === activeId;
        const icon = navIconAssets[item.id];
        const iconSize = navIconSizes[item.id];
        const iconSrc = isActive && icon.active ? icon.active : icon.inactive;
        return (
          <button
            key={item.id}
            className={`bottom-nav__item${isActive ? " is-active" : ""}`}
            type="button"
            aria-current={isActive ? "page" : undefined}
            aria-disabled={item.disabled ? true : undefined}
            onClick={() => onSelect(item)}
          >
            <span
              className="bottom-nav__icon"
              style={{
                width: `calc(${iconSize.width} * var(--design-unit))`,
                height: `calc(${iconSize.height} * var(--design-unit))`,
              }}
            >
              <img src={iconSrc} alt="" />
            </span>
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
