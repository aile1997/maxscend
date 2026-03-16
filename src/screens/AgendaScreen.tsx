import { EventBackdrop } from "../components/EventBackdrop";
import { copy } from "../content";
import { designAssets } from "../designAssets";

const du = (n: number) => `calc(${n} * var(--design-unit))`;

function T({ y, children }: { y: number; children: React.ReactNode }) {
  return <span className="agenda-abs__time" style={{ top: du(y) }}>{children}</span>;
}

function D({ y, children }: { y: number; children: React.ReactNode }) {
  return <div className="agenda-abs__desc" style={{ top: du(y) }}>{children}</div>;
}

function PrimaryCard() {
  return (
    <article className="agenda-abs agenda-abs--primary">
      <span className="agenda-abs__date">03.27</span>

      <span className="agenda-abs__venue" style={{ top: du(66) }}>太湖饭店·吴越厅</span>

      <T y={100}>09:00-09:20</T>
      <D y={100}>
        <b>主题演讲</b>
        <i>AI 硬件的 PMF 之路：从录音卡片到全模态输入</i>
        <em>嘉宾：莫子皓（Plaud中国区 CEO）</em>
        <small>一款 150 美元的录音卡片如何卖出超 100 万台？</small>
        <small>从真实产品案例出发，探讨AI硬件的产品逻辑与未来机会。</small>
      </D>

      <T y={219}>09:25-10:05</T>
      <D y={219}>
        <b>圆桌论坛</b>
        <i>硬件之躯——打造 AI 原生时代的智能新物种</i>
        <em>主持人 张小珺</em>
        <em>嘉宾：陈康达（光帆科技联创 &amp; CTO）</em>
        <em>杨波（Haivivi 合伙人）</em>
        <em>知县（独立开发者 / OwliaBot）</em>
      </D>

      <T y={355}>10:05-10:20</T>
      <D y={355}><strong>茶歇</strong></D>

      <T y={404}>10:20-10:40</T>
      <D y={404}>
        <strong>主题演讲</strong>
        <i>指令的艺术——当 Prompt 成为硬件的遥控器</i>
        <em>嘉宾：李继刚（Prompt 布道师）</em>
        <small>当AI Agent进入现实世界，</small>
        <small>硬件将如何成为连接智能与物理世界的全新入口。</small>
      </D>

      <T y={524}>10:45-11:30</T>
      <D y={524}>
        <strong>圆桌论坛</strong>
        <i>生态之思——Openclaw 引爆的商业新范式</i>
        <em>主持人：张小珺</em>
        <em>嘉宾：刘罡（阿尔法公社合伙人）</em>
        <em>刘知远（面壁智能联合创始人）</em>
        <small>在AI Agent时代，自然语言正逐渐成为新的"操作系统"，Prompt设计正在重新定义人与设备的交互方式。</small>
      </D>

      <span className="agenda-abs__line" style={{ top: du(677) }} />

      <span className="agenda-abs__venue" style={{ top: du(708) }}>太湖饭店·五湖厅</span>

      <T y={744}>14:00前</T>
      <D y={744}>
        <b>卓胜微20周年特展</b>
        <small>通过产品、技术与重要节点，</small>
        <small>回望卓胜微二十年的成长轨迹。</small>
      </D>

      <T y={820}>14:00-14:20</T>
      <D y={820}><b>无锡地方领导及行业协会领导致辞</b></D>

      <T y={865}>14:20-15:10</T>
      <D y={865}>
        <b>主题演讲</b>
        <i>卓胜微创始人演讲</i>
      </D>

      <T y={939}>15:10-16:10</T>
      <D y={939}>
        <b>主题演讲</b>
        <i>AI与爱</i>
        <em>嘉宾：华东师范大学紫江特聘教授-刘擎</em>
        <small>在技术迅速发展的时代，</small>
        <small>重新思考人与技术、理性与情感之间的关系。</small>
      </D>

      <T y={1059}>16:10-16:30</T>
      <D y={1059}><b>茶歇</b></D>

      <T y={1104}>16:30-17:20</T>
      <D y={1104}>
        <b>主题演讲</b>
        <i>穿越风云：贸易战与AI时代下的全球资本浪潮</i>
        <em>嘉宾：高盛亚洲（除日本）股票资本市场总经理 王亚军</em>
        <small>在全球产业格局重塑的背景下，</small>
        <small>观察科技企业与资本市场的长期趋势。</small>
      </D>

      <T y={1209}>17:20-17:30</T>
      <D y={1209}><b>卓胜微创始人总结</b></D>

      <T y={1239}>17:30-17:40</T>
      <D y={1239}>
        <b>无锡城市文化演出</b>
        <small>《无锡景》</small>
      </D>

      <span className="agenda-abs__line" style={{ top: du(1307) }} />

      <span className="agenda-abs__venue" style={{ top: du(1339) }}>太湖饭店·吴越厅</span>

      <T y={1375}>18:30-18:40</T>
      <D y={1375}><b>卓胜微20周年纪录短片</b></D>

      <T y={1420}>18:40-21:00</T>
      <D y={1420}><b>晚宴</b></D>
    </article>
  );
}

function SecondaryCard026() {
  return (
    <article className="agenda-abs-slide">
      <span className="agenda-abs__date">03.26</span>

      <span className="agenda-abs__venue" style={{ top: du(70) }}>芯卓工厂</span>

      <T y={104}>14:30-15:30</T>
      <D y={104}><b>参观卓胜微展厅及芯卓园区</b></D>

      <T y={149}>15:30-16:40</T>
      <D y={149}>
        <b>合作伙伴启幕仪式</b>
        <cite>与合作伙伴共同种下友谊树</cite>
      </D>

      <span className="agenda-abs__line" style={{ top: du(215) }} />

      <span className="agenda-abs__venue" style={{ top: du(246) }}>管社山庄</span>

      <T y={287}>17:30-18:50</T>
      <D y={287}>
        <strong>太湖明珠冷餐会</strong>
        <small>太湖之畔交流相聚</small>
      </D>

      <T y={343}>19:00-20:00</T>
      <D y={343}>
        <strong>鼋头渚游船赏樱</strong>
        <small>夜游太湖樱花胜地</small>
      </D>
    </article>
  );
}

function SecondaryCard028() {
  return (
    <article className="agenda-abs-slide">
      <span className="agenda-abs__date">03.28</span>

      <span className="agenda-abs__venue" style={{ top: du(70) }}>芯卓园区</span>

      <T y={104}>10:00-10:30</T>
      <D y={104}><b>参观卓胜微展厅及芯卓园区</b></D>

      <T y={149}>10:30-11:30</T>
      <D y={149}>
        <b>合作伙伴启幕仪式</b>
        <cite>与合作伙伴共同种下友谊树</cite>
      </D>
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
