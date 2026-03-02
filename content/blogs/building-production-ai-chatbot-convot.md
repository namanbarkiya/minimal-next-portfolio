---
title: "Building a Production-Ready AI Chatbot Platform: Lessons from Convot"
date: "2025-02-15"
description: "Deep-dive into the architecture decisions, ingestion pipelines, and hard-won lessons from building Convot — an embeddable AI chatbot that retrieves answers from your own knowledge base."
tags: ["AI", "LLM", "RAG", "FastAPI", "Next.js", "Vector Search"]
coverImage: "/projects/convot/logo.png"
featured: true
---

Building a production-ready AI chatbot is very different from building a demo. Over six months of building [Convot](https://convot.ai), I learned that the hard part isn't the LLM — it's everything around it. This post shares the key architectural decisions and lessons that made the difference.

## The Core Problem

When businesses want to give their users AI-powered answers, they face a fundamental challenge: **generic LLMs don't know your specific data**. Fine-tuning is expensive and slow. RAG (Retrieval-Augmented Generation) is the pragmatic middle ground — you retrieve relevant context at query time and inject it into the prompt.

But implementing RAG well is harder than it looks.

## Architecture Overview

Convot's architecture has three main layers:

```
User Query
    │
    ▼
┌─────────────────────────────┐
│     Query Processing        │
│  - Embedding generation     │
│  - Hybrid search (dense +   │
│    sparse)                  │
└────────────┬────────────────┘
             │
    ┌────────▼────────┐
    │  Vector Store   │  ← Pinecone / pgvector
    └────────┬────────┘
             │ Top-K chunks
    ┌────────▼────────────────┐
    │   LLM Generation        │
    │  - Context injection    │
    │  - Source attribution   │
    └─────────────────────────┘
```

## Ingestion Pipeline: The Underrated Part

Most tutorials focus on the query side. The ingestion pipeline is equally critical.

### Challenge 1 — Chunking Strategy

Naive chunking (split every N tokens) breaks semantic coherence. We moved to **semantic chunking**: using embedding similarity to detect natural break points in the text. This dramatically improved retrieval precision.

```python
def semantic_chunk(text: str, similarity_threshold: float = 0.8) -> list[str]:
    sentences = split_into_sentences(text)
    embeddings = embed_batch(sentences)
    chunks = []
    current_chunk = [sentences[0]]

    for i in range(1, len(sentences)):
        sim = cosine_similarity(embeddings[i-1], embeddings[i])
        if sim < similarity_threshold:
            chunks.append(" ".join(current_chunk))
            current_chunk = []
        current_chunk.append(sentences[i])

    if current_chunk:
        chunks.append(" ".join(current_chunk))
    return chunks
```

### Challenge 2 — Multi-tenant Isolation

Every customer's knowledge base must be strictly isolated. We used **namespace-based isolation** in Pinecone, where each tenant gets its own namespace. At query time, the namespace is derived from the authenticated API key — zero chance of cross-tenant leakage.

### Challenge 3 — Incremental Sync

Re-ingesting the entire knowledge base on every update is too slow and expensive. We implemented a **content-hash based diff** — only changed documents trigger re-embedding.

## Structured Prompt Design

This was the single biggest lever for answer quality. Instead of a generic system prompt, we built structured prompts tailored to each knowledge base type:

```python
SYSTEM_PROMPT = """
You are a helpful assistant for {company_name}.
Answer ONLY based on the provided context.
If the answer is not in the context, say: "I don't have that information."

Rules:
- Be concise and direct
- Always cite the source document
- Never fabricate information
- Format code blocks properly
"""
```

This alone reduced hallucinations by ~60% compared to a general system prompt.

## The Embed Widget

The one-line embed (`<script src="convot.js" data-key="..."></script>`) required a careful isolation strategy — the widget injects an `<iframe>` with `sandbox` attributes to prevent style conflicts with the host page.

## Key Takeaways

1. **Chunking strategy matters more than the model choice** — invest time here first.
2. **Multi-tenancy is a security requirement, not a nice-to-have** — design it in from day one.
3. **Structured prompts beat generic ones** by a huge margin for domain-specific answers.
4. **Source attribution is a product differentiator** — users trust answers that cite sources.
5. **Start with a small, curated knowledge base** to validate retrieval quality before scaling.

Building Convot was one of the most technically challenging and rewarding projects I've worked on. Happy to answer questions in the comments or on [X](https://x.com/namanbarkiya).
