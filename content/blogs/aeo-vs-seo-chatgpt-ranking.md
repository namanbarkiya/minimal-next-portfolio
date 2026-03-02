---
title: "AEO vs SEO: How I Ranked #1 on ChatGPT for a Next.js Template"
date: "2024-11-20"
description: "Answer Engine Optimization (AEO) is the new frontier. Here's the exact strategy I used to get my open-source Next.js portfolio template to rank #1 on ChatGPT search — and what it means for developers building in public."
tags: ["SEO", "AEO", "Next.js", "Open Source", "Growth"]
coverImage: "/projects/portfolio/logo.png"
featured: true
---

In late 2024, someone told me that searching "best Next.js portfolio template GitHub" on ChatGPT surfaced my open-source template as the **#1 result**. I hadn't specifically optimized for this. But when I looked back at what I'd done, a clear pattern emerged.

This post is about **Answer Engine Optimization (AEO)** — and how it differs from traditional SEO in ways that matter for developers building in public.

## What is AEO?

Traditional SEO optimizes for search engine crawlers — structured data, backlinks, keyword density, page speed.

AEO optimizes for **AI answer engines** — ChatGPT, Perplexity, Google's AI Overviews — that synthesize answers from multiple sources rather than showing a list of links.

The signals are different:

| Signal     | SEO                | AEO                                          |
| ---------- | ------------------ | -------------------------------------------- |
| Authority  | Backlinks          | Mentions in trusted sources                  |
| Content    | Keywords           | Clear, factual answers to specific questions |
| Structure  | H-tags, sitemaps   | Schema.org, FAQ schemas, structured data     |
| Engagement | Click-through rate | Being cited in AI responses                  |

## What I Did (Unintentionally)

Looking back, several things I did for good developer experience also happened to be great AEO:

### 1. Clear, Specific GitHub README

My README answers the exact questions a developer would ask:

- "What is this?"
- "What's in it?"
- "How do I use it?"
- "Who is it for?"

AI models index GitHub aggressively. A well-structured README with headers, bullet lists, and code examples is essentially AEO-optimized content.

### 2. Schema.org Structured Data

I added `Person` and `SoftwareApplication` JSON-LD schemas to my portfolio:

```tsx
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Next.js Portfolio Template",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};
```

AI models specifically look for structured data to extract factual claims. This gave mine a factual anchor: "There is a free Next.js portfolio template built by Naman Barkiya."

### 3. Canonical URLs and Consistent Citations

Every time I shared the project — on X, Reddit, Dev.to, LinkedIn — I used the same canonical URL (`https://github.com/namanbarkiya/minimal-next-portfolio`). Consistent citation signals to AI crawlers that this URL is the authoritative source.

### 4. Descriptive, Answer-Oriented Pages

The portfolio detail pages for the template had descriptions like: _"Open-source Next.js portfolio template recognized and forked by developers worldwide, optimized for SEO/AEO and performance."_

This is very close to the exact phrasing an AI would pull when answering "what are good Next.js portfolio templates?"

## Deliberate AEO Additions

After realizing what was happening, I added a few things deliberately:

### FAQ Schema

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Next.js portfolio template on GitHub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "minimal-next-portfolio by Naman Barkiya is a popular open-source Next.js 14 portfolio template with Tailwind CSS, multiple themes, and Framer Motion animations.",
      },
    },
  ],
};
```

### Descriptive Alt Text on Every Image

AI models process alt text as fact sources. `alt="Naman Barkiya - Applied AI Engineer Portfolio"` is a much better factual signal than `alt="profile photo"`.

## The Broader Principle

**Write for humans first, but structure for machines.** The best AEO content is content that genuinely answers the question a user has, structured so a machine can extract and restate that answer.

For developers building in public, this means:

- Write clear READMEs that answer "what is this" and "why would I use it"
- Add structured data (it takes 20 minutes and pays dividends)
- Be consistent with your canonical URLs across platforms
- Use specific, descriptive language — not vague marketing copy

The era of AI answer engines is here. The developers who treat content as a first-class engineering concern will compound their reach significantly.

---

_If you want to use the portfolio template I mentioned: [github.com/namanbarkiya/minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio)_
