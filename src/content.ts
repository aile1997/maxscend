import type { AgendaDateBlock, ContactPerson, GuideVenue, NavItemDefinition } from "./types";

export const copy = {
  brandUpper: "MAXSCEND",
  brandLower: "maxscend",
  anniversary: "20th Anniversary",
  years: "YEARS",
  suffix: "TH",
  eventName: "\u5353\u80dc\u5fae\u5408\u4f5c\u4f19\u4f34\u5927\u4f1a",
  sloganStart: "\u7528\u7b80\u5355\u7684\u903b\u8f91",
  sloganEnd: "\u505a\u96be\u7684\u4e8b",
  sloganEnglish: ["Do difficult things", "with", "simple logic"],
  venue: "\u65e0\u9521\u00b7\u82af\u5353\u00b7\u592a\u6e56\u996d\u5e97",
  dateRange: "2026\u5e743\u670826\u65e5-3\u670827\u65e5",
  mainVenue: "\u4e3b\u4f1a\u573a",
  subVenue: "\u5206\u4f1a\u573a",
  emergencyContacts: "\u7d27\u6025\u8054\u7cfb\u4eba",
  feedbackEntry: "\u53cd\u9988\u5165\u53e3",
  feedbackPlaceholder: "\u63d0\u4ea4\u5efa\u8bae\u6216\u6295\u8bc9\uff08\u533f\u540d\uff09",
  feedbackSubmit: "\u786e\u8ba4\u63d0\u4ea4",
  callContact: "\u547c\u53eb\u8054\u7cfb\u4eba",
  navHome: "\u6d3b\u52a8\u9996\u9875",
  navAgenda: "\u65e5\u7a0b\u5b89\u6392",
  navStory: "\u54c1\u724c\u6545\u4e8b",
  navGuide: "\u73b0\u573a\u5bfc\u89c8",
  navContact: "\u8054\u7cfb\u6211\u4eec",
  storyPending: "\u54c1\u724c\u6545\u4e8b\u9875\u8bbe\u8ba1\u7a3f\u5f53\u524d\u672a\u540c\u6b65",
  feedbackEmpty: "\u8bf7\u5148\u586b\u5199\u53cd\u9988\u5185\u5bb9",
  feedbackDone: "\u53cd\u9988\u5df2\u8bb0\u5f55\uff0c\u540e\u7eed\u53ef\u63a5\u5165\u771f\u5b9e\u63d0\u4ea4\u63a5\u53e3",
  guideTitle: "\u6d3b\u52a8\u5730\u5740",
  guideFloorPlan: "\u6d3b\u52a8\u5e73\u9762\u56fe",
  guideCopyAddress: "\u590d\u5236\u5730\u5740",
  guideViewMap: "\u5728\u5730\u56fe\u4e0a\u67e5\u770b",
  addressCopied: "\u5730\u5740\u5df2\u590d\u5236",
  browserDomain: "figma.com",
} as const;

export const navItems: NavItemDefinition[] = [
  { id: "home", label: copy.navHome },
  { id: "agenda", label: copy.navAgenda },
  { id: "story", label: copy.navStory, disabled: true, message: copy.storyPending },
  { id: "guide", label: copy.navGuide },
  { id: "contact", label: copy.navContact },
];

export const mainVenueSchedule: AgendaDateBlock = {
  date: "03.27",
  sections: [
    {
      venue: "\u592a\u6e56\u996d\u5e97\u00b7\u5434\u8d8a\u5385",
      items: [
        {
          time: "09:00-09:20",
          title: "\u4e3b\u9898\u6f14\u8bb2",
          subtitle: "AI \u786c\u4ef6\u7684 PMF \u4e4b\u8def\uff1a\u4ece\u5f55\u97f3\u5361\u7247\u5230\u5168\u6a21\u6001\u8f93\u5165",
          detail: "\u5609\u5bbe\uff1a\u83ab\u5b50\u7693\uff08Plaud\u4e2d\u56fd\u533a CEO\uff09",
        },
        {
          time: "09:25-10:05",
          title: "\u5706\u684c\u8bba\u575b",
          subtitle: "\u786c\u4ef6\u4e4b\u8eaf\u2014\u2014\u6253\u9020 AI \u539f\u751f\u65f6\u4ee3\u7684\u667a\u80fd\u65b0\u7269\u79cd",
          detail: "\u4e3b\u6301\u4eba \u5f20\u5c0f\u73fa\n\u5609\u5bbe\uff1a\u9648\u5eb7\u8fbe\uff08\u5149\u5e06\u79d1\u6280\u8054\u521b & CTO\uff09\n\u6768\u6ce2\uff08Haivivi \u5408\u4f19\u4eba\uff09\n\u77e5\u53bf\uff08\u72ec\u7acb\u5f00\u53d1\u8005 / OwliaBot\uff09",
        },
        {
          time: "10:05-10:20",
          title: "\u8336\u6b47",
        },
        {
          time: "10:20-10:40",
          title: "\u4e3b\u9898\u6f14\u8bb2",
          subtitle: "\u6307\u4ee4\u7684\u827a\u672f\u2014\u2014\u5f53 Prompt \u6210\u4e3a\u786c\u4ef6\u7684\u9065\u63a7\u5668",
          detail: "\u5609\u5bbe\uff1a\u674e\u7ee7\u521a\uff08Prompt \u5e03\u9053\u5e08\uff09",
        },
        {
          time: "10:45-11:30",
          title: "\u5706\u684c\u8bba\u575b",
          subtitle: "\u751f\u6001\u4e4b\u601d\u2014\u2014Openclaw \u5f15\u7206\u7684\u5546\u4e1a\u65b0\u8303\u5f0f",
          detail: "\u4e3b\u6301\u4eba\uff1a\u5f20\u5c0f\u73fa\n\u5609\u5bbe\uff1a\u5218\u7f61\uff08\u963f\u5c14\u6cd5\u516c\u793e\u5408\u4f19\u4eba\uff09\n\u5218\u77e5\u8fdc\uff08\u9762\u58c1\u667a\u80fd\u8054\u5408\u521b\u59cb\u4eba\uff09",
        },
      ],
    },
    {
      venue: "\u592a\u6e56\u996d\u5e97\u00b7\u4e94\u6e56\u5385",
      items: [
        {
          time: "14:00\u524d",
          title: "\u5353\u80dc\u5fae20\u5468\u5e74\u7279\u5c55",
          detail: "\u901a\u8fc7\u4ea7\u54c1\u3001\u6280\u672f\u4e0e\u91cd\u8981\u8282\u70b9\uff0c\u56de\u671b\u5353\u80dc\u5fae\u4e8c\u5341\u5e74\u7684\u6210\u957f\u8f68\u8ff9\u3002",
        },
        {
          time: "14:00-14:20",
          title: "\u65e0\u9521\u5730\u65b9\u9886\u5bfc\u53ca\u884c\u4e1a\u534f\u4f1a\u9886\u5bfc\u81f4\u8f9e",
        },
        {
          time: "14:20-15:10",
          title: "\u4e3b\u9898\u6f14\u8bb2",
          subtitle: "\u5353\u80dc\u5fae\u521b\u59cb\u4eba\u6f14\u8bb2",
        },
        {
          time: "15:10-16:10",
          title: "\u4e3b\u9898\u6f14\u8bb2",
          subtitle: "AI\u4e0e\u7231",
          detail: "\u5609\u5bbe\uff1a\u534e\u4e1c\u5e08\u8303\u5927\u5b66\u7d2b\u6c5f\u7279\u8058\u6559\u6388-\u5218\u64ce",
        },
        {
          time: "16:10-16:30",
          title: "\u8336\u6b47",
        },
        {
          time: "16:30-17:20",
          title: "\u4e3b\u9898\u6f14\u8bb2",
          subtitle: "\u7a7f\u8d8a\u98ce\u4e91\uff1a\u8d38\u6613\u6218\u4e0eAI\u65f6\u4ee3\u4e0b\u7684\u5168\u7403\u8d44\u672c\u6d6a\u6f6e",
          detail: "\u5609\u5bbe\uff1a\u9ad8\u76db\u4e9a\u6d32\uff08\u9664\u65e5\u672c\uff09\u80a1\u7968\u8d44\u672c\u5e02\u573a\u603b\u7ecf\u7406 \u738b\u4e9a\u519b",
        },
        {
          time: "17:20-17:30",
          title: "\u5353\u80dc\u5fae\u521b\u59cb\u4eba\u603b\u7ed3",
        },
        {
          time: "17:30-17:40",
          title: "\u65e0\u9521\u57ce\u5e02\u6587\u5316\u6f14\u51fa",
          detail: "\u300a\u65e0\u9521\u666f\u300b",
        },
      ],
    },
    {
      venue: "\u592a\u6e56\u996d\u5e97\u00b7\u5434\u8d8a\u5385",
      items: [
        {
          time: "18:30-18:40",
          title: "\u5353\u80dc\u5fae20\u5468\u5e74\u7eaa\u5f55\u77ed\u7247",
        },
        {
          time: "18:40-21:00",
          title: "\u665a\u5bb4",
        },
      ],
    },
  ],
};

export const subVenueSchedule: AgendaDateBlock = {
  date: "03.26",
  sections: [
    {
      venue: "\u82af\u5353\u5de5\u5382",
      items: [
        {
          time: "14:30-15:30",
          title: "\u53c2\u89c2\u5353\u80dc\u5fae\u5c55\u5385\u53ca\u82af\u5353\u56ed\u533a",
        },
        {
          time: "15:30-16:40",
          title: "\u5408\u4f5c\u4f19\u4f34\u542f\u5e55\u4eea\u5f0f",
          detail: "\u4e0e\u5408\u4f5c\u4f19\u4f34\u5171\u540c\u79cd\u4e0b\u53cb\u8c0a\u6811",
        },
      ],
    },
    {
      venue: "\u7ba1\u793e\u5c71\u5e84",
      items: [
        {
          time: "17:30-18:50",
          title: "\u592a\u6e56\u660e\u73e0\u51b7\u9910\u4f1a",
          detail: "\u592a\u6e56\u4e4b\u7554\u4ea4\u6d41\u76f8\u805a",
        },
        {
          time: "19:00-20:00",
          title: "\u9f0b\u5934\u6e1a\u6e38\u8239\u8d4f\u6a31",
          detail: "\u591c\u6e38\u592a\u6e56\u6a31\u82b1\u80dc\u5730",
        },
      ],
    },
  ],
};

export const guideVenues: GuideVenue[] = [
  {
    name: "\u82af\u5353\u56ed\u533a",
    address: "\u6c5f\u82cf\u7701\u65e0\u9521\u5e02\u6ee8\u6e56\u533a\u80e1\u57ed\u5de5\u4e1a\u56ed\u5218\u95fe\u8def29\u53f7",
    mapAsset: "guide-map-xinzhuo.png",
    mapUrl: "https://uri.amap.com/marker?position=120.198,31.475&name=\u82af\u5353\u56ed\u533a&callnative=1",
  },
  {
    name: "\u592a\u6e56\u996d\u5e97",
    address: "\u6c5f\u82cf\u7701\u65e0\u9521\u5e02\u9526\u56ed\u8def1\u53f7",
    mapAsset: "guide-map-taihu-hotel.png",
    mapUrl: "https://uri.amap.com/marker?position=120.275,31.547&name=\u592a\u6e56\u996d\u5e97&callnative=1",
  },
  {
    name: "\u7ba1\u793e\u5c71\u5e84",
    address: "\u6c5f\u82cf\u7701\u65e0\u9521\u5e02\u6ee8\u6e56\u533a\u9f0b\u6e1a\u8def1\u53f7",
    mapAsset: "guide-map-guanshe.png",
    mapUrl: "https://uri.amap.com/marker?position=120.217,31.510&name=\u7ba1\u793e\u5c71\u5e84&callnative=1",
  },
];

export const contacts: ContactPerson[] = [
  {
    role: "\u63a5\u5f85",
    name: "X \u7ecf\u7406",
    phone: "+8613800000000",
  },
  {
    role: "\u6280\u672f\u95ee\u9898",
    name: "X \u5de5",
    phone: "+8613900000000",
  },
];
