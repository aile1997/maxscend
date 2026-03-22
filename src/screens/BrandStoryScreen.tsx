import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

const yearbooks = [
  { cover: `${B}yearbook-2025.png`, title: "时间的刻度", sub: "卓胜微 20 周年" },
  { cover: `${B}yearbook-2024.png`, title: "在这里度过有为的年展", sub: "2024—担当、突围、向善" },
  { cover: `${B}yearbook-2023.png`, title: "在这里遇见有为的年轻", sub: "2023—芯途探索" },
  { cover: `${B}yearbook-2022.png`, title: "在这里遇见有为的年轻", sub: "2022—星河漫漫" },
];

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      {/* Header logo */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* Decorative orange vectors */}
      <img className="brand-story__deco brand-story__deco--1" src={`${B}deco-vector-1.svg`} alt="" aria-hidden="true" />
      <img className="brand-story__deco brand-story__deco--2" src={`${B}deco-vector-2.svg`} alt="" aria-hidden="true" />
      <img className="brand-story__deco brand-story__deco--3" src={`${B}deco-vector-3.svg`} alt="" aria-hidden="true" />

      {/* All text content as a single SVG layer - pixel-perfect from Figma */}
      <img
        className="brand-story__text-layer"
        src={`${B}Group 315.svg`}
        alt="品牌故事内容"
      />

      {/* Mascot photo 1 */}
      <div className="brand-story__mascot-photo brand-story__mascot-photo--1">
        <img src={`${B}mascot-photo-1.png`} alt="小卓吉祥物" />
      </div>

      {/* Mascot photo 2 */}
      <div className="brand-story__mascot-photo brand-story__mascot-photo--2">
        <img src={`${B}mascot-photo-2.png`} alt="小卓吉祥物" />
      </div>

      {/* Yearbook cover (from Figma, positioned by SVG text layer's "年刊" heading) */}
      <div className="brand-story__yearbook-carousel">
        {yearbooks.map((book, i) => (
          <div key={i} className="brand-story__yearbook-card">
            <div className="brand-story__yearbook-cover">
              <img src={book.cover} alt={book.title} />
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
