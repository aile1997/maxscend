import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

const yearbooks = [
  { cover: `${B}截屏2026-03-10 19.10.39 1.svg`, title: "时间的刻度", sub: "卓胜微 20 周年" },
  { cover: `${B}9546ac3bd6cfdea7ec5ae6863b039e7f 1.svg`, title: "在这里度过有为的年展", sub: "2024—担当、突围、向善" },
  { cover: `${B}Union.svg`, title: "在这里遇见有为的年轻", sub: "2023—芯途探索" },
];

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      {/* Logo */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* 全页文字层 SVG */}
      <img className="brand-story__text-layer" src={`${B}Group 337.svg`} alt="品牌故事内容" />

      {/* IP介绍 + simjo logo */}
      <div className="brand-story__ip-header">
        <h2 className="brand-story__ip-title">IP介绍</h2>
        <img className="brand-story__simjo-logo" src={`${B}Group 333.svg`} alt="simjo" />
      </div>

      {/* IP 插图 (绝对定位) */}
      <img className="brand-story__ip-illustration" src={`${B}Group 335.svg`} alt="小卓吉祥物" />

      {/* 吉祥物2 + 底部向量 */}
      <div className="brand-story__mascot2-section">
        <img className="brand-story__vector-bg" src={`${B}figma-vector-bottom.png`} alt="" aria-hidden="true" />
        <img className="brand-story__mascot2" src={`${B}figma-mascot2.png`} alt="小卓" />
      </div>

      {/* 性格/能力/爱好/造型 水平滑动栏 */}
      <div className="brand-story__traits-carousel">
        {/* 第一张: 名片SVG */}
        <article className="brand-story__trait-card">
          <img className="brand-story__trait-svg" src={`${B}名字_小卓(simjo) MBTI人格_ISTP 星座_双子座.svg`} alt="" />
        </article>
        {/* 第二张: 爱好 */}
        <article className="brand-story__trait-card">
          <img className="brand-story__trait-svg" src={`${B}爱好.svg`} alt="" />
        </article>
        {/* 第三张: 造型 */}
        <article className="brand-story__trait-card">
          <img className="brand-story__trait-svg" src={`${B}造型.svg`} alt="" />
        </article>
      </div>

      {/* 年刊滑动栏 */}
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
