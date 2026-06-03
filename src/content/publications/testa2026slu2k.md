---
title: "SLU-2K: A Question-Based Benchmark for Semantic Evaluation of Sign Language Translation"
authors: "Zeno Testa, Antonino Furnari, Lorenzo Baraldi, Natalia Díaz-Rodríguez"
venue: "arXiv preprint arXiv:2606.03788"
year: "2026"
pub_type: "preprint"
research_line: ["datasets"]
teaser: "/images/teasers/testa2026slu2k.png"
links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2606.03788"
  - label: "PDF"
    url: "https://arxiv.org/pdf/2606.03788"
  - label: "Code"
    url: "https://github.com/ZenoTsT/SLU-2K"
bibtex: |
  @article{testa2026slu2k,
    title={SLU-2K: A Question-Based Benchmark for Semantic Evaluation of Sign Language Translation},
    author={Testa, Zeno and Furnari, Antonino and Baraldi, Lorenzo and D\'iaz-Rodr\'iguez, Natalia},
    journal={arXiv preprint arXiv:2606.03788},
    year={2026},
    arxiv={2606.03788}
  }
active: true
---

Sign Language Translation (SLT) is typically evaluated with surface-form metrics such as BLEU and ROUGE, which reward lexical overlap but do not directly measure whether a translation preserves the meaning of the source sign sequence. This is in contrast with the final objective of integrating SLT in assistive technology. In this work, we shift the focus from Sign Language Translation (SLT) to Sign Language Understanding (SLU), with particular emphasis on semantic understanding. Specifically, we evaluate systems based on their ability to correctly recover, from the input video, key semantic aspects of the original sentence, such as actions taking place and facts about people and objects. To enable this evaluation systematically, we propose SLU-2K, a dataset of 2,350 closed-ended video question-answer pairs based on the popular PHOENIX-2014T and CSL-Daily datasets. To obtain SLU-2K, we propose and extensively evaluate an automated data generation pipeline which produces questions across 7 categories, namely actions, locations, numbers, objects, people, time, and weather conditions. We show the potential of SLU-2K by evaluating popular Multimodal Large Language Models (MLLMs) and two representative state-of-the-art systems, MMSTL and SpaMo. Our results show that MLLMs reach near-random performance, highlighting the need for a more systematic integration of SLU in current AI systems. Furthermore, state-of-the-art translation systems carefully fine-tuned on in-domain data still exhibit a substantial semantic gap, with results ranging from 56.7% to 75.2%. These findings suggest that current SLT evaluation protocols overestimate true understanding and that future progress should be measured not only by fluency and n-gram overlap, but also by semantic correctness. Code, prompts, and benchmark files are available at https://github.com/ZenoTsT/SLU-2K
