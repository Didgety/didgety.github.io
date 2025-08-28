---
layout: post
title:  Rusted Rogue - An ASCII Roguelike Game
date:   2023-12-08
description: Written using Rust, this game utilizes a variety of algorithms to procedurally generate levels
tags:
categories:
---

After finishing ["The Book"](https://doc.rust-lang.org/book/) of Rust I decided to sink my teeth into a larger project. My interest in generative algorithms led me down the path of creating an ASCII roguelike game. Choosing a simple art style allowed me to focus on applying the language well and implementing cool algorithms like [Wave Function Collapse](https://github.com/mxgmn/WaveFunctionCollapse). 

The game utilizes the [Specs](https://crates.io/crates/specs) library to run an entity component system, the [RLTK](https://crates.io/crates/rltk) libary which provides some handy utilities for games, and the [Serde](https://crates.io/crates/serde) library for serialization and deserialization. Utilizing composition provided tremendous flexibility in adding unique properties to otherwise identical entities. Graphics consist of the CP437 character set and a scanline postprocessing effect to mimic the look of CRT screens.

An assortment of algorithms procedurally generate each level and outputs can be fed into other algorithms to increase the variation between levels. Most algorithms also benefit from having variables that can be tweaked using my map builder API to provide even more variety. Currently, the following algorithms have been implemented:

- Binary Space Partition-like 
- Cellular Automata
- Diffusion Limited Aggegation
- Drunkards Walk
- Mazes
- Prefabricated maps and sectionals
- Rooms and Corridors (rectangles connected by paths)
- Voronoi Hive
- Wave Function Collapse

{% include figure.liquid path="assets/img/mapgen.png" class="img-fluid rounded mx-auto d-block z-depth-1" width=500 zoomable=true%}
<div class="caption">
    Map generation displayed at startup.
</div>

{% include figure.liquid path="assets/img/cave_map_with_tooltip.png" class="img-fluid rounded mx-auto d-block z-depth-1" width=500 zoomable=true%}
<div class="caption">
    A cave map with a variety of enemies and items. You can see the bloodstains from combat around the yellow player. Good thing there's a potion nearby! FOV increased for this picture.
</div>

Other features include:
- Hunger
- Item System
    - Potions, rations
    - Spell scrolls
- Equipment System
    - Armor slot
    - Weapon slot
- Enemy AI
    - Each enemy has its own field of view
- Scaling
    - New items spawn and enemies get stronger as you go down levels
- Particle effects
    - Combat
    - Bloodstains
    - Effects from items
- Loading maps from ASCII or REX files

Serde is used to create and load save files via serialization. A savefile.json is created when exiting the game by pressing `escape`. The presence of this file enables the load game option. Death deletes the save file.

Source code available on [GitHub](https://github.com/Didgety/rusted_rogue)