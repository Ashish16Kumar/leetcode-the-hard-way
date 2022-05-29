"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1566],{3905:function(a,e,t){t.d(e,{Zo:function(){return i},kt:function(){return c}});var s=t(67294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var N=s.createContext({}),l=function(a){var e=s.useContext(N),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=l(a.components);return s.createElement(N.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,N=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=l(t),c=n,h=k["".concat(N,".").concat(c)]||k[c]||o[c]||m;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function c(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var N in e)hasOwnProperty.call(e,N)&&(r[N]=e[N]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},56750:function(a,e,t){t.r(e),t.d(e,{assets:function(){return i},contentTitle:function(){return N},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return o}});var s=t(87462),n=t(63366),m=(t(67294),t(3905)),p=["components"],r={title:"Binary Exponentiation",description:"Binary Exponentiation is also known as Exponentiation by Squaring.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","binary exponentiation","fast pow","algorithm"]},N=void 0,l={unversionedId:"math/number-theory/binary-exponentiation",id:"math/number-theory/binary-exponentiation",title:"Binary Exponentiation",description:"Binary Exponentiation is also known as Exponentiation by Squaring.",source:"@site/tutorials/math/number-theory/binary-exponentiation.md",sourceDirName:"math/number-theory",slug:"/math/number-theory/binary-exponentiation",permalink:"/leetcode-the-hard-way/tutorials/math/number-theory/binary-exponentiation",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/math/number-theory/binary-exponentiation.md",tags:[],version:"current",frontMatter:{title:"Binary Exponentiation",description:"Binary Exponentiation is also known as Exponentiation by Squaring.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","binary exponentiation","fast pow","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Number Theory",permalink:"/leetcode-the-hard-way/tutorials/category/number-theory"},next:{title:"Sieve of Eratosthenes",permalink:"/leetcode-the-hard-way/tutorials/math/number-theory/sieve-of-eratosthenes"}},i={},o=[{value:"C++ Implementation",id:"c-implementation",level:3},{value:"Suggested Problems",id:"suggested-problems",level:3}],k={toc:o};function c(a){var e=a.components,t=(0,n.Z)(a,p);return(0,m.kt)("wrapper",(0,s.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"This tutorial is written by @wingkwong")),(0,m.kt)("p",null,"Binary Exponentiation is also known as Exponentiation by Squaring or even called Fast Pow in some CP templates. It is used to calculate ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"a"),(0,m.kt)("mi",{parentName:"msup"},"n"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a ^ n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6644em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))))))," using only ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," multiplications instead of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"using naive approach."),(0,m.kt)("p",null,"We can express ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"a"),(0,m.kt)("mi",{parentName:"msup"},"n"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a ^ n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6644em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))))))),"as ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"a")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a * a * ... * a")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"..."),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," but it is not efficient for a large ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". If we display the exponent in binary representation, says 13 = 1101, then we have ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"13")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"1101")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"8")),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"4")),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"1")),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3 ^{13} = 3^{1101} = 3^8*3^4*3^1.")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"13"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1101"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"8")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"4")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},".")))))," Supposing we have a sequence ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"a"),(0,m.kt)("mn",{parentName:"msup"},"1")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"a"),(0,m.kt)("mn",{parentName:"msup"},"2")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"a"),(0,m.kt)("mn",{parentName:"msup"},"4")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"a"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"\u230a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"g"),(0,m.kt)("mn",{parentName:"msub"},"2")),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"\u230b")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a ^ 1, a ^ 2, a ^4, ..., a^{\\lfloor log_2 n\\rfloor}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0824em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"4")))))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"..."),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mopen mtight"},"\u230a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3173em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"-0.0359em",marginRight:"0.0714em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose mtight"},"\u230b"))))))))))))),", we can see the an element in the sequence is the square of previous element, i.e. ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"4")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"2")),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msup",stretchy:"false"},")"),(0,m.kt)("mn",{parentName:"msup"},"2"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3 ^ 4 = (3^2)^2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"4")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))))),". Therefore, to calculate ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"3"),(0,m.kt)("mn",{parentName:"msup"},"13"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3 ^ {13}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"13"))))))))))))),", we just need to calculate ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"\u230a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"g"),(0,m.kt)("mn",{parentName:"msub"},"2")),(0,m.kt)("mn",{parentName:"mrow"},"13"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"\u230b")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"3")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{\\lfloor log_2 13\\rfloor} = 3")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen"},"\u230a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"13"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"\u230b")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3")))))," times, i.e. (1 -> 4 -> 8). We skip 2 here because the bit is not set. This approach gives us ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," complexity."," "),(0,m.kt)("p",null,"To generalise it, for a positive integer ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),", we have"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168304432-fa9ac8bb-0eb9-49d9-bdcf-5e3509c1f835.png",alt:"image"})),(0,m.kt)("h3",{id:"c-implementation"},"C++ Implementation"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"long long fastpow(long long base, long long exp) {\n  long long res = 1;\n  while (exp > 0) {\n    // if n is odd, a ^ n can be seen as a ^ (n / 2) * a ^ (n / 2) * a\n    if (exp & 1) res *= base;\n    // if n is even, a ^ n can be seen as a ^ (n / 2) * a ^ (n / 2)\n    base *= base;\n    exp >>= 1;\n  }\n  return res;\n}\n")),(0,m.kt)("p",null,"In case you need to take mod."," "),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"long long modpow(long long base, long long exp, long long mod) {\n  base %= mod;\n  long long res = 1;\n  while (exp > 0) {\n    if (exp & 1) res = (res * base) % mod;\n    base = (base * base) % mod;\n    exp >>= 1;\n  }\n  return res;\n}\n\n")),(0,m.kt)("h3",{id:"suggested-problems"},"Suggested Problems"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"../../../solutions/0000-0099/pow-x-n-medium"},"0050 - Pow(x, n) (Medium)"))))}c.isMDXComponent=!0}}]);