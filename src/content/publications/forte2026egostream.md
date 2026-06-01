---
title: "EGOSTREAM: A Diagnostic Benchmark for Streaming Episodic Memory in Egocentric Vision"
authors: "Rosario Forte, Giuseppe Lando, Antonino Furnari"
venue: "arXiv preprint arXiv:2605.31557"
year: "2026"
pub_type: "preprint"
research_line: "memory"
teaser: "/images/teasers/forte2026egostream.png"
links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2605.31557"
  - label: "PDF"
    url: "https://arxiv.org/pdf/2605.31557"
  - label: "Website"
    url: "https://saroo25.github.io/Egostream/"
bibtex: |
  @article{forte2026egostream,
    title={EGOSTREAM: A Diagnostic Benchmark for Streaming Episodic Memory in Egocentric Vision},
    author={Forte, Rosario and Lando, Giuseppe and Furnari, Antonino},
    journal={arXiv preprint arXiv:2605.31557},
    year={2026}
  }
active: true
---

Continuous episodic memory is a core capability for autonomous agents operating in dynamic, real-world environments, yet current streaming video benchmarks provide limited tools for diagnosing what models remember and for how long. We introduce EGOSTREAM, a diagnostic benchmark for streaming episodic memory evaluation in egocentric vision. EGOSTREAM organizes 2,250 curated questions along seven cognitive dimensions: detail, spatial, temporal, event, social, causal, and prospective memory. We introduce the Answer Validity Window (AVW), which specifies the temporal span an answer remains valid as the observed scene evolves. This allows us to expand the questions into 8,528 recall-conditioned evaluations, enabling controlled testing from instant to ultra-long-term recall while separating genuine model forgetting from natural world-state changes. We rigorously establish baseline performance through a unified streaming MLLM framework that compares several state-of-the-art memory-management mechanisms, covering sliding windows, attention sinks, KV-cache pruning, merging, and offloading. Experiments within a unified Qwen3-VL backbone reveal that comparable aggregate accuracies mask starkly different memory profiles. For instance, token pruning preserves fine-grained details and temporal structure significantly better than token merging, while quantized offloading rescues ultra-long-term recall. Ultimately, all mechanisms operate well below real-time (>1s per frame), and top performing methods ceil at about 45% accuracy, exposing critical gaps in current architectures. EGOSTREAM provides the diagnostic testbed needed to close these gaps.
