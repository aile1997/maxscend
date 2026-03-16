import { EventBackdrop } from "../components/EventBackdrop";
import { copy } from "../content";
import { designAssets } from "../designAssets";

const du = (n: number) => `calc(${n} * var(--design-unit))`;

function T({ y, children }: { y: number; children: React.ReactNode }) {
  return <span className="aa__time" style={{ top: du(y) }}>{children}</span>;
}

/* Spacer line — font-size affects how much height the &nbsp; occupies (line-height is always 15du) */
function S({ s = 10 }: { s?: 10 | 12 }) {
  return <p className={s === 12 ? "aa__s12" : "aa__s10"}>&nbsp;</p>;
}

function PrimaryCard() {
  return (
    <article className="aa aa--primary">
      <span className="aa__date">03.27</span>

      <span className="aa__venue" style={{ top: du(66) }}>太湖饭店·吴越厅</span>

      {/* Time column (left, absolutely positioned) */}
      <T y={100}>09:00-09:20</T>
      <T y={219}>09:25-10:05</T>
      <T y={355}>10:05-10:20</T>
      <T y={404}>10:20-10:40</T>
      <T y={524}>10:45-11:30</T>

      {/* Divider */}
      <span className="aa__line" style={{ top: du(677) }} />
      <span className="aa__venue" style={{ top: du(708) }}>太湖饭店·五湖厅</span>

      <T y={744}>14:00前</T>
      <T y={820}>14:00-14:20</T>
      <T y={865}>14:20-15:10</T>
      <T y={939}>15:10-16:10</T>
      <T y={1059}>16:10-16:30</T>
      <T y={1104}>16:30-17:20</T>
      <T y={1209}>17:20-17:30</T>
      <T y={1239}>17:30-17:40</T>

      <span className="aa__line" style={{ top: du(1307) }} />
      <span className="aa__venue" style={{ top: du(1339) }}>太湖饭店·吴越厅</span>

      <T y={1375}>18:30-18:40</T>
      <T y={1420}>18:40-21:00</T>

      {/* Description column (right, single flowing text block) */}
      <div className="aa__body">
        <p className="aa__b">主题演讲</p>
        <S />
        <p className="aa__i">AI 硬件的 PMF 之路：从录音卡片到全模态输入</p>
        <p className="aa__i">嘉宾：莫子皓（Plaud中国区 CEO）</p>
        <p className="aa__r">一款 150 美元的录音卡片如何卖出超 100 万台？</p>
        <p className="aa__r">从真实产品案例出发，探讨AI硬件的产品逻辑与未来机会。</p>
        <S /><S />

        <p className="aa__b">圆桌论坛</p>
        <S />
        <p className="aa__i">硬件之躯——打造 AI 原生时代的智能新物种</p>
        <p className="aa__i">主持人 张小珺</p>
        <p className="aa__i">嘉宾：陈康达（光帆科技联创 &amp; CTO）</p>
        <p className="aa__i">杨波（Haivivi 合伙人）</p>
        <p className="aa__i">知县（独立开发者 / OwliaBot）</p>
        <S s={12} /><S s={12} />

        <p className="aa__h">茶歇</p>
        <S /><S />

        <p className="aa__h">主题演讲</p>
        <S />
        <p className="aa__i">指令的艺术——当 Prompt 成为硬件的遥控器</p>
        <p className="aa__i">嘉宾：李继刚（Prompt 布道师）</p>
        <p className="aa__r">当AI Agent进入现实世界，</p>
        <p className="aa__r">硬件将如何成为连接智能与物理世界的全新入口。</p>
        <S />
        <S s={12} />

        <p className="aa__h">圆桌论坛</p>
        <S />
        <p className="aa__i">生态之思——Openclaw 引爆的商业新范式</p>
        <p className="aa__i">主持人：张小珺</p>
        <p className="aa__i">嘉宾：刘罡（阿尔法公社合伙人）</p>
        <p className="aa__i">刘知远（面壁智能联合创始人）</p>
        <p className="aa__r">在AI Agent时代，自然语言正逐渐成为新的"操作系统"，Prompt设计正在重新定义人与设备的交互方式。</p>
        <S /><S />
        <S s={12} /><S s={12} /><S s={12} /><S s={12} /><S s={12} />

        <p className="aa__b">卓胜微20周年特展</p>
        <p className="aa__r">通过产品、技术与重要节点，</p>
        <p className="aa__r">回望卓胜微二十年的成长轨迹。</p>
        <S />
        <S s={12} />

        <p className="aa__b">无锡地方领导及行业协会领导致辞</p>
        <S />
        <S s={12} />

        <p className="aa__b">主题演讲</p>
        <S />
        <p className="aa__i">卓胜微创始人演讲</p>
        <S />
        <S s={12} />

        <p className="aa__b">主题演讲</p>
        <S />
        <p className="aa__i">AI与爱</p>
        <p className="aa__i">嘉宾：华东师范大学紫江特聘教授-刘擎</p>
        <p className="aa__r">在技术迅速发展的时代，</p>
        <p className="aa__r">重新思考人与技术、理性与情感之间的关系。</p>
        <S />
        <S s={12} />

        <p className="aa__b">茶歇</p>
        <S s={12} />
        <S s={12} />

        <p className="aa__b">主题演讲</p>
        <S s={12} />
        <p className="aa__i">穿越风云：贸易战与AI时代下的全球资本浪潮</p>
        <p className="aa__i">嘉宾：高盛亚洲（除日本）股票资本市场总经理 王亚军</p>
        <p className="aa__r">在全球产业格局重塑的背景下，</p>
        <p className="aa__r">观察科技企业与资本市场的长期趋势。</p>
        <S s={12} />

        <p className="aa__b">卓胜微创始人总结</p>
        <S s={12} />

        <p className="aa__b">无锡城市文化演出</p>
        <p className="aa__r">《无锡景》</p>
        <S /><S />
        <S s={12} /><S s={12} /><S s={12} /><S s={12} /><S s={12} />

        <p className="aa__b">卓胜微20周年纪录短片</p>
        <S />
        <S s={12} />

        <p className="aa__b">晚宴</p>
      </div>
    </article>
  );
}

function SecondaryCard026() {
  return (
    <article className="agenda-abs-slide">
      <span className="aa__date">03.26</span>
      <span className="aa__venue" style={{ top: du(70) }}>芯卓工厂</span>
      <T y={104}>14:30-15:30</T>
      <T y={149}>15:30-16:40</T>
      <span className="aa__line" style={{ top: du(215) }} />
      <span className="aa__venue" style={{ top: du(246) }}>管社山庄</span>
      <T y={287}>17:30-18:50</T>
      <T y={343}>19:00-20:00</T>

      <div className="aa__body" style={{ top: du(105) }}>
        <p className="aa__b">参观卓胜微展厅及芯卓园区</p>
        <S /><S />
        <p className="aa__b">合作伙伴启幕仪式</p>
        <p className="aa__m">与合作伙伴共同种下友谊树</p>
        <S s={12} /><S s={12} /><S s={12} />
        <S /><S /><S /><S />

        <p className="aa__h">太湖明珠冷餐会</p>
        <p className="aa__r">太湖之畔交流相聚</p>
        <S /><S />

        <p className="aa__h">鼋头渚游船赏樱</p>
        <p className="aa__r">夜游太湖樱花胜地</p>
      </div>
    </article>
  );
}

function SecondaryCard028() {
  return (
    <article className="agenda-abs-slide">
      <span className="aa__date">03.28</span>
      <span className="aa__venue" style={{ top: du(70) }}>芯卓园区</span>
      <T y={104}>10:00-10:30</T>
      <T y={149}>10:30-11:30</T>

      <div className="aa__body" style={{ top: du(105) }}>
        <p className="aa__b">参观卓胜微展厅及芯卓园区</p>
        <S /><S />
        <p className="aa__b">合作伙伴启幕仪式</p>
        <p className="aa__m">与合作伙伴共同种下友谊树</p>
      </div>
    </article>
  );
}

export function AgendaScreen() {
  return (
    <section className="screen agenda-screen-v2">
      <EventBackdrop />
      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />
      <h1 className="screen__section-title agenda-screen-v2__main-title">{copy.mainVenue}</h1>
      <PrimaryCard />
      <h2 className="screen__section-title agenda-screen-v2__sub-title">{copy.subVenue}</h2>
      <div className="agenda-secondary-carousel">
        <SecondaryCard026 />
        <SecondaryCard028 />
      </div>
    </section>
  );
}
