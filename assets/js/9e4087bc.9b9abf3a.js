"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[53608],{7507:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});r(27378);var t=r(36641),s=r(99213),i=r(1123),n=r(40684),c=r(1999),l=r(24246);function h(e){var a=e.year,r=e.posts;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{as:"h3",id:a,children:a}),(0,l.jsx)("ul",{children:r.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(t.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)}))})]})}function d(e){var a=e.years;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:a.map((function(e,a){return(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,Object.assign({},e))},a)}))})})})}function o(e){var a,r,t=e.archive,h=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),o=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(a=t.blogPosts,r=a.reduce((function(e,a){var r,t=a.metadata.date.split("-")[0],s=null!=(r=e.get(t))?r:[];return e.set(t,[a].concat(s))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:h,description:o}),(0,l.jsxs)(n.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.Z,{as:"h1",className:"hero__title",children:h}),(0,l.jsx)("p",{className:"hero__subtitle",children:o})]})}),(0,l.jsx)("main",{children:m.length>0&&(0,l.jsx)(d,{years:m})})]})]})}}}]);