---
title: "EgoTools: Tool-Centric Reasoning in Real-World Egocentric Videos"
authors: "Shulin Tian, Junsu Kim, Shuai Liu, Hao Li, Yujiao Shen, Sihan Li, Zhe Yang, Yeongon Kim, Feiyu Li, Jialin Wu, Yichi Zhang, Wenhui Wang, Runmao Yao, Yuhao Dong, Zhaoxi Chen, Fangzhou Hong, Antonino Furnari, Jingkang Yang, Hongyuan Zhu, Ziwei Liu"
venue: "EMNLP 2026 (Main Conference)"
year: "2026"
pub_type: "conference"
teaser: "/images/teasers/tian2026egotools.png"
links:
  - label: "Paper PDF"
    url: "https://shulin16.github.io/egotools_dev/static/paper/egotools.pdf"
  - label: "Website"
    url: "https://shulin16.github.io/egotools_dev/"
  - label: "HuggingFace"
    url: "https://huggingface.co/egotools-dev"
bibtex: |
  @inproceedings{egotools2026,
    title     = {EgoTools: Tool-Centric Reasoning in Real-World Egocentric Videos},
    author    = {Tian, Shulin and Kim, Junsu and Liu, Shuai and Li, Hao and Shen, Yujiao and Li, Sihan and Yang, Zhe and Kim, Yeongon and Yao, Runmao and Dong, Yuhao and Hong, Fangzhou and Furnari, Antonino and Yang, Jingkang and Zhu, Hongyuan and Liu, Ziwei},
    booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP)},
    year      = {2026}
  }
active: true
---

EgoTools evaluates whether vision-language models can reason about tool choice, physical state changes, and long-horizon activity dependencies in real-world first-person video. The benchmark pairs 100+ hours of egocentric video across seven tool-use domains (kitchen, classroom, research lab, repair workshop, craft, office, household) with 1,000 human-crafted and spatial QA pairs spanning four reasoning tracks: affordance & causality, perception & grounding, procedural dynamics, and spatial reasoning. A reference model fine-tuned on EgoTools supervision under strict source-video separation raises overall accuracy from 50.0% to 60.9% over its backbone, demonstrating the value of training on tool-centric egocentric data. The work is led by S-Lab, Nanyang Technological University, in collaboration with A*STAR, KAIST, and other institutions.
