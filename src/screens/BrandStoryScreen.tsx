import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

const seals = [
  { img: `${B}char-qin.svg`, motto: "以 勤 致 胜    奋 斗 为 本", power: "行          动          力" },
  { img: `${B}char-zhuo.svg`, motto: "拙 朴 求 进    长 期 主 义", power: "专          注          力" },
  { img: `${B}char-xin.svg`, motto: "信 而 向 善    以 信 立 企", power: "信          任          力" },
  { img: `${B}char-he.svg`, motto: "和 融 共 促    协 同 共 生", power: "协          同          力" },
];

const yearbooks = [
  { cover: `${B}yearbook-2025.png`, title: "时间的刻度", sub: "卓胜微 20 周年" },
  { cover: `${B}yearbook-2024.png`, title: "在这里度过有为的年展", sub: "2024—担当、突围、向善" },
  { cover: `${B}yearbook-2023.png`, title: "在这里遇见有为的年轻", sub: "2023—芯途探索" },
  { cover: `${B}yearbook-2022.png`, title: "在这里遇见有为的年轻", sub: "2022—星河漫漫" },
];

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      {/* ---- Header background strip (100px) ---- */}
      <div className="bs__header-bg" aria-hidden="true">
        <img src={designAssets.eventBackdrop} alt="" />
      </div>

      {/* ---- Header logo ---- */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* ---- Decorative orange vectors ---- */}
      <img className="bs__deco bs__deco--1" src={`${B}deco-vector-1.svg`} alt="" aria-hidden="true" />
      <img className="bs__deco bs__deco--2" src={`${B}deco-vector-2.svg`} alt="" aria-hidden="true" />
      <img className="bs__deco bs__deco--3" src={`${B}deco-vector-3.svg`} alt="" aria-hidden="true" />

      {/* ======== 品牌背景 Section ======== */}
      <h2 className="bs__title bs__title--bg">品牌背景</h2>
      <div className="bs__code">
        <p className="bs__code-line bs__code-line--brace-open">{"{"}</p>
        <p className="bs__code-line bs__code-line--name">
          <span className="bs__w">"Brand Name" : Maxscend</span>
        </p>
        <p className="bs__code-line bs__code-line--tag1">
          <span className="bs__o">#卓胜微</span>
        </p>
        <p className="bs__code-line bs__code-line--slogan-key">
          <span className="bs__w">"Brand slogan" </span>
        </p>
        <p className="bs__code-line bs__code-line--slogan-val">
          <span className="bs__o">探索物理资源的边界</span>
        </p>
        <p className="bs__code-line bs__code-line--core-key">
          <span className="bs__w">"Spiritual core"</span>
        </p>
        <p className="bs__code-line bs__code-line--core-val">
          <span className="bs__o">#精神核心</span>
        </p>
        <p className="bs__code-line bs__code-line--brace-close">{"}"}</p>
      </div>

      {/* ======== 品牌精神 Section ======== */}
      <h2 className="bs__title bs__title--spirit">品牌精神</h2>
      <div className="bs__seals">
        {seals.map((s, i) => (
          <div key={i} className={`bs__seal bs__seal--${i}`}>
            <img className="bs__seal-img" src={s.img} alt="" aria-hidden="true" />
            <p className="bs__seal-motto">{s.motto}</p>
            <p className="bs__seal-power">{s.power}</p>
          </div>
        ))}
      </div>

      {/* ======== IP介绍 Section ======== */}
      <h2 className="bs__title bs__title--ip">IP介绍</h2>

      {/* Mascot photo 1 */}
      <div className="bs__mascot1">
        <img src={`${B}mascot-photo-1.png`} alt="小卓吉祥物" />
      </div>

      {/* Mascot description - code print statements */}
      <div className="bs__print">
        <p><span className="bs__o">{">"} **print("我是小卓。")</span></p>
        <p>
          <span className="bs__o">
            {"                         >"} **print("我是卓胜微技术灵魂
          </span>
        </p>
        <p>
          <span className="bs__o">
            {"                                                           "}的感性表达。")
          </span>
        </p>
        <p><span className="bs__o">{">"} **print("我的使命是:</span></p>
        <p>
          <span className="bs__o">
            {"                         "}在探索物理资源边界的旅途中，守护每一次可靠且温暖的连接。")
          </span>
        </p>
      </div>

      {/* Character info */}
      <div className="bs__char-info">
        <p><span className="bs__w">名字</span><span className="bs__o">:小卓(simjo)</span></p>
        <p><span className="bs__w">MBTI人格</span><span className="bs__o">:ISTP</span></p>
        <p><span className="bs__w">星座</span><span className="bs__o">:双子座</span></p>
      </div>

      {/* SLOGAN */}
      <div className="bs__slogan">
        <p className="bs__slogan-label">SLOGAN</p>
        <p className="bs__slogan-text">简于心 跃于行</p>
      </div>

      {/* Mascot photo 2 */}
      <div className="bs__mascot2">
        <img src={`${B}mascot-photo-2.png`} alt="小卓吉祥物" />
      </div>

      {/* 性格.CHARACTER */}
      <div className="bs__trait bs__trait--char">
        <p className="bs__trait-title">性格.CHARACTER</p>
        <p className="bs__trait-line">
          <span className="bs__w">{">"} **print( </span>
          <span className="bs__o">沉稳/乐观  </span>
        </p>
        <p className="bs__trait-line2">
          <span className="bs__o">爱思考/注重逻辑   </span>
          <span className="bs__w">{" }"}</span>
        </p>
      </div>

      {/* 能力.CAPACITY */}
      <div className="bs__trait bs__trait--cap">
        <p className="bs__trait-title">能力.CAPACITY</p>
        <p className="bs__trait-line">
          <span className="bs__w">{">"} **print( </span>
          <span className="bs__o">频谱感知,波态切换     </span>
        </p>
        <p className="bs__trait-line2">
          <span className="bs__o">信号增益,频率调和 </span>
          <span className="bs__w">{"}"}</span>
        </p>
      </div>

      {/* >>> marker */}
      <p className="bs__prompt">{">>>"}</p>

      {/* Closing brace for IP section */}
      <p className="bs__brace-close">{"}"}</p>

      {/* ======== 年刊 Section ======== */}
      <h2 className="bs__title bs__title--yearbook">年刊</h2>
      <div className="bs__yearbook-carousel">
        {yearbooks.map((book, i) => (
          <div key={i} className="bs__yearbook-card">
            <div className="bs__yearbook-cover">
              <img src={book.cover} alt={book.title} />
              <button className="bs__yearbook-btn" type="button">点击阅读</button>
            </div>
            <p className="bs__yearbook-title">{book.title}</p>
            <p className="bs__yearbook-sub">{book.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
