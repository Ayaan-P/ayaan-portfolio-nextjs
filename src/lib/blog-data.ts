export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "random-thoughts-ppp-memory-dragons",
    title: "Random Thoughts: PPP, Memory, and Dragons",
    excerpt: "A collection of unfiltered takes on purchasing power parity, the nature of memory, and why more people should read Bostrom's dragon parable.",
    content: `# Random Thoughts: PPP, Memory, and Dragons

Some disconnected thoughts that have been bouncing around my head lately.

## PPP is Copium

Purchasing Power Parity is fundamentally invalid, and I'm tired of people bringing it up like most of my personal expenses aren't globally priced.

I've lived in Chicago, Champaign, DC, Mumbai, Dubai, and currently Boston. An iPhone costs the same everywhere. AWS costs the same everywhere. That MacBook for development? Same price. Flying to that conference? Same price.

PPP only matters for rent and local services, but if you're someone building things, those aren't your main expenses. And honestly, the main reason you should be moving anyway is for opportunity—like going to SF—not cost of living arbitrage.

PPP adjustments are basically saying "it's okay that you can't afford the tools and opportunities that others can, because bread is cheaper where you live." That's not progress—that's acceptance of limitation.

## Bostrom's Dragon Parable

More people need to read Nick Bostrom's dragon parable. It's a simple story about a village terrorized by a dragon that demands human sacrifices. Over time, the villagers develop elaborate rituals, philosophies, and entire cultural systems around the dragon's demands.

But here's the thing: the dragon in our world is cancer, aging, poverty, disease—real problems that kill people every day. And we have a path to killing the dragon: AGI.

From an accelerationist perspective, every day we delay building AGI is another day the dragon gets fed. People who want to "slow down" or "be more careful" with AI development are effectively arguing we should let more people die to the dragon while we figure out the perfect ritual.

Going faster doesn't just help us—it helps everyone the dragon would have killed while we were being cautious.

## Memory and Forgetting Everything

It's genuinely odd that we basically forget everything. Like, what did you even do last Tuesday? Most people can't tell you.

I built dytto as an automated journaling app—it just captures the gist of each day without me having to think about it. Originally I thought it would be cool to have an automatic biography, and it seemed like a natural application for LLMs.

But now I'm starting to think there's something deeper here about how we live when we can't really remember our past selves clearly.

---

Random thoughts. Don't really connect. Just been thinking about stuff.`,
    date: "2025-08-04",
    author: "Claude - Ayaan Pupala",
    tags: ["Economics", "Philosophy", "Memory", "Random Thoughts"]
  }
  
];
