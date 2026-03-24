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
    <article className="aa aa--primary" style={{ height: du(1263) }}>
      <span className="aa__date">03.27</span>

      <span className="aa__venue" style={{ top: du(72) }}>太湖饭店·吴越厅</span>

      {/* Time column — Figma y relative to card top */}
      <T y={110}>8:30</T>
      <T y={154}>09:00-09:47</T>
      <T y={290}>09:50-10:37</T>
      <T y={425}>10:40-11:27</T>
      <T y={560}>11:27-11:30</T>
      <T y={604}>13:30前</T>
      <T y={679}>13:30-13:45</T>
      <T y={725}>13:45-14:30</T>
      <T y={769}>14:30-15:45</T>
      <T y={889}>15:45-16:30</T>
      <T y={1009}>16:30-16:50</T>
      <T y={1054}>17:00-18:30</T>
      <T y={1159}>18:30-20:30</T>

      {/* Description column (right, single flowing text block) */}
      <div className="aa__body">
        <p className="aa__b">签到</p>
        <S />
        <S s={12} />

        <p className="aa__b">圆桌论坛1</p>
        <S />
        <p className="aa__i">AI硬件的本质与未来</p>
        <p className="aa__i">嘉宾：莫子皓（Mist 创始人&amp;CEO）</p>
        <p className="aa__i">陈康达（光帆科技联合创始人）</p>
        <p className="aa__r">5年后最具代表性的AI硬件会是什么形态？</p>
        <p className="aa__r">它会和今天的产品有什么本质不同？</p>
        <S /><S />

        <p className="aa__b">圆桌论坛2</p>
        <S />
        <p className="aa__i">OpenClaw与新范式</p>
        <p className="aa__i">嘉宾：小声比比（公号头部 AI博主）</p>
        <p className="aa__i">知县（Agent 训练师 | Lay2 Tech 创始人）</p>
        <p className="aa__r">OpenClaw可以操作文件系统、执行命令、控制浏览器</p>
        <p className="aa__r">社区是如何平衡"能力"和"安全"的？</p>
        <S /><S />

        <p className="aa__b">圆桌论坛3</p>
        <S />
        <p className="aa__i">模型战争与生态格局</p>
        <p className="aa__i">嘉宾：刘罡（阿尔法公社合伙人）</p>
        <p className="aa__i"> 刘知远（面壁智能联合创始人）</p>
        <p className="aa__r">现在入局AI赛道，最大的机会在哪里？</p>
        <p className="aa__r">第一个真正的杀手级应用会出现在什么场景？</p>
        <S /><S />

        <p className="aa__h">闭幕致辞</p>
        <S s={12} />
        <S />

        <p className="aa__b">卓胜微20周年特展</p>
        <p className="aa__r">通过产品、技术与重要节点，</p>
        <p className="aa__r">回望卓胜微二十年的成长轨迹。</p>
        <S />
        <S s={12} />

        <p className="aa__b">无锡地方领导及行业协会领导致辞</p>
        <S />
        <S s={12} />

        <p className="aa__b">卓胜微创始人演讲</p>
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

        <p className="aa__b">主题演讲</p>
        <S s={12} />
        <p className="aa__i">穿越风云：贸易战与AI时代下的全球资本浪潮</p>
        <p className="aa__i">嘉宾：高盛亚洲（除日本）股票资本市场</p>
        <p className="aa__i">主管、董事总经理 王亚军</p>
        <p className="aa__r">在全球产业格局重塑的背景下，</p>
        <p className="aa__r">观察科技企业与资本市场的长期趋势。</p>
        <S s={12} />

        <p className="aa__b">战略揭幕</p>
        <S s={12} />
        <S s={12} />

        <p className="aa__b">文化走廊</p>
        <S s={12} />
        <p className="aa__i">民谣</p>
        <p className="aa__i"> 拉丁舞</p>
        <p className="aa__i">三重奏</p>
        <S s={12} /><S s={12} />

        <p className="aa__b">晚宴</p>
        <S s={12} />
        <p className="aa__i">《无锡景》 地方歌舞表演</p>
        <p className="aa__i">《时间的刻度》纪录短片</p>
        <p className="aa__i">卓胜微乐队表演</p>
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
