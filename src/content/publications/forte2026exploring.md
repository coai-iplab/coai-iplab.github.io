---
title: "Exploring Multimodal LMMs for Online Episodic Memory Question Answering on the Edge"
authors: "Giuseppe Lando, Rosario Forte, Antonino Furnari"
venue: "International Conference on Computer Vision Theory and Applications (VISAPP)"
year: "2026"
pub_type: "conference"
research_line: "memory"
teaser: "/images/teasers/forte2026exploring.png"
links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2602.22455"
  - label: "PDF"
    url: "https://arxiv.org/pdf/2602.22455"
bibtex: |
  @inproceedings{forte2026exploring,
    title={Exploring Multimodal LMMs for Online Episodic Memory Question Answering on the Edge},
    author={Giuseppe Lando and Rosario Forte and Antonino Furnari},
    booktitle={International Conference on Computer Vision Theory and Applications (VISAPP)},
    year={2026},
    url={https://arxiv.org/abs/2602.22455},
    pdf={https://arxiv.org/pdf/2602.22455}
  }
active: true
---

We investigate the feasibility of using Multimodal Large Language Models (MLLMs) for real-time online episodic memory question answering. While cloud offloading is common, it raises privacy and latency concerns for wearable assistants, hence we investigate implementation on the edge. We integrated streaming constraints into our question answering pipeline, which is structured into two asynchronous threads: a Descriptor Thread that continuously converts video into a lightweight textual memory, and a Question Answering (QA) Thread that reasons over the textual memory to answer queries. Experiments on the QAEgo4D-Closed benchmark analyze the performance of Multimodal Large Language Models (MLLMs) within strict resource boundaries, showing promising results also when compared to cloud-based solutions. Specifically, an end-to-end configuration running on a consumer-grade 8GB GPU achieves 51.76% accuracy with a Time-To-First-Token (TTFT) of 0.41s. Scaling to a local enterprise-grade server yields 54.40% accuracy with a TTFT of 0.88s. In comparison, a cloud-based solution obtains an accuracy of 56.00%. These competitive results highlight the potential of edge-based solutions for privacy-preserving episodic memory retrieval.
