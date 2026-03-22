import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      {/* Decorative orange vectors */}
      <img className="brand-story__deco brand-story__deco--1" src={`${B}deco-vector-1.svg`} alt="" aria-hidden="true" />
      <img className="brand-story__deco brand-story__deco--2" src={`${B}deco-vector-2.svg`} alt="" aria-hidden="true" />
      <img className="brand-story__deco brand-story__deco--3" src={`${B}deco-vector-3.svg`} alt="" aria-hidden="true" />

      {/* Header logo */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* 品牌背景 */}
      <h2 className="brand-story__heading" style={{ top: "calc(157 * var(--design-unit))" }}>品牌背景</h2>
      <div className="brand-story__json">
        <p className="brand-story__json-line">{"{"}</p>
        <p className="brand-story__json-line brand-story__json-line--indent">"Brand Name" : Maxscend</p>
        <p className="brand-story__json-line brand-story__json-line--indent brand-story__json-line--orange">#卓胜微</p>
        <p className="brand-story__json-line brand-story__json-line--indent">"Brand slogan"</p>
        <p className="brand-story__json-line brand-story__json-line--indent2 brand-story__json-line--orange">探索物理资源的边界</p>
        <p className="brand-story__json-line brand-story__json-line--indent2">"Spiritual core"</p>
        <p className="brand-story__json-line brand-story__json-line--indent2 brand-story__json-line--orange">#精神核心</p>
        <p className="brand-story__json-line brand-story__json-line--right">{"}"}</p>
      </div>

      {/* 品牌精神 */}
      <h2 className="brand-story__heading" style={{ top: "calc(502 * var(--design-unit))" }}>品牌精神</h2>
      <div className="brand-story__spirit-grid">
        <div className="brand-story__spirit-item">
          <img className="brand-story__spirit-char" src={`${B}char-qin.svg`} alt="勤" />
          <p className="brand-story__spirit-motto">以 勤 致 胜 &nbsp;&nbsp; 奋 斗 为 本</p>
          <p className="brand-story__spirit-power">行 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 动 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 力</p>
        </div>
        <div className="brand-story__spirit-item">
          <img className="brand-story__spirit-char" src={`${B}char-zhuo.svg`} alt="拙" />
          <p className="brand-story__spirit-motto">拙 朴 求 进 &nbsp;&nbsp; 长 期 主 义</p>
          <p className="brand-story__spirit-power">专 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 注 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 力</p>
        </div>
        <div className="brand-story__spirit-item">
          <img className="brand-story__spirit-char" src={`${B}char-xin.svg`} alt="信" />
          <p className="brand-story__spirit-motto">信 而 向 善 &nbsp;&nbsp; 以 信 立 企</p>
          <p className="brand-story__spirit-power">信 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 任 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 力</p>
        </div>
        <div className="brand-story__spirit-item">
          <img className="brand-story__spirit-char" src={`${B}char-he.svg`} alt="和" />
          <p className="brand-story__spirit-motto">和 融 共 促 &nbsp;&nbsp; 协 同 共 生</p>
          <p className="brand-story__spirit-power">协 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 同 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 力</p>
        </div>
      </div>

      {/* IP介绍 */}
      <h2 className="brand-story__heading brand-story__heading--black" style={{ top: "calc(984 * var(--design-unit))" }}>IP介绍</h2>

      {/* Mascot photo 1 */}
      <div className="brand-story__mascot-photo brand-story__mascot-photo--1">
        <img src={`${B}mascot-photo-1.png`} alt="小卓吉祥物" />
      </div>

      {/* IP description */}
      <div className="brand-story__ip-desc">
        <p>{"> **print(\"我是小卓。\")"}</p>
        <p className="brand-story__ip-desc--indent">{"> **print(\"我是卓胜微技术灵魂"}</p>
        <p className="brand-story__ip-desc--indent2">{"的感性表达。\")"}</p>
        <p>{"> **print(\"我的使命是:"}</p>
        <p className="brand-story__ip-desc--indent">{"在探索物理资源边界的旅途中，守护每一次可靠且温暖的连接。\""}</p>
      </div>

      {/* Name card */}
      <div className="brand-story__namecard">
        <p><span className="brand-story__namecard-label">名字</span><span className="brand-story__namecard-value">:小卓(simjo)</span></p>
        <p><span className="brand-story__namecard-label">MBTI人格</span><span className="brand-story__namecard-value">:ISTP</span></p>
        <p><span className="brand-story__namecard-label">星座</span><span className="brand-story__namecard-value">:双子座</span></p>
      </div>

      {/* Slogan */}
      <div className="brand-story__slogan">
        <p className="brand-story__slogan-title">SLOGAN</p>
        <p className="brand-story__slogan-text">简于心 跃于行</p>
      </div>

      {/* Mascot photo 2 */}
      <div className="brand-story__mascot-photo brand-story__mascot-photo--2">
        <img src={`${B}mascot-photo-2.png`} alt="小卓吉祥物" />
      </div>

      {/* 性格.CHARACTER */}
      <div className="brand-story__trait-section" style={{ top: "calc(2465 * var(--design-unit))" }}>
        <h3 className="brand-story__trait-title">性格.CHARACTER</h3>
        <p className="brand-story__trait-code">
          <span className="brand-story__trait-white">{"> **print( "}</span>
          <span className="brand-story__trait-orange">沉稳/乐观</span>
        </p>
        <p className="brand-story__trait-code brand-story__trait-code--indent">
          <span className="brand-story__trait-orange">{"爱思考/注重逻辑 "}</span>
          <span className="brand-story__trait-white">{"}"}</span>
        </p>
      </div>

      {/* 能力.CAPACITY */}
      <div className="brand-story__trait-section" style={{ top: "calc(2597 * var(--design-unit))" }}>
        <h3 className="brand-story__trait-title">能力.CAPACITY</h3>
        <p className="brand-story__trait-code">
          <span className="brand-story__trait-white">{"> **print( "}</span>
          <span className="brand-story__trait-orange">频谱感知,波态切换</span>
        </p>
        <p className="brand-story__trait-code brand-story__trait-code--indent">
          <span className="brand-story__trait-orange">{"信号增益,频率调和 "}</span>
          <span className="brand-story__trait-white">{"}"}</span>
        </p>
      </div>

      {/* >>> */}
      <p className="brand-story__arrow">{">>>"}</p>

      {/* 年刊 */}
      <h2 className="brand-story__heading" style={{ top: "calc(2769 * var(--design-unit))" }}>年刊</h2>

      {/* Yearbook carousel */}
      <div className="brand-story__yearbook-carousel">
        <div className="brand-story__yearbook-card">
          <div className="brand-story__yearbook-cover">
            <img src={`${B}yearbook-2025.png`} alt="时间的刻度" />
            <button className="brand-story__yearbook-btn" type="button">点击阅读</button>
          </div>
          <p className="brand-story__yearbook-title">时间的刻度</p>
          <p className="brand-story__yearbook-sub">卓胜微 20 周年</p>
        </div>
      </div>
    </section>
  );
}
