---
title: "RECIPE: Procedural Planning via Grounding in Instructional Video"
authors: "Luigi Seminara, Antonino Furnari, Lorenzo Torresani"
venue: "Advances in Neural Information Processing Systems (NeurIPS)"
year: "2026"
pub_type: "conference"
research_line: "skill"
teaser: "/images/teasers/seminara2026recipe.svg"
links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2605.19976"
  - label: "PDF"
    url: "https://arxiv.org/pdf/2605.19976"
  - label: "Website"
    url: "https://farsightlab.github.io/RECIPE/"
bibtex: |
  @inproceedings{seminara2026recipe,
    title={RECIPE: Procedural Planning via Grounding in Instructional Video},
    author={Seminara, Luigi and Furnari, Antonino and Torresani, Lorenzo},
    booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
    year={2026}
  }
active: true
---

Visual planning asks a model to generate the remaining steps of a procedure in natural language given a partial video context and a goal. We identify a key asymmetry: extracting clean step labels from noisy video is hard, but verifying whether a generated step sequence is temporally grounded in ASR transcripts is cheap and scales to millions of videos via precomputed text embeddings. We exploit this asymmetry in RECIPE, which uses grounding quality as a reward for GRPO, turning the noisy corpus into a verifier rather than a label source. RECIPE-RL improves over the base checkpoint at all scales (0.5B, 3B, 7B) and every benchmark, with macro-accuracy gains of +7 to +8 points in-domain and up to +16 points zero-shot.
