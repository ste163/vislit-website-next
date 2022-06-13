---
metaDescription: "Vislit's website has been completely re-designed and re-written using Next!"
title: "Welcome to the new website!"
headline: "Revamped using Next 12"
image: /images/articles/new-website.webp
altText: "Old Vislit website from 2021"
date: "2022-04-23"
---

After a month of redesigning and a couple months development, Vislit's website has been completely rewritten using Next 12. This has been on my list to do for a few months now. The original website (started some two years ago) was created using vitepress. Which was a nice introduction to statically generated websites; however, it's geared for documentation sites. I knew it wouldn't last very long as Vislit isn't the kind of project that needs a documentation website. And after I accidentally destroyed the project while experimenting with Github Actions, I figured I should rework vislit.app into a Vue 3, TypeScript SPA.

Having the first real version of the website as a single page application was okay, except it was never anything other than a quick blurb about what I hoped the project would eventually become. It was never designed to have a news section or be SEO friendly. It had some nice animations and was smooth, but no real content.

After locking in the prototype's features and settling on the MVP features, I did a final visual design pass on the mockups. By that point I new everything that would need to be in Vislit version 1.0, and I felt that I had enough real content: written and visual to finally make a true website for Vislit.

I based the site's structure on a few different open source projects that I admire like: Blender, Inkscape, Gimp, Krita, Godot, and Linux Mint. The requirements for the site were pretty simple: have all the text I need, have images of the project, and links to downloads, and the ability to create and read news articles for the project. Next made doing all of this extremely simple.

If you've been following the project and are a developer, you may wonder why a desktop application with its UI built in Vue would not use a Vue-powered framework for its wbsite. Simply, the Vue 3 version of Nuxt hasn't reached a stable release yet! Once that happens, I'm going to be porting the website over to Nuxt. I figure this will be a pretty simple conversion as the only real React-specific code I have is the basic setup for fetching articles and the JSX.