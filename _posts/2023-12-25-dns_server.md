---
layout: post
title:  A Rusty DNS Server
date:   2023-12-25
description: Capable of handling a variety of record types, using external resolvers, and recursively resolving queries
tags:
categories:
---

DNS has given me headaches ever since I first set up my first Minecraft server back in 2010. I decided learning more about the protocol and implementing it for myself would be a good project.

This project made me significantly more comfortable working at the bit level and using bitwise operations. 

Currently, the server can parse and resolve a domain for queries with A, NS, CNAME, MX, and AAAA records.

Source code available on [GitHub](https://github.com/Didgety/pine-dns)