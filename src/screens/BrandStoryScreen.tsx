import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

const yearbooks = [
  { cover: `${B}figma-yearbook.png`, title: "时间的刻度", sub: "卓胜微 20 周年" },
  { cover: `${B}yearbook-2024.png`, title: "在这里度过有为的年展", sub: "2024—担当、突围、向善" },
  { cover: `${B}yearbook-2023.png`, title: "在这里遇见有为的年轻", sub: "2023—芯途探索" },
  { cover: `${B}yearbook-2022.png`, title: "在这里遇见有为的年轻", sub: "2022—星河漫漫" },
];

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      {/* ---- Header background ---- */}
      <img className="bs-header-img" src={`${B}figma-header.png`} alt="" aria-hidden="true" />

      {/* ---- Logo ---- */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* ---- 品牌背景 Section ---- */}
      <div className="bs-section bs-section--code">
        <span className="bs-title">品牌背景</span>
        <span className="bs-code-w">{"{"}</span>
        <div className="bs-code-indent">
          <span className="bs-code-w">"Brand Name" : Maxscend</span>
          <span className="bs-code-o">#卓胜微</span>
        </div>
        <div className="bs-code-indent">
          <span className="bs-code-w">"Brand slogan"</span>
          <span className="bs-code-o">探索物理资源的边界</span>
        </div>
        <div className="bs-code-right">
          <span className="bs-code-w">"Spiritual core"</span>
          <span className="bs-code-o bs-code-o--indent">#精神核心</span>
        </div>
        <div className="bs-code-right">
          <span className="bs-code-w">{"}"}</span>
        </div>
      </div>

      {/* ---- 品牌精神 Section ---- */}
      <div className="bs-section bs-section--spirit">
        <span className="bs-title">品牌精神</span>

        {/* Row 1: 勤 + 拙 */}
        <div className="bs-seal-row">
          <div className="bs-seal">
            <img className="bs-seal-img" src={`${B}figma-seal-qin.png`} alt="" />
            <span className="bs-seal-motto">以 勤 致 胜    奋 斗 为 本</span>
            <span className="bs-seal-power">{"行          动          力"}</span>
          </div>
          <div className="bs-seal">
            <div className="bs-seal-bg" style={{ backgroundImage: `url(${B}figma-seal-zhuo.png)` }}>
              <span className="bs-seal-motto">拙 朴 求 进    长 期 主 义</span>
            </div>
            <span className="bs-seal-power">{"专          注          力"}</span>
          </div>
        </div>

        {/* Row 2: 信 + 和 — with IP bg behind */}
        <div className="bs-seal-ip-wrap">
          <div className="bs-seal-row bs-seal-row--abs">
            <img className="bs-seal-img-abs bs-seal-img-abs--left" src={`${B}figma-seal-xin.png`} alt="" />
            <img className="bs-seal-img-abs bs-seal-img-abs--right" src={`${B}figma-seal-he.png`} alt="" />
          </div>

          {/* IP background with orange vector */}
          <div className="bs-ip-bg" style={{ backgroundImage: `url(${B}figma-ip-bg.png)` }}>
            <span className="bs-title bs-title--ip">IP介绍</span>

            {/* Mascot photo 1 */}
            <div className="bs-mascot1-wrap">
              <img className="bs-mascot1-img" src={`${B}figma-mascot1.png`} alt="小卓" />
              <img className="bs-mascot1-overlay" src={`${B}figma-mascot1-overlay.png`} alt="" aria-hidden="true" />
            </div>
          </div>

          {/* Seal text for row 2 (overlaid) */}
          <div className="bs-seal-text-row2">
            <div className="bs-seal-text-col">
              <span className="bs-seal-motto">信 而 向 善    以 信 立 企</span>
              <span className="bs-seal-power">{"信          任          力"}</span>
            </div>
            <div className="bs-seal-text-col">
              <span className="bs-seal-motto">和 融 共 促    协 同 共 生</span>
              <span className="bs-seal-power">{"协          同          力"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Print statements ---- */}
      <div className="bs-section bs-section--print">
        <span className="bs-print-text">{`> **print("我是小卓。")\n                         > **print("我是卓胜微技术灵魂\n                                                           的感性表达。")\n> **print("我的使命是:\n                         在探索物理资源边界的旅途中，守护每一次可靠且温暖的连接。"`}</span>
      </div>

      {/* ---- Character info + SLOGAN ---- */}
      <div className="bs-section bs-section--info">
        <div className="bs-info-row">
          <span className="bs-info-text">{"名字:小卓(simjo)\nMBTI人格:ISTP\n星座:双子座"}</span>
          <div className="bs-slogan-block">
            <span className="bs-slogan-label">SLOGAN</span>
            <span className="bs-slogan-value">简于心 跃于行</span>
          </div>
        </div>
      </div>

      {/* ---- Mascot photo 2 with vector ---- */}
      <div className="bs-section bs-section--mascot2">
        <img className="bs-vector-bottom" src={`${B}figma-vector-bottom.png`} alt="" aria-hidden="true" />
        <img className="bs-mascot2-img" src={`${B}figma-mascot2.png`} alt="小卓" />
      </div>

      {/* ---- 性格.CHARACTER ---- */}
      <div className="bs-section bs-section--trait">
        <span className="bs-trait-title">性格.CHARACTER</span>
        <div className="bs-trait-content">
          <span className="bs-code-w">{"> **print( "}<span className="bs-code-o">沉稳/乐观</span></span>
          <span className="bs-code-o bs-trait-indent">{"爱思考/注重逻辑    }"}</span>
        </div>
      </div>

      {/* ---- 能力.CAPACITY ---- */}
      <div className="bs-section bs-section--trait">
        <span className="bs-trait-title">能力.CAPACITY</span>
        <div className="bs-trait-content">
          <span className="bs-code-w">{"> **print( "}<span className="bs-code-o">频谱感知,波态切换</span></span>
          <span className="bs-code-o bs-trait-end">{"信号增益,频率调和 }"}</span>
        </div>
      </div>

      {/* >>> */}
      <div className="bs-section bs-section--prompt">
        <span className="bs-code-w">{">>>"}</span>
      </div>

      {/* ---- 年刊 Section ---- */}
      <div className="bs-section bs-section--yearbook">
        <span className="bs-title">年刊</span>
        <div className="bs-yb-carousel">
          {yearbooks.map((book, i) => (
            <div key={i} className="bs-yb-card">
              <div className="bs-yb-cover" style={{ backgroundImage: `url(${book.cover})` }}>
                <button className="bs-yb-btn" type="button">点击阅读</button>
              </div>
              <span className="bs-yb-title">{book.title}</span>
              <span className="bs-yb-sub">{book.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
