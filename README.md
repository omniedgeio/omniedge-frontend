This is OmniEdge Frontend, including Homepage, Pricing, Download, Documentation, Blog, and Dashboard unit.

## Documentation
The docs are located in `markdowndocs/doc ` with specified markdown format, the system will parse them automatically.

Template docs:

```markdown
---
title: Dashboard
description:
route: Doc / Dashboard 
index: 0
---

Doc content
```

## Blog

The blog posts are located in `markdowndocs/posts ` with specified markdown format.

Template posts:

```markdown
---
title: Open Source Evaluation version and Introduce 1.0 plan
description: OmniEdge is a project we started from a single tweet, a group of network experts from 9 cities across 5 countries gathering together to build a paradigm shift for next-generation peer-to-peer VPN infrastructure. 
thumbnail: /assets/posts-images/OmniEdge-Dashboard.png
avatar: /assets/avatar/Yong.jpg
author: Yong QIAN
date: July 08, 20021 · 6min read
---

Post content

```

## How to start

```bash
yarn 
#developemnt
npx next dev 

#build
npx next build
```

## TODO

- [ ] Theme Design
- [ ] Paginate for posts
- [X] Parse sub folders for docs
- [X] Download Page
- [X] Contact Us Form
- [X] Features comparation and FAQ for Pricing Page
