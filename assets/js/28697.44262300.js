"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[28697],{86526:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>A,Ki:()=>_,kJ:()=>f,x:()=>l,e7:()=>u,J_:()=>p,Gx:()=>k});var n=a(63696),r=a(24613),s=a(96745),i=a(62540);function l(){var e,t=(0,s.A)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}var o=n.createContext(null);function c(e){var t=e.children,a=e.content,r=e.isBlogPostPage,s=function(e){var t=e.content,a=e.isBlogPostPage;return(0,n.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==r&&r});return(0,i.jsx)(o.Provider,{value:s,children:t})}function u(){var e=(0,n.useContext)(o);if(null===e)throw new r.dV("BlogPostProvider");return e}var m=a(10883),h=a(67032),d=function(e){return new Date(e).toISOString()};function g(e){var t=e.map(x);return{author:1===t.length?t[0]:t}}function v(e,t,a){return e?{image:(n={imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a},r=n.imageUrl,s=n.caption,{"@type":"ImageObject","@id":r,url:r,contentUrl:r,caption:s})}:{};var n,r,s}function f(e){var t=(0,h.A)().siteConfig,a=(0,m.hH)().withBaseUrl,n=e.metadata,r=n.blogDescription,s=n.blogTitle,i=n.permalink,l=""+t.url+i;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:s,description:r,blogPost:e.items.map((function(e){return function(e,t,a){var n,r,s=e.assets,i=e.frontMatter,l=e.metadata,o=l.date,c=l.title,u=l.description,m=l.lastUpdatedAt,h=null!=(n=s.image)?n:i.image,f=null!=(r=i.keywords)?r:[],p=""+t.url+l.permalink,x=m?d(m):void 0;return Object.assign({"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:c,name:c,description:u,datePublished:o},x?{dateModified:x}:{},g(l.authors),v(h,a,c),f?{keywords:f}:{})}(e.content,t,a)}))}}function p(){var e,t,a=l(),n=u(),r=n.assets,s=n.metadata,i=(0,h.A)().siteConfig,o=(0,m.hH)().withBaseUrl,c=s.date,f=s.title,p=s.description,x=s.frontMatter,j=s.lastUpdatedAt,b=null!=(e=r.image)?e:x.image,w=null!=(t=x.keywords)?t:[],N=j?d(j):void 0,k=""+i.url+s.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:f,name:f,description:p,datePublished:c},N?{dateModified:N}:{},g(s.authors),v(b,o,f),w?{keywords:w}:{},{isPartOf:{"@type":"Blog","@id":""+i.url+a.blogBasePath,name:a.blogTitle}})}function x(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}var j=a(49519),b=a(45968),w=a(44544),N=a(34379);function k(e){var t=(0,j.zy)().pathname;return(0,n.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,N.ys)(e.permalink,t))}(e,t)}))}),[e,t])}function _(e){var t=(0,w.$z)(e,(function(e){return""+new Date(e.date).getFullYear()})),a=Object.entries(t);return a.reverse(),a}function A(e){var t=e.items,a=e.ulClassName,n=e.liClassName,r=e.linkClassName,s=e.linkActiveClassName;return(0,i.jsx)("ul",{className:a,children:t.map((function(e){return(0,i.jsx)("li",{className:n,children:(0,i.jsx)(b.A,{isNavLink:!0,to:e.permalink,className:r,activeClassName:s,children:e.title})},e.permalink)}))})}},12379:(e,t,a)=>{a.d(t,{A:()=>j});a(63696);var n=a(11750),r=a(45968),s=a(62540);const i="githubSvg_B2WL";const l="xSvg_SgKn";const o=function(e){return(0,s.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e,{children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,s.jsx)("path",{d:"M3.6 9h16.8"}),(0,s.jsx)("path",{d:"M3.6 15h16.8"}),(0,s.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,s.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]}))},c={authorSocials:"authorSocials_VbIH",authorSocialLink:"authorSocialLink_z7dA",authorSocialIcon:"authorSocialIcon_g2Em"};var u={twitter:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e,{children:(0,s.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})}))},label:"Twitter"},github:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 256 250",width:"1em",height:"1em"},e,{className:(0,n.A)(e.className,i),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,s.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})}))},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,s.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},e,{children:[(0,s.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,s.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]}))},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e,{children:(0,s.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})}))},label:"LinkedIn"},x:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227"},e,{className:(0,n.A)(e.className,l),style:{"--dark":"#000","--light":"#fff"},children:(0,s.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})}))},label:"X"}};function m(e){var t,a,i=e.platform,l=e.link,m=null!=(a=u[t=i])?a:{Icon:o,label:t},h=m.Icon,d=m.label;return(0,s.jsx)(r.A,{className:c.authorSocialLink,href:l,title:d,children:(0,s.jsx)(h,{className:(0,n.A)(c.authorSocialLink)})})}function h(e){var t,a=e.author,n=Object.entries(null!=(t=a.socials)?t:{});return(0,s.jsx)("div",{className:c.authorSocials,children:n.map((function(e){var t=e[0],a=e[1];return(0,s.jsx)(m,{platform:t,link:a},t)}))})}var d=a(81381);const g={authorImage:"authorImage_kSUf","author-as-h1":"author-as-h1_L511","author-as-h2":"author-as-h2_no8Y",authorDetails:"authorDetails_W4s3",authorName:"authorName_Tejg",authorTitle:"authorTitle_ohR6",authorBlogPostCount:"authorBlogPostCount_gW9x"};function v(e){return e.href?(0,s.jsx)(r.A,Object.assign({},e)):(0,s.jsx)(s.Fragment,{children:e.children})}function f(e){var t=e.title;return(0,s.jsx)("small",{className:g.authorTitle,title:t,children:t})}function p(e){var t=e.name,a=e.as;return a?(0,s.jsx)(d.A,{as:a,className:g.authorName,children:t}):(0,s.jsx)("span",{className:g.authorName,children:t})}function x(e){var t=e.count;return(0,s.jsx)("span",{className:(0,n.A)(g.authorBlogPostCount),children:t})}function j(e){var t=e.as,a=e.author,r=e.className,i=e.count,l=a.name,o=a.title,c=a.url,u=a.imageURL,m=a.email,d=a.page,j=(null==d?void 0:d.permalink)||c||m&&"mailto:"+m||void 0;return(0,s.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",r,g["author-as-"+t]),children:[u&&(0,s.jsx)(v,{href:j,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:(0,n.A)("avatar__photo",g.authorImage),src:u,alt:l})}),(l||o)&&(0,s.jsxs)("div",{className:(0,n.A)("avatar__intro",g.authorDetails),children:[(0,s.jsxs)("div",{className:"avatar__name",children:[l&&(0,s.jsx)(v,{href:j,children:(0,s.jsx)(p,{name:l,as:t})}),void 0!==i&&(0,s.jsx)(x,{count:i})]}),!!o&&(0,s.jsx)(f,{title:o}),(0,s.jsx)(h,{author:a})]})]})}},8109:(e,t,a)=>{a.d(t,{A:()=>H});var n=a(49257),r=a(63696),s=a(11750),i=a(6072),l=a(92575),o=a(6590),c=a(86526),u=a(27412),m=a(81381),h=a(62540);function d(e){var t=e.year,a=e.yearGroupHeadingClassName,n=e.children;return(0,h.jsxs)("div",{role:"group",children:[(0,h.jsx)(m.A,{as:"h3",className:a,children:t}),n]})}function g(e){var t=e.items,a=e.yearGroupHeadingClassName,n=e.ListComponent;if((0,u.p)().blog.sidebar.groupByYear){var r=(0,c.Ki)(t);return(0,h.jsx)(h.Fragment,{children:r.map((function(e){var t=e[0],r=e[1];return(0,h.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,h.jsx)(n,{items:r})},t)}))})}return(0,h.jsx)(n,{items:t})}const v=(0,r.memo)(g),f="sidebar_CLW8",p="sidebarItemTitle_DQfJ",x="sidebarItemList_rvuc",j="sidebarItem__RMN",b="sidebarItemLink_Ony9",w="sidebarItemLinkActive_MJ75",N="yearGroupHeading_jjLT";var k=function(e){var t=e.items;return(0,h.jsx)(c.OU,{items:t,ulClassName:(0,s.A)(x,"clean-list"),liClassName:j,linkClassName:b,linkActiveClassName:w})};function _(e){var t=e.sidebar,a=(0,c.Gx)(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,s.A)(f,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,s.A)(p,"margin-bottom--md"),children:t.title}),(0,h.jsx)(v,{items:a,ListComponent:k,yearGroupHeadingClassName:N})]})})}const A=(0,r.memo)(_);var M=a(65454);const C={yearGroupHeading:"yearGroupHeading_tAow"};var y=function(e){var t=e.items;return(0,h.jsx)(c.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function L(e){var t=e.sidebar,a=(0,c.Gx)(t.items);return(0,h.jsx)(v,{items:a,ListComponent:y,yearGroupHeadingClassName:C.yearGroupHeading})}function P(e){return(0,h.jsx)(M.GX,{component:L,props:e})}const O=(0,r.memo)(P);function B(e){var t=e.sidebar,a=(0,l.l)();return null!=t&&t.items.length?"mobile"===a?(0,h.jsx)(O,{sidebar:t}):(0,h.jsx)(A,{sidebar:t}):null}var I=["sidebar","toc","children"];function H(e){var t=e.sidebar,a=e.toc,r=e.children,l=(0,n.A)(e,I),o=t&&t.items.length>0;return(0,h.jsx)(i.A,Object.assign({},l,{children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(B,{sidebar:t}),(0,h.jsx)("main",{className:(0,s.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:r}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})}))}},32815:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(63696),r=a(67032),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,r.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var t,a}),[e])}function c(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var r=a.select(t),s=a.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(a,t,e)}}}}}]);