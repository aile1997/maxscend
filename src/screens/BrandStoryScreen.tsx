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
      {/* Decorative vectors */}
      <img className="brand-story__deco brand-story__deco--1" src={`${B}deco-vector-1.svg`} alt="" aria-hidden="true" />
      <img className="brand-story__deco brand-story__deco--2" src={`${B}deco-vector-2.svg`} alt="" aria-hidden="true" />
      <img className="brand-story__deco brand-story__deco--3" src={`${B}deco-vector-3.svg`} alt="" aria-hidden="true" />

      {/* Header logo */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* ── 品牌背景 ── */}
      <h2 className="brand-story__heading" style={{ top: "calc(157 * var(--design-unit))" }}>品牌背景</h2>
      <div className="brand-story__json">
        <p>{"{"}</p>
        <p className="brand-story__json--i1">"Brand Name" : Maxscend</p>
        <p className="brand-story__json--i1 brand-story__json--orange">#卓胜微</p>
        <p className="brand-story__json--i1">"Brand slogan"</p>
        <p className="brand-story__json--i2 brand-story__json--orange">探索物理资源的边界</p>
        <p className="brand-story__json--i2">"Spiritual core"</p>
        <p className="brand-story__json--i2 brand-story__json--orange">#精神核心</p>
        <p className="brand-story__json--right">{"}"}</p>
      </div>

      {/* ── 品牌精神 ── */}
      <h2 className="brand-story__heading" style={{ top: "calc(502 * var(--design-unit))" }}>品牌精神</h2>
      <div className="brand-story__spirit-grid">
        {[
          { svg: "char-qin.svg", alt: "勤", motto: "以 勤 致 胜    奋 斗 为 本", power: "行          动          力" },
          { svg: "char-zhuo.svg", alt: "拙", motto: "拙 朴 求 进    长 期 主 义", power: "专          注          力" },
          { svg: "char-xin.svg", alt: "信", motto: "信 而 向 善    以 信 立 企", power: "信          任          力" },
          { svg: "char-he.svg", alt: "和", motto: "和 融 共 促    协 同 共 生", power: "协          同          力" },
        ].map((c) => (
          <div key={c.alt} className="brand-story__spirit-item">
            <img className="brand-story__spirit-char" src={`${B}${c.svg}`} alt={c.alt} />
            <p className="brand-story__spirit-motto">{c.motto}</p>
            <p className="brand-story__spirit-power">{c.power}</p>
          </div>
        ))}
      </div>

      {/* ── IP介绍 ── */}
      <h2 className="brand-story__heading brand-story__heading--black" style={{ top: "calc(984 * var(--design-unit))" }}>IP介绍</h2>

      <div className="brand-story__mascot-photo brand-story__mascot-photo--1">
        <img src={`${B}mascot-photo-1.png`} alt="小卓吉祥物" />
      </div>

      <pre className="brand-story__ip-desc">{`> **print("我是小卓。")
                         > **print("我是卓胜微技术灵魂
                                                           的感性表达。")
> **print("我的使命是:
                         在探索物理资源边界的旅途中，守护每一次可靠且温暖的连接。"`}</pre>

      {/* Namecard + Slogan side by side */}
      <div className="brand-story__info-row">
        <div className="brand-story__namecard">
          <p><span className="brand-story__nc-label">名字</span><span className="brand-story__nc-val">:小卓(simjo)</span></p>
          <p><span className="brand-story__nc-label">MBTI人格</span><span className="brand-story__nc-val">:ISTP</span></p>
          <p><span className="brand-story__nc-label">星座</span><span className="brand-story__nc-val">:双子座</span></p>
        </div>
        <div className="brand-story__slogan">
          <p className="brand-story__slogan-title">SLOGAN</p>
          <p className="brand-story__slogan-text">简于心 跃于行</p>
        </div>
      </div>

      <div className="brand-story__mascot-photo brand-story__mascot-photo--2">
        <img src={`${B}mascot-photo-2.png`} alt="小卓吉祥物" />
      </div>

      {/* ── 性格/爱好/造型 横向滑动 ── */}
      <div className="brand-story__traits-carousel">
        {/* Card 1: 性格 + 能力 */}
        <div className="brand-story__traits-card">
          <h3 className="brand-story__tc-title">性格.CHARACTER</h3>
          <p className="brand-story__tc-code">
            <span className="brand-story__tc-w">{"> **print( "}</span>
            <span className="brand-story__tc-o">沉稳/乐观</span>
          </p>
          <p className="brand-story__tc-code brand-story__tc-code--i">
            <span className="brand-story__tc-o">{"爱思考/注重逻辑 "}</span>
            <span className="brand-story__tc-w">{"}"}</span>
          </p>

          <h3 className="brand-story__tc-title brand-story__tc-title--mt">能力.CAPACITY</h3>
          <p className="brand-story__tc-code">
            <span className="brand-story__tc-w">{"> **print( "}</span>
            <span className="brand-story__tc-o">频谱感知,波态切换</span>
          </p>
          <p className="brand-story__tc-code brand-story__tc-code--i">
            <span className="brand-story__tc-o">{"信号增益,频率调和 "}</span>
            <span className="brand-story__tc-w">{"}"}</span>
          </p>
          <p className="brand-story__tc-arrow">{">>>"}</p>
        </div>

        {/* Card 2: 爱好 */}
        <div className="brand-story__traits-card">
          <h3 className="brand-story__tc-title">爱好.CHARACTER</h3>
          <p className="brand-story__tc-code">
            <span className="brand-story__tc-w">{"> **print( "}</span>
            <span className="brand-story__tc-o">监听来自深空的无线电</span>
          </p>
          <p className="brand-story__tc-body">静默音乐会</p>
          <p className="brand-story__tc-body brand-story__tc-body--i">在纳米尺度的芯片迷宫中"散步"</p>
          <p className="brand-story__tc-body">将棘手的通信难题</p>
          <p className="brand-story__tc-body brand-story__tc-body--i">当作最高级的解密游戏来享受</p>
          <p className="brand-story__tc-body">观察并偶尔引导一个凌乱的无线网络，</p>
          <p className="brand-story__tc-body brand-story__tc-body--i">
            {"变得井然有序、流畅自如 "}
            <span className="brand-story__tc-w">{")"}</span>
          </p>
        </div>

        {/* Card 3: 造型 */}
        <div className="brand-story__traits-card">
          <h3 className="brand-story__tc-title">造型.CHARACTER</h3>
          <p className="brand-story__tc-code">
            <span className="brand-story__tc-w">{"> **print( "}</span>
            <span className="brand-story__tc-o">可变形的护目镜，</span>
          </p>
          <p className="brand-story__tc-body brand-story__tc-body--i">形态多变喜欢用来当代码显示屏</p>
          <p className="brand-story__tc-body">头发将作为该 "聚合" 形态的外显载体，</p>
          <p className="brand-story__tc-body brand-story__tc-body--i">并随着角色状态而改变</p>
        </div>
      </div>

      {/* ── 年刊 横向滑动 ── */}
      <h2 className="brand-story__heading brand-story__heading--abs-yearbook">年刊</h2>
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
