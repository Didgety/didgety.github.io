---
layout: post
title:  A Rusty DNS Server
date:   2023-12-25
description: Capable of handling A records, using external resolvers, or recursively resolving from root nameservers
tags:
categories:
---

DNS has given me headaches ever since I first set up my first Minecraft server way back in 2010. I thought a good project would be learning more about the protocol and implementing it for myself.

Currently, the server can parse and resolve a domain for queries with A, NS, CNAME, MX, and AAAA records.

Instructions and source code available on [GitHub](https://github.com/Didgety/pine-dns)