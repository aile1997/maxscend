import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

const yearbooks = [
  { cover: `${B}yearbook-2025.webp`, title: "时间的刻度", sub: "卓胜微 20 周年" },
  { cover: `${B}yearbook-2024.webp`, title: "在这里度过有为的年展", sub: "2024—担当、突围、向善" },
  { cover: `${B}yearbook-2023.webp`, title: "在这里遇见有为的年轻", sub: "2023—芯途探索" },
];

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      <img className="brand-story__text-layer" src={`${B}text-layer.svg`} alt="品牌故事内容" />

      <div className="brand-story__ip-header">
        <h2 className="brand-story__ip-title">IP介绍</h2>
        <img className="brand-story__simjo-logo" src={`${B}simjo-logo.svg`} alt="simjo" />
      </div>

      <img className="brand-story__ip-illustration" src={`${B}ip-illustration.svg`} alt="小卓吉祥物" />

      <div className="brand-story__mascot2-section">
        <img className="brand-story__vector-bg" src={`${B}vector-bottom.png`} alt="" aria-hidden="true" />
        <img className="brand-story__mascot2" src={`${B}mascot2.webp`} alt="小卓" />
      </div>

      <div className="brand-story__traits-carousel">
        <article className="brand-story__trait-card">
          <div className="brand-story__trait-section">
            <h3 className="brand-story__trait-title">性格.CHARACTER</h3>
            <p className="brand-story__trait-line">
              <span className="brand-story__code-w">{"> **print( "}</span>
              <span className="brand-story__code-o">沉稳/乐观</span>
            </p>
            <p className="brand-story__trait-line brand-story__trait-line--indent">
              <span className="brand-story__code-o">{"爱思考/注重逻辑   "}</span>
              <span className="brand-story__code-w">{"}"}</span>
            </p>
          </div>
          <div className="brand-story__trait-section">
            <h3 className="brand-story__trait-title">能力.CAPACITY</h3>
            <p className="brand-story__trait-line">
              <span className="brand-story__code-w">{"> **print( "}</span>
              <span className="brand-story__code-o">频谱感知,波态切换</span>
            </p>
            <p className="brand-story__trait-line brand-story__trait-line--indent">
              <span className="brand-story__code-o">{"信号增益,频率调和 "}</span>
              <span className="brand-story__code-w">{"}"}</span>
            </p>
          </div>
        </article>
        <article className="brand-story__trait-card">
          <img className="brand-story__trait-svg" src={`${B}trait-hobby.svg`} alt="" />
        </article>
        <article className="brand-story__trait-card">
          <img className="brand-story__trait-svg" src={`${B}trait-style.svg`} alt="" />
        </article>
      </div>

      <p className="brand-story__prompt">{">>>"}</p>

      <div className="brand-story__yearbook-carousel">
        {yearbooks.map((book, i) => (
          <div key={i} className="brand-story__yearbook-card">
            <div className="brand-story__yearbook-cover">
              <img className="brand-story__yearbook-img" src={book.cover} alt={book.title} />
              <button className="brand-story__yearbook-btn" type="button">点击阅读</button>
            </div>
            <p className="brand-story__yearbook-title">{book.title}</p>
            <p className="brand-story__yearbook-sub">{book.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
