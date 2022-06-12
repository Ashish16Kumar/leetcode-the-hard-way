"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9387],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,k=h["".concat(l,".").concat(u)]||h[u]||c[u]||s;return a?n.createElement(k,o(o({ref:t},i),{},{components:a})):n.createElement(k,o({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19157:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=a(8539),m=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/find-players-with-zero-or-one-losses/"},p="2225 - Find Players With Zero or One Losses (Medium)",i={unversionedId:"2200-2299/find-players-with-zero-or-one-losses-medium",id:"2200-2299/find-players-with-zero-or-one-losses-medium",title:"2225 - Find Players With Zero or One Losses (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-players-with-zero-or-one-losses/",source:"@site/solutions/2200-2299/2225-find-players-with-zero-or-one-losses-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/find-players-with-zero-or-one-losses-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/find-players-with-zero-or-one-losses-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2225-find-players-with-zero-or-one-losses-medium.md",tags:[],version:"current",sidebarPosition:2225,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-players-with-zero-or-one-losses/"},sidebar:"tutorialSidebar",previous:{title:"2224 - Minimum Number of Operations to Convert Time (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-number-of-operations-to-convert-time-easy"},next:{title:"2226 - Maximum Candies Allocated to K Children (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-candies-allocated-to-k-children-medium"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],u={toc:h};function k(e){var t=e.components,a=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2225---find-players-with-zero-or-one-losses-medium"},"2225 - Find Players With Zero or One Losses (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-players-with-zero-or-one-losses/"},"https://leetcode.com/problems/find-players-with-zero-or-one-losses/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given an integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"matches")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"matches[i] = [winneri, loseri]")," indicates that the player ",(0,s.kt)("inlineCode",{parentName:"p"},"winneri")," defeated player ",(0,s.kt)("inlineCode",{parentName:"p"},"loseri")," in a match."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"a list")," ",(0,s.kt)("inlineCode",{parentName:"p"},"answer")," ",(0,s.kt)("em",{parentName:"p"},"of size")," ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," ",(0,s.kt)("em",{parentName:"p"},"where:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"answer[0]")," is a list of all players that have ",(0,s.kt)("strong",{parentName:"li"},"not")," lost any matches."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"answer[1]")," is a list of all players that have lost exactly ",(0,s.kt)("strong",{parentName:"li"},"one")," match.")),(0,s.kt)("p",null,"The values in the two lists should be returned in ",(0,s.kt)("strong",{parentName:"p"},"increasing")," order."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You should only consider the players that have played ",(0,s.kt)("strong",{parentName:"li"},"at least one")," match."),(0,s.kt)("li",{parentName:"ul"},"The testcases will be generated such that ",(0,s.kt)("strong",{parentName:"li"},"no")," two matches will have the ",(0,s.kt)("strong",{parentName:"li"},"same")," outcome.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]\nOutput: [[1,2,10],[4,5,7,8]]\nExplanation:\nPlayers 1, 2, and 10 have not lost any matches.\nPlayers 4, 5, 7, and 8 each have lost one match.\nPlayers 3, 6, and 9 each have lost two matches.\nThus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: matches = [[2,3],[1,3],[5,4],[6,4]]\nOutput: [[1,2,5,6],[]]\nExplanation:\nPlayers 1, 2, 5, and 6 have not lost any matches.\nPlayers 3 and 4 each have lost two matches.\nThus, answer[0] = [1,2,5,6] and answer[1] = [].\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= matches.length <= 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"matches[i].length == 2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= winneri, loseri <= 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"winneri != loseri")),(0,s.kt)("li",{parentName:"ul"},"All ",(0,s.kt)("inlineCode",{parentName:"li"},"matches[i]")," are ",(0,s.kt)("strong",{parentName:"li"},"unique"),".")),(0,s.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,s.kt)("p",null,"Check the number of times to lose for each player. If it is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),", then this player belongs to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans[0]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". If it is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),", then it belongs to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans[1]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"."),(0,s.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> findWinners(vector<vector<int>>& matches) {\n        vector<vector<int>> ans(2);\n        unordered_map<int, int> lost;\n        // calculate lost matches\n        for (auto x : matches) {\n            if (!lost.count(x[0])) lost[x[0]] = 0;\n            if (!lost.count(x[1])) lost[x[1]] = 0;\n            lost[x[1]]++;\n        }\n        // categorise players\n        for (auto x : lost) {\n            int who = x.first, lostMatches = x.second;\n            if (lostMatches == 0) ans[0].push_back(who);\n            else if (lostMatches == 1) ans[1].push_back(who);\n        }\n        // the values in the two lists should be returned in increasing order \n        sort(ans[0].begin(), ans[0].end());\n        sort(ans[1].begin(), ans[1].end());\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0},8539:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",t))}}}]);