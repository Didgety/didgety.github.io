---
layout: about
title: About
permalink: /
subtitle: M.S. student in Quantum Information Science, University of Southern California

profile:
  align: right
  image: red_herring_transparent.png
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Ming Hsieh Department of Electrical Engineering</p>
    <p>University of Southern California</p>
    <p>Los Angeles, CA</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I study what measurements on a quantum processor can tell us about its noise. At USC, I’ve used a second qubit as a small, controlled environment and measured what happens when an excitation flows back into the first. Currently, I am working on implementing and evaluating
the $\[\[6,4,2\]\]$ and $\[\[8, 6, 2\]\]$
error correcting codes on IBM superconducting qubits for my Quantum Error Correction final project. I’m interested in doctoral research that connects open quantum systems, quantum error correction, and the software used to test them.

## Selected work

**Spectator-qubit dynamics.** I ran a two-qubit exchange experiment on IBM Fez and reconstructed the central qubit’s state for different inputs. In all three jobs, the ground- and excited-input states became more distinguishable as the excitation returned. In the spectator-reset control, their trace distance fell over the same interval. [Experiment and measurements](https://github.com/Didgety/oqs-spec-bath)

**Quantum error correction.** I wrote the code for Team Bells Pair’s Qompute 2026 project. We studied two noise processes that give a seven-qubit Steane memory the same error-syndrome statistics but favor different recoveries. I implemented Qiskit circuits to distinguish the processes in a separate calibration experiment and compared four decoders on held-out records. [Simulation and results](https://github.com/Didgety/q3hack26-team-bells-pair)

**QUBO and QAOA.** My team, Superposition Squad, placed third at the 2025 USC Q3 Hackathon for a knapsack optimization project. I helped derive the cost Hamiltonian and wrote the Qiskit code for the hardware runs. For a binary image denoising project, I mapped a restricted Boltzmann machine’s denoising objective to an Ising Hamiltonian and compared exact classical optimization with QAOA in Qiskit Aer and on IBM Quantum. [Hackathon project](https://github.com/Didgety/superposition-squad) · [Image denoising](https://github.com/Didgety/q-img-denoise)

**Qiskit development.** Through the Qiskit Advocate Mentorship Program I worked on a Rust implementation of qDRIFT, a randomized Hamiltonian simulation algorithm, for the C circuit library. I wrote the first proposal and collaborated with my teammate on the follow-up. [My implementation](https://github.com/Qiskit/qiskit/pull/15390) · [Joint follow-up](https://github.com/Qiskit/qiskit/pull/16360)

I came to quantum computing through an Arduino optics project at Edmonds College, then studied quantum computation independently during my computer science degree at the University of Vermont. Outside of quantum computing, I enjoy generative graphics, winter sports, and live music.

[Academic CV]({% link _pages/cv.md %}) · [Resume (PDF)]({% link assets/pdf/Jai_Veilleux_Resume.pdf %}) · [Projects]({{ '/blog/' | relative_url }})
