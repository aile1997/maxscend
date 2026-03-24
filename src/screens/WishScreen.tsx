import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { wishBrands } from "../data/wish-brands";
import { designAssets } from "../designAssets";

const A = `${import.meta.env.BASE_URL}wish-assets/`;
const PHOTOS = `${import.meta.env.BASE_URL}wish-photos/`;
const LOGOS = `${import.meta.env.BASE_URL}wish-logos/`;

const treeConfig = {
  娜塔栎: {
    intro: [
      "娜塔栎，是一种充满生命力的树木",
      "它适应力强，在不同环境中不断生长",
      "四季更迭，展现丰富而鲜明的色彩",
    ],
    poem: [
      "我们在这里种下一株娜塔栎",
      "它是一份关于时间的记录",
      "当年轮一圈一圈增长",
      "将和公司一起，继续向未来生长",
    ],
    rootText: "这株娜塔栎在此扎根",
    kvImg: `${A}kv-natali.webp`,
    defaultPhoto: `${A}photo-default-natali.webp`,
    kvOverlayOpacity: 0.35,
  },
  水杉: {
    intro: [
      "水杉，被誉为植物界的\u201c活化石\u201d",
      "它挺拔坚韧，历经亿年风雨依然生机盎然",
      "春夏翠绿，秋冬金红，四季皆有风采",
    ],
    poem: [
      "我们在这里种下一株水杉",
      "它是一份关于时间的记录",
      "当年轮一圈一圈增长",
      "将和公司一起，继续向未来生长",
    ],
    rootText: "这株水杉在此扎根",
    kvImg: `${A}kv-shuishan.webp`,
    defaultPhoto: `${A}photo-default-shuishan.webp`,
    kvOverlayOpacity: 0.15,
  },
};

function NotFound() {
  return (
    <div className="wish-screen wish-screen--404">
      <p>页面不存在</p>
    </div>
  );
}

export function WishScreen() {
  const { slug } = useParams<{ slug: string }>();
  const brand = wishBrands.find((b) => b.slug === slug);

  // 树牌页面不走主站 splash，立即显示
  useEffect(() => {
    window.__bootScreen?.finish();
  }, []);

  if (!brand) return <NotFound />;

  const tree = treeConfig[brand.tree];
  const yearText = brand.years
    ? `在与 ${brand.brandName} 携手走过第 ${brand.years} 年的这一年`
    : `在与 ${brand.brandName} 携手多年`;

  const photoSrc = `${PHOTOS}${brand.slug}.jpg`;
  const logoSrc = `${LOGOS}${brand.slug}.svg`;

  return (
    <div className="wish-screen">
      {/* === KV 区域（深色背景 + 树照片） === */}
      <div className="wish__kv">
        <img className="wish__kv-img" src={tree.kvImg} alt="" />
        <div className="wish__kv-overlay" style={{ opacity: tree.kvOverlayOpacity }} />

        {/* Header logo */}
        <img className="wish__logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

        {/* 这棵树 */}
        <p className="wish__label">这棵树</p>
        <h1 className="wish__tree-name">{brand.tree}</h1>

        {/* 右侧介绍文案 */}
        <div className="wish__intro">
          {tree.intro.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p>&nbsp;</p>
          {tree.poem.map((line, i) => (
            <p key={`p${i}`}>{line}</p>
          ))}
        </div>

        {/* 品牌合作年份 */}
        <div className="wish__year-text">
          <p>{yearText}</p>
        </div>

        {/* MAXSCEND 20TH ANNIVERSARY */}
        <div className="wish__anniversary-tag">
          <p>MAXSCEND</p>
          <p>20TH</p>
          <p>ANNIVERSARY</p>
        </div>

        {/* 品牌 logo（右下角） */}
        <img
          className="wish__brand-logo"
          src={logoSrc}
          alt={brand.brandName}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>

      {/* === 纸张背景下半段 === */}
      <div className="wish__paper">
        <img className="wish__paper-bg" src={`${A}bg-paper.webp`} alt="" aria-hidden="true" />

        {/* 时间记录 */}
        <div className="wish__time-section">
          <h2 className="wish__time-title">时间记录</h2>
          <p className="wish__time-desc">每一年，我们都会在这里记录它的变化</p>
          <p className="wish__time-desc">也记录公司的成长</p>
        </div>

        {/* 照片卡片 */}
        <div className="wish__card">
          <div className="wish__card-header">
            <img className="wish__card-clock" src={`${A}icon-time.svg`} alt="" aria-hidden="true" />
            <span className="wish__card-date">2026.3</span>
          </div>
          <p className="wish__card-label">{tree.rootText}</p>
          <div className="wish__card-photo">
            <img
              src={photoSrc}
              alt={tree.rootText}
              onError={(e) => {
                (e.target as HTMLImageElement).src = tree.defaultPhoto;
              }}
            />
          </div>
        </div>

        {/* 未来 */}
        <div className="wish__future">
          <h2 className="wish__future-title">未来</h2>
          <p>多年后也许它已经高过屋檐</p>
          <p>愿我们始终记得：</p>
          <p>所有长久的事，都需要时间</p>
        </div>
      </div>
    </div>
  );
}
