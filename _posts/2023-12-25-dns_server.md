---
layout: post
title:  A Rusty DNS Server
date:   2023-12-25
description: Capable of handling a variety of record types, using external resolvers, and recursively resolving queries
tags:
categories:
---

DNS is a rather enigmatic protocol, but it is a key piece of our modern life. After wrestling with some DNS issues I decided learning more about the protocol and implementing it myself would be a fun project so I set to work using Rust!

This project made me significantly more comfortable working at the bit level and using bitwise operations. 

Currently, the server can parse and resolve a domain for queries with A, NS, CNAME, MX, and AAAA records.

Source code available on [GitHub](https://github.com/Didgety/pine-dns)