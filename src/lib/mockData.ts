export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  createdAt: string;
  readTime: string;
  tags: string[];
  likes: number;
  comments: Comment[];
}

export const authors: Author[] = [
  { id: "1", name: "Elena Voss", avatar: "https://i.pravatar.cc/150?img=1", bio: "Writer & thinker exploring technology and culture." },
  { id: "2", name: "Marcus Chen", avatar: "https://i.pravatar.cc/150?img=3", bio: "Software engineer turned storyteller." },
  { id: "3", name: "Aria Johnson", avatar: "https://i.pravatar.cc/150?img=5", bio: "Designer, artist, and occasional philosopher." },
  { id: "4", name: "James Wright", avatar: "https://i.pravatar.cc/150?img=7", bio: "Exploring the intersection of AI and creativity." },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "The Art of Building Communities in the Digital Age",
    excerpt: "How online spaces are reshaping the way we connect, create, and collaborate in an increasingly fragmented world.",
    content: `In the vast landscape of the internet, communities have become the new town squares. They are where ideas are born, debated, and refined. But building a thriving online community is far from simple — it requires intention, empathy, and a deep understanding of human nature.\n\nThe most successful communities share a common thread: they make people feel seen. Whether it's a forum for indie game developers or a Slack channel for remote workers, the magic happens when members transition from lurkers to contributors.\n\n## The Three Pillars\n\n**Purpose** — Every community needs a clear reason to exist. Without purpose, you have a crowd, not a community.\n\n**Rituals** — Regular events, weekly threads, or shared traditions create the rhythm that keeps people coming back.\n\n**Safety** — People only share authentically when they feel safe. Moderation isn't censorship — it's gardening.\n\nThe future of the internet isn't about more content. It's about better connections. And communities are the infrastructure that makes those connections possible.`,
    coverImage: "",
    author: authors[0],
    createdAt: "Mar 12, 2026",
    readTime: "6 min read",
    tags: ["Community", "Technology", "Culture"],
    likes: 234,
    comments: [
      { id: "c1", author: authors[1], content: "This resonates deeply. The 'safety' pillar is often overlooked but it's the foundation everything else is built on.", createdAt: "Mar 13, 2026" },
      { id: "c2", author: authors[2], content: "Beautifully written. I'd add that 'shared language' is another pillar — inside jokes and terminology bond people.", createdAt: "Mar 14, 2026" },
    ],
  },
  {
    id: "2",
    title: "Why Every Developer Should Write",
    excerpt: "Writing isn't just for 'writers.' It's the most underrated skill in a developer's toolkit.",
    content: `Most developers think writing is something other people do. Content marketers, technical writers, documentation teams — surely not the people shipping code at 2 AM.\n\nBut here's the truth: writing is thinking made visible. And if you can't write clearly, you probably can't think clearly either.\n\n## Writing Makes You Better\n\nWhen you write about a concept, you're forced to confront the gaps in your understanding. That half-understood algorithm? Try explaining it in a blog post. You'll either solidify your knowledge or discover you need to go deeper.\n\n## Your Future Self Will Thank You\n\nEvery blog post is a gift to your future self. That obscure bug you spent three days debugging? Write it down. Six months from now, you — or someone else — will be grateful.\n\nStart today. Write messy. Write often. The world needs your perspective.`,
    coverImage: "",
    author: authors[1],
    createdAt: "Mar 10, 2026",
    readTime: "4 min read",
    tags: ["Programming", "Writing", "Career"],
    likes: 189,
    comments: [
      { id: "c3", author: authors[0], content: "Started writing because of advice like this. Best career decision I ever made.", createdAt: "Mar 11, 2026" },
    ],
  },
  {
    id: "3",
    title: "Design Systems Are Gardens, Not Buildings",
    excerpt: "Stop treating your design system like an architecture project. It's alive, and it needs tending.",
    content: `We've been thinking about design systems all wrong. We approach them like construction projects — blueprint, build, done. But design systems are living organisms.\n\nA garden needs constant attention. You plant seeds, nurture growth, prune what's not working, and adapt to the seasons. Design systems work the same way.\n\n## The Gardener's Mindset\n\nInstead of trying to design everything upfront, start small. Plant a few tokens — colors, spacing, typography. See what grows. Add components as you need them, not before.\n\n## Composting Old Patterns\n\nNot every component will survive. That's okay. Deprecate gracefully, document why, and let new patterns emerge from the compost of old ones.\n\nThe best design systems aren't the most comprehensive. They're the most tended.`,
    coverImage: "",
    author: authors[2],
    createdAt: "Mar 8, 2026",
    readTime: "5 min read",
    tags: ["Design", "Systems", "UX"],
    likes: 312,
    comments: [
      { id: "c4", author: authors[3], content: "The gardening metaphor is perfect. I've seen too many 'building' approaches fail because they couldn't adapt.", createdAt: "Mar 9, 2026" },
      { id: "c5", author: authors[1], content: "Love the 'composting' idea. We need to normalize sunsetting components.", createdAt: "Mar 9, 2026" },
      { id: "c6", author: authors[0], content: "This changed how I think about our component library. Sharing with my team.", createdAt: "Mar 10, 2026" },
    ],
  },
  {
    id: "4",
    title: "The Quiet Revolution of Ambient Computing",
    excerpt: "Technology is disappearing into our environment — and that changes everything about how we design experiences.",
    content: `The best technology is invisible. It doesn't demand your attention; it simply works, woven into the fabric of your daily life.\n\nWe're entering the age of ambient computing, where screens fade into the background and intelligence is embedded in the spaces around us. Your home adjusts its temperature based on your habits. Your car knows your schedule. Your workspace adapts to your energy levels.\n\n## Beyond the Screen\n\nFor decades, we've been screen-centric. Every innovation required a new display, a new interface, a new app. Ambient computing flips this paradigm. The interface is the environment itself.\n\n## Designing for Disappearance\n\nThis requires a fundamental shift in how we design. Instead of optimizing for engagement, we optimize for invisibility. The best ambient experience is one you never consciously notice.\n\nThe future isn't about more technology. It's about technology that knows when to get out of the way.`,
    coverImage: "",
    author: authors[3],
    createdAt: "Mar 6, 2026",
    readTime: "7 min read",
    tags: ["Technology", "Design", "Future"],
    likes: 156,
    comments: [],
  },
];
