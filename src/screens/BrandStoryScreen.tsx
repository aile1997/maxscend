import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

const seals = [
  { img: `${B}figma-seal-qin.png`, motto: "以 勤 致 胜    奋 斗 为 本", power: "行          动          力" },
  { img: `${B}figma-seal-zhuo.png`, motto: "拙 朴 求 进    长 期 主 义", power: "专          注          力" },
  { img: `${B}figma-seal-xin.png`, motto: "信 而 向 善    以 信 立 企", power: "信          任          力" },
  { img: `${B}figma-seal-he.png`, motto: "和 融 共 促    协 同 共 生", power: "协          同          力" },
];

const traitCards = [
  {
    sections: [
      {
        title: "性格.CHARACTER",
        lines: [
          { w: '> **print( ', o: '沉稳/乐观' },
          { w: '', o: '爱思考/注重逻辑   ', end: ' }', endW: true },
        ],
      },
      {
        title: "能力.CAPACITY",
        lines: [
          { w: '> **print( ', o: '频谱感知,波态切换' },
          { w: '', o: '信号增益,频率调和 ', end: '}', endW: true },
        ],
      },
    ],
  },
  { svg: `${B}爱好.svg` },
  { svg: `${B}造型.svg` },
];

const yearbooks = [
  { cover: `${B}截屏2026-03-10 19.10.39 1.svg`, title: "时间的刻度", sub: "卓胜微 20 周年" },
  { cover: `${B}9546ac3bd6cfdea7ec5ae6863b039e7f 1.svg`, title: "在这里度过有为的年展", sub: "2024—担当、突围、向善" },
  { cover: `${B}Union.svg`, title: "在这里遇见有为的年轻", sub: "2023—芯途探索" },
];

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      {/* 品牌故事页不使用 EventBackdrop，设计稿为暗色背景 */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* ---- 品牌背景 ---- */}
      <h2 className="screen__section-title brand-story__title">品牌背景</h2>

      <div className="brand-story__code">
        <span className="brand-story__code-w">{"{"}</span>
        <div className="brand-story__code-block">
          <span className="brand-story__code-w">"Brand Name" : Maxscend</span>
          <span className="brand-story__code-o">#卓胜微</span>
        </div>
        <div className="brand-story__code-block">
          <span className="brand-story__code-w">"Brand slogan"</span>
          <span className="brand-story__code-o">探索物理资源的边界</span>
        </div>
        <div className="brand-story__code-end">
          <span className="brand-story__code-w">"Spiritual core"</span>
          <span className="brand-story__code-o brand-story__code-o--push">#精神核心</span>
        </div>
        <div className="brand-story__code-end">
          <span className="brand-story__code-w">{"}"}</span>
        </div>
      </div>

      {/* ---- 品牌精神 ---- */}
      <h2 className="screen__section-title brand-story__title brand-story__title--spirit">品牌精神</h2>

      <div className="brand-story__seal-grid">
        {seals.map((s, i) => (
          <div key={i} className="brand-story__seal">
            <img className="brand-story__seal-img" src={s.img} alt="" />
            <span className="brand-story__seal-motto">{s.motto}</span>
            <span className="brand-story__seal-power">{s.power}</span>
          </div>
        ))}
      </div>

      {/* ---- IP介绍 + 吉祥物 (合成SVG: 橙色背景+白色裁切+吉祥物) ---- */}
      <div className="brand-story__ip">
        <h2 className="brand-story__ip-title">IP介绍</h2>
        <img className="brand-story__simjo-logo" src={`${B}Group 333.svg`} alt="simjo" />
        <img className="brand-story__ip-illustration" src={`${B}Group 335.svg`} alt="小卓吉祥物" />
      </div>

      {/* ---- Print 描述 (英文引号) ---- */}
      <p className="brand-story__print">{`> **print("我是小卓。")\n                         > **print("我是卓胜微技术灵魂\n                                                           的感性表达。")\n> **print("我的使命是:\n                         在探索物理资源边界的旅途中，守护每一次可靠且温暖的连接。"`}</p>

      {/* ---- 名片 + SLOGAN (用SVG保证文字布局精确) ---- */}
      <div className="brand-story__namecard">
        <img className="brand-story__namecard-svg" src={`${B}名字_小卓(simjo) MBTI人格_ISTP 星座_双子座.svg`} alt="名字:小卓(simjo) MBTI人格:ISTP 星座:双子座" />
        <div className="brand-story__namecard-slogan">
          <span className="brand-story__namecard-slogan-label">SLOGAN</span>
          <span className="brand-story__namecard-slogan-text">简于心 跃于行</span>
        </div>
      </div>

      {/* ---- 吉祥物2 + 底部向量 ---- */}
      <div className="brand-story__mascot2-section">
        <img className="brand-story__vector-bg" src={`${B}figma-vector-bottom.png`} alt="" aria-hidden="true" />
        <img className="brand-story__mascot2" src={`${B}figma-mascot2.png`} alt="小卓" />
      </div>

      {/* ---- 性格/能力/爱好/造型 水平滑动栏 ---- */}
      <div className="brand-story__traits-carousel">
        {traitCards.map((card, ci) => (
          <article key={ci} className="brand-story__trait-card">
            {"svg" in card ? (
              <img className="brand-story__trait-svg" src={card.svg} alt="" />
            ) : (
              card.sections.map((sec, si) => (
                <div key={si} className="brand-story__trait-section">
                  <h3 className="brand-story__trait-title">{sec.title}</h3>
                  {sec.lines.map((line, li) => (
                    <p key={li} className={`brand-story__trait-line${!line.w ? ' brand-story__trait-line--indent' : ''}`}>
                      {line.w && <span className="brand-story__code-w">{line.w}</span>}
                      <span className="brand-story__code-o">{line.o}</span>
                      {line.end && <span className={line.endW ? 'brand-story__code-w' : 'brand-story__code-o'}>{line.end}</span>}
                    </p>
                  ))}
                </div>
              ))
            )}
          </article>
        ))}
      </div>

      {/* >>> */}
      <p className="brand-story__prompt">{">>>"}</p>

      {/* ---- 年刊 ---- */}
      <h2 className="screen__section-title brand-story__title brand-story__title--yearbook">年刊</h2>

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
