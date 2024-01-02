---
layout: post
title:  Rusted Rogue - An ASCII Roguelike Game
date:   2023-12-08
description: Written using Rust and the Specs ECS library, this game utilizes a variety of algorithms to procedurally generate levels.
tags:
categories:
---

After finishing ["The Book"](https://doc.rust-lang.org/book/) of Rust I wanted to sink my teeth into a larger project. My interest in generative algorithms led me down the path of creating an ASCII roguelike game. Choosing a simple art style allowed me to focus on applying the language well and implementing cool algorithms like [Wave Function Collapse](https://github.com/mxgmn/WaveFunctionCollapse). 

The game utilizes the [Specs](https://crates.io/crates/specs) library to run an Entity Component System, the [RLTK](https://crates.io/crates/rltk) libary which provides some handy utilities for games, and the [Serde](https://crates.io/crates/serde) library for serialization and deserialization. Utilizing composition provided tremendous flexibility in adding unique properties to otherwise identical entities.

-- WIP --

- Include pictures
- Include features
- Include more details about proc mapgen

[Source Code](https://github.com/Didgety/rusted_rogue)