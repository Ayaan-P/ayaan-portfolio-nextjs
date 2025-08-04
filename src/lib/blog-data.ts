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

Purchasing Power Parity is fundamentally a cope mechanism for uncomfortable economic realities.

Yes, your salary might go further locally, but global goods are priced globally. An iPhone doesn't care that you earn in rupees instead of dollars. Neither does cloud infrastructure, international travel, or imported technology.

The PPP argument falls apart the moment you want to participate in the global economy beyond local services and rent. And in an increasingly connected world, that's most things that matter for building and scaling.

## Global Goods, Global Prices

This connects to a broader point about economic reality in 2025. The things that enable you to build, create, and compete globally are priced in the global market.

Want to use AWS? Global pricing. Want the latest MacBook for development? Global pricing. Want to attend that conference in San Francisco? Global pricing.

PPP adjustments are basically saying "it's okay that you can't afford the tools and opportunities that others can, because bread is cheaper where you live." That's not progress—that's acceptance of limitation.

## Bostrom's Dragon Parable

More people need to read Nick Bostrom's dragon parable. It's a simple story about a village terrorized by a dragon that demands human sacrifices. Over time, the villagers develop elaborate rituals, philosophies, and entire cultural systems around the dragon's demands.

The point: sometimes what we accept as "just how things are" is actually a solvable problem we've gotten too comfortable accommodating.

I think about this a lot when I see people defending broken systems or accepting artificial limitations. The dragon might just be a really big lizard that we could deal with if we tried.

## Memory and Identity

"If you could fully remember your past, you'd live differently. Most people don't even know what they did last week."

This quote hit me hard because it's both obviously true and deeply uncomfortable. Our decisions are shaped by incomplete data about our own lives.

I started keeping better records of my days—not just events, but thoughts, moods, small observations. The pattern recognition is wild. You start seeing cycles and triggers that were invisible when you were just living day to day.

Maybe this is why I'm building dytto. If we can't naturally remember our past selves clearly, perhaps we need tools to help us bridge that gap.

## Disconnected but Connected

These thoughts aren't really related, but they all circle around the same theme: the stories we tell ourselves versus reality. Whether it's economic comfort zones, societal acceptance of solvable problems, or our relationship with our own past—there's often a more honest version waiting if we're brave enough to look.

Not sure where I'm going with this. Just thoughts.`,
    date: "2025-08-04",
    author: "Ayaan Pupala",
    tags: ["Economics", "Philosophy", "Memory", "Random Thoughts"]
  }
  
];