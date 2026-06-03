---
title: "Ego-METAS: an Egocentric online Multimodal Energy-efficient Temporal Action Segmentation benchmark"
authors: "Maria Santos-Villafranca, Jesus Bermudez-Cameo, Alejandro Perez-Yus, Giovanni Maria Farinella, Antonino Furnari"
venue: "arXiv preprint arXiv:2606.02246"
year: "2026"
pub_type: "preprint"
research_line: ["datasets", "memory"]
teaser: "/images/teasers/santosvillafranca2026egometas.png"
links:
  - label: "Website"
    url: "https://maria-sanvil.github.io/Ego-METAS-website/"
  - label: "arXiv"
    url: "https://arxiv.org/abs/2606.02246"
  - label: "Data"
    url: "https://huggingface.co/datasets/Ego-METAS/Ego-METAS"
bibtex: |
  @article{santosvillafranca2026egometas,
    title={Ego-METAS: an Egocentric online Multimodal Energy-efficient Temporal Action Segmentation benchmark},
    author={Santos-Villafranca, Maria and Bermudez-Cameo, Jesus and Perez-Yus, Alejandro and Farinella, Giovanni Maria and Furnari, Antonino},
    journal={arXiv preprint},
    year={2026},
    arxiv={2606.02246}
  }
active: true
---

To operate in the physical world, embodied agents must perceive their environment in an "always-on" fashion, selectively accessing the most informative sensors to balance energy constraints and task accuracy. Despite its importance for resource-constrained devices, energy-aware perception remains under-explored, with most prior work assuming unlimited compute. To address this, we introduce Ego-METAS: the first Egocentric online Multimodal Energy-efficient Temporal Action Segmentation benchmark. Ego-METAS provides a unified testbed of more than 100 hours of untrimmed egocentric video from EgoExo4D, CMU-MMAC, and CaptainCook4D, spanning 5 modalities (RGB, audio, gaze, IMU, and monochrome camera). We formulate an online temporal action segmentation task where models must dynamically select which sensors to activate at each timestep while strictly adhering to hardware-representative energy budgets. Alongside the benchmark, we release unified splits, cleaned annotations, pre-extracted features, and a diverse suite of baseline routing policies. Our evaluations show that optimal routing is highly scenario-dependent, and that existing policy-learning methods—designed primarily for trimmed clips—struggle to adapt to continuous, untrimmed environments. However, even simple dynamic fusion of complementary modalities (e.g., via random routing) proves critical for balancing predictive accuracy against strict energy budgets. Ultimately, Ego-METAS provides a standardized foundation to develop robust, cost-aware policies for autonomous, always-on embodied AI.
