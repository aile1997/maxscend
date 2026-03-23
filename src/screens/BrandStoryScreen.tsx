import type { CSSProperties } from "react";
import { designAssets } from "../designAssets";

const B = `${import.meta.env.BASE_URL}brand-assets/`;

/** Convert Figma px to design-unit scaled value */
const u = (n: number) => `calc(${n} * var(--design-unit))`;

/** Absolute position helper — maps Figma coordinates directly */
const pos = (left: number, top: number, extra?: CSSProperties): CSSProperties => ({
  position: "absolute",
  left: u(left),
  top: u(top),
  ...extra,
});

/** Centered text (Figma uses -translateX(50%) with left = center point) */
const cpos = (left: number, top: number, extra?: CSSProperties): CSSProperties => ({
  position: "absolute",
  left: u(left),
  top: u(top),
  transform: "translateX(-50%)",
  textAlign: "center",
  ...extra,
});

const yearbooks = [
  { cover: `${B}yearbook-2025.png`, title: "时间的刻度", sub: "卓胜微 20 周年" },
  { cover: `${B}yearbook-2024.png`, title: "在这里度过有为的年展", sub: "2024—担当、突围、向善" },
  { cover: `${B}yearbook-2023.png`, title: "在这里遇见有为的年轻", sub: "2023—芯途探索" },
  { cover: `${B}yearbook-2022.png`, title: "在这里遇见有为的年轻", sub: "2022—星河漫漫" },
];

export function BrandStoryScreen() {
  return (
    <section className="screen brand-story-screen">
      {/* Header bg strip 100px */}
      <div className="bs-hdr"><img src={designAssets.eventBackdrop} alt="" /></div>

      {/* Logo */}
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      {/* 3 decorative vectors */}
      <img className="bs-v bs-v1" src={`${B}vector-1.svg`} alt="" aria-hidden="true" />
      <img className="bs-v bs-v2" src={`${B}vector-2.svg`} alt="" aria-hidden="true" />
      <img className="bs-v bs-v3" src={`${B}vector-3.svg`} alt="" aria-hidden="true" />

      {/* ===== 品牌背景 ===== Figma exact positions */}
      <p className="bs-t" style={pos(37, 216)}>品牌背景</p>
      <p className="bs-c" style={cpos(41.5, 255)}>{"{"}</p>
      <p className="bs-c" style={cpos(157.5, 282)}>"Brand Name" : Maxscend</p>
      <p className="bs-c bs-orange" style={cpos(77, 305)}>#卓胜微</p>
      <p className="bs-c" style={cpos(108.5, 368)}>"Brand slogan" </p>
      <p className="bs-c bs-orange" style={cpos(122, 393)}>探索物理资源的边界</p>
      <p className="bs-c" style={cpos(296, 448)}>"Spiritual core"</p>
      <p className="bs-c bs-orange" style={cpos(328, 472)}>#精神核心</p>
      <p className="bs-c" style={cpos(383.5, 498)}>{"}"}</p>

      {/* ===== 品牌精神 ===== */}
      <p className="bs-t" style={pos(37, 561)}>品牌精神</p>

      {/* 勤 */}
      <img style={pos(35.1, 603, { width: u(138), height: u(141.15), zIndex: 1 })} src={`${B}seal-qin.svg`} alt="" />
      <p className="bs-sm" style={cpos(105, 640.1, { width: u(144) })}>以 勤 致 胜    奋 斗 为 本</p>
      <p className="bs-pw" style={cpos(105.5, 736.1)}>{"行          动          力"}</p>

      {/* 拙 */}
      <img style={pos(229.7, 601, { width: u(138.6), height: u(139.95), zIndex: 1 })} src={`${B}seal-zhuo.svg`} alt="" />
      <p className="bs-sm" style={cpos(299.55, 636.1)}>拙 朴 求 进    长 期 主 义</p>
      <p className="bs-pw" style={cpos(304.3, 736.1)}>{"专          注          力"}</p>

      {/* 信 */}
      <img style={pos(38.96, 803, { width: u(138.69), height: u(141.6), zIndex: 1 })} src={`${B}seal-xin.svg`} alt="" />
      <p className="bs-sm" style={cpos(106.5, 838.55)}>信 而 向 善    以 信 立 企</p>
      <p className="bs-pw" style={cpos(111.25, 938.55)}>{"信          任          力"}</p>

      {/* 和 */}
      <img style={pos(229.75, 804.65, { width: u(134.4), height: u(139.35), zIndex: 1 })} src={`${B}seal-he.svg`} alt="" />
      <p className="bs-sm" style={cpos(299.45, 838.55)}>和 融 共 促    协 同 共 生</p>
      <p className="bs-pw" style={cpos(304.2, 938.55)}>{"协          同          力"}</p>

      {/* ===== IP介绍 ===== */}
      <p className="bs-t" style={pos(33, 1043)}>IP介绍</p>

      {/* Mascot photo 1: Figma inset 31.79%/8.31%/55.12%/8.72% of 402×3412 */}
      <div className="bs-mascot1"><img src={`${B}mascot-1-figma.png`} alt="小卓" /></div>

      {/* Print statements: Figma left=23, top=1666, w=355 */}
      <div className="bs-print">
        <p>{">"} **print("我是小卓。")</p>
        <p>{"                         >"} **print("我是卓胜微技术灵魂</p>
        <p>{"                                                           "}的感性表达。")</p>
        <p>{">"} **print("我的使命是:</p>
        <p>{"                         "}在探索物理资源边界的旅途中，守护每一次可靠且温暖的连接。"</p>
      </div>

      {/* Character info: Figma inset 53.75%/55.97%/44.01%/7.71% → top=1834, left=31, w=146 */}
      <div className="bs-info">
        <p><span className="bs-w">名字</span><span className="bs-o">:小卓(simjo)</span></p>
        <p><span className="bs-w">MBTI人格</span><span className="bs-o">:ISTP</span></p>
        <p><span className="bs-w">星座</span><span className="bs-o">:双子座</span></p>
      </div>

      {/* SLOGAN: Figma inset 53.55%/8.46%/44.62%/63.18% → top=1827, left=254, w=114 */}
      <div className="bs-slogan">
        <p className="bs-slogan-l">SLOGAN</p>
        <p className="bs-slogan-t">简于心 跃于行</p>
      </div>

      {/* Mascot photo 2: Figma left=9, top=2017, size=384 */}
      <div className="bs-mascot2"><img src={`${B}mascot-2-figma.png`} alt="小卓" /></div>

      {/* 性格.CHARACTER — Figma exact positions */}
      <p className="bs-28" style={pos(31, 2383)}>性格.CHARACTER</p>
      <p className="bs-18" style={pos(31, 2436)}>
        <span className="bs-w">{">"} **print( </span><span className="bs-o">沉稳/乐观  </span>
      </p>
      <p className="bs-18" style={pos(179, 2460)}>
        <span className="bs-o">爱思考/注重逻辑   </span><span className="bs-w">{" }"}</span>
      </p>

      {/* 能力.CAPACITY */}
      <p className="bs-28" style={pos(31, 2507)}>能力.CAPACITY</p>
      <p className="bs-18" style={pos(31, 2561)}>
        <span className="bs-w">{">"} **print( </span><span className="bs-o">频谱感知,波态切换     </span>
      </p>
      <p className="bs-18" style={pos(221, 2584)}>
        <span className="bs-o">信号增益,频率调和 </span><span className="bs-w">{"}"}</span>
      </p>

      {/* >>> */}
      <p className="bs-18 bs-w" style={pos(350, 2635)}>{">>>"}</p>

      {/* ===== 年刊 ===== */}
      <p className="bs-t" style={pos(37, 2828)}>年刊</p>

      <div className="bs-yb-carousel">
        {yearbooks.map((book, i) => (
          <div key={i} className="bs-yb-card">
            <div className="bs-yb-cover">
              <img src={book.cover} alt={book.title} />
              <button className="bs-yb-btn" type="button">点击阅读</button>
            </div>
            <p className="bs-yb-title">{book.title}</p>
            <p className="bs-yb-sub">{book.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
