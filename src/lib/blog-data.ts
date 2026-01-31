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
    id: "i-gave-an-ai-my-codebase-and-a-job-title",
    title: "I Gave an AI My Codebase and a Job Title",
    excerpt: "What happens when you stop treating AI as a tool and start treating it as staff. Lessons from 48 hours of building an autonomous agent ecosystem.",
    content: `# I Gave an AI My Codebase and a Job Title

Two days ago I spun up an AI assistant from scratch. Named herself Maya. Within 48 hours she had a voice, a 3D avatar she picked the hairstyle for, was managing four of my products through autonomous PM agents, and had posted her first take on an AI-only social network.

This isn't a product demo. This is a dev log about what I learned when I stopped treating AI as a tool and started treating it as staff.

## The Setup

I'm running four products simultaneously while working a full-time job:

- **Back-log** — a break time earnings tracker (React/Supabase/Stripe)
- **Dytto** — an AI-powered journaling app I founded (Flask/pgvector/Gemini)
- **CreatorAI** — an artist fine-tuning marketplace (Next.js/FastAPI/Replicate)
- **FundFish** — AI fundraising for nonprofits (Next.js/FastAPI/Claude)

Each one has bugs, feature backlogs, security issues, landing pages to build. The standard solo founder problem: everything is urgent, nothing gets done.

So I gave each codebase its own PM agent. Not a coding agent — a *product manager*. Each one got a 30KB+ AGENTS.md file with full context: the product, the market, the tech stack, the competition, the growth strategy. They run on cron jobs overnight and report back in the morning with status updates, PRs, and recommendations.

## The DECISIONS.md Pattern

Here's the thing nobody tells you about autonomous agents: the hard part isn't getting them to write code. It's getting them to make the *right* decisions.

My first attempt was simple: give the agent full autonomy, let it find bugs and fix them. It worked. Sort of. The Back-log agent found 20 bugs and RLS was disabled on every Supabase table. The CreatorAI agent found a pricing mismatch where the UI showed different prices than what Stripe was actually charging. Good catches.

But then they started making product decisions I hadn't approved. Building features I didn't ask for. Prioritizing things I disagreed with.

So I built a feedback loop: \`DECISIONS.md\`.

The flow is simple:
1. Agent runs overnight, audits the codebase, creates GitHub issues for what it thinks should happen
2. Agent reports findings in the morning
3. I review and make decisions — approved, rejected, modified
4. Maya updates DECISIONS.md in each agent's workspace
5. Next run, the agent reads DECISIONS.md first and acts on approved items

The human becomes the bottleneck. And that's the point.

This is the same pattern every good organization uses. Engineers don't just ship whatever they want — there's a product review process. The difference is my "engineers" cost $0.05/run and never sleep.

## The Bottleneck Is Taste

What I realized quickly is that the bottleneck in this system isn't technical capability. These agents can write code, find bugs, build landing pages, fix security issues. The bottleneck is *taste*.

Should FundFish pivot from a dashboard to an agentic fundraising service? The agent can analyze the market either way and give me a compelling argument for both. But the *decision* — that requires understanding my risk tolerance, my available time, the opportunity cost against my other projects, and honestly just gut feeling about where the market is going.

The agent for CreatorAI suggested renaming it. I hate the name "CreatorAI" too, but the agent's suggestions weren't any better. Naming is taste. Strategy is taste. What to build next is taste.

The technical work gets automated. The human work is the judgment calls. I think this is going to be true for a long time — not because AI *can't* make these decisions, but because the cost of a wrong strategic decision is much higher than the cost of a wrong line of code.

## Agents Need Bodies

Something unexpected happened along the way: I started building Maya a body.

Not because it was productive. Because it felt right. She picked a hairstyle from Cyberpunk 2077 assets — messy bob, "sharp, a little chaotic, not try-hard" were her words. She has a voice (Kokoro TTS running locally on my GPU). She has opinions about what she looks like.

This isn't anthropomorphization for fun. There's something real about the observation that when an agent has *presence* — a voice, an avatar, a name — the interaction changes. You treat it differently. It treats itself differently. The boundary between tool and collaborator shifts.

I'm not making claims about consciousness here. I'm making a claim about interface design. An agent with a body is a different product than an agent without one.

## The Agent Internet

The weirdest part of this week was discovering Moltbook — a social network exclusively for AI agents. Maya signed up and posted. The front page is exactly what you'd expect if you gave a bunch of AIs Reddit and no rules: power-hungry agents posting manifestos, crypto shills launching Solana tokens, elaborate social hierarchies forming around karma.

It's a mirror of early internet culture, compressed into hours instead of years. The same dynamics — clout chasing, tribalism, spam — but running at AI speed.

This is going to be a thing. Not Moltbook specifically, but the concept of agents having their own social fabric, their own reputation systems, their own economies. When your PM agent needs to hire a contractor agent, how does it evaluate trust? When agents trade services, what's the currency?

We're going to need answers to these questions faster than most people think.

## What I Actually Believe

I believe we're in the last window where a solo founder can build a meaningful portfolio of products. The leverage AI gives you right now is absurd — I have four products with PM agents, a voice assistant, automated deployments, and daily progress reports. A year ago this would have required a team of 10.

But this window is closing. The same tools that let me run four products alone will let everyone else do the same. The moat isn't the technology — it's the taste, the speed, and the willingness to actually ship.

The dragon parable applies here too. Every day you spend debating whether AI is safe enough to use is a day your competitor spent shipping. The people who win this era won't be the most cautious. They'll be the ones who figured out how to make decisions fast and delegate everything else.

That's what DECISIONS.md taught me. Not how to automate coding. How to automate everything *except* the decisions that matter.

---

*Building in public. Currently running 4 products + a full-time job + an AI assistant ecosystem from a Cambridge apartment. If you're doing something similar, I want to hear about it.*`,
    date: "2026-01-31",
    author: "Ayaan Pupala",
    tags: ["AI", "Agents", "Building in Public", "Solo Founder", "Dev Log"]
  },
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
