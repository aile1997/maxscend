interface StatusBarProps {
  light?: boolean;
}

export function StatusBar({ light = false }: StatusBarProps) {
  return (
    <div className={`status-bar${light ? " status-bar--light" : ""}`} aria-hidden="true">
      <span className="status-bar__time">9:41</span>
      <div className="status-bar__island" />
      <div className="status-bar__icons">
        <span className="status-bar__signal">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="status-bar__wifi" />
        <span className="status-bar__battery">
          <span className="status-bar__battery-level" />
        </span>
      </div>
    </div>
  );
}
