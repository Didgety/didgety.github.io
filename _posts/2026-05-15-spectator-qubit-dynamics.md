---
layout: post
title: When an excitation returns to a qubit
description: An IBM Quantum experiment on what happens when a spectator qubit can return an excitation.
date: 2026-11-24
permalink: /blog/2026/spectator-qubit-dynamics/
---

What does energy loss look like if the environment is small enough to give the excitation back? On IBM Fez, I used two qubits to test that idea. A repeated exchange operation transfers an excitation from the central qubit to its neighbor and can then bring it back. I tested two exchange angles with the spectator left in place between blocks. At the larger angle, I also ran a control that reset the spectator after each block.

I prepared the central qubit in either its ground or excited state and measured how distinguishable the two outputs were. With the larger exchange angle, their trace distance was about 0.04 at the first transfer and recovered to 0.80–0.82 at the first return across three jobs. In the reset control, the distance continued to fall over that interval. A third preparation, the plus state, showed the sign reversal of coherence predicted by the exchange circuit.

The [project repository](https://github.com/Didgety/oqs-spec-bath) contains the paper, notebook, hardware counts, and
code for running the experiment and collecting the data. The paper derives the exact finite-spectator dynamics and compares them with short-time and hardware-calibrated predictions.
