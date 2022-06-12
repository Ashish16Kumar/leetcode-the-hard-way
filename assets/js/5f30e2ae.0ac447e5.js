"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4654],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return c}});var n=t(67294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),h=i(t),c=r,N=h["".concat(o,".").concat(c)]||h[c]||u[c]||m;return t?n.createElement(N,s(s({ref:e},l),{},{components:t})):n.createElement(N,s({ref:e},l))}));function c(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=t.length,s=new Array(m);s[0]=h;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:r,s[1]=p;for(var i=2;i<m;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},31745:function(a,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return N},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return h}});var n=t(87462),r=t(63366),m=(t(67294),t(3905)),s=t(8539),p=["components"],o={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-operations-to-halve-array-sum/"},i="2208 -  Minimum Operations to Halve Array Sum (Medium)",l={unversionedId:"2200-2299/minimum-operations-to-halve-array-sum-easy",id:"2200-2299/minimum-operations-to-halve-array-sum-easy",title:"2208 -  Minimum Operations to Halve Array Sum (Medium)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-operations-to-halve-array-sum/",source:"@site/solutions/2200-2299/2208-minimum-operations-to-halve-array-sum-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimum-operations-to-halve-array-sum-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-operations-to-halve-array-sum-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2208-minimum-operations-to-halve-array-sum-easy.md",tags:[],version:"current",sidebarPosition:2208,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-operations-to-halve-array-sum/"},sidebar:"tutorialSidebar",previous:{title:"2200 - 2299",permalink:"/leetcode-the-hard-way/solutions/category/2200---2299"},next:{title:"2209 - Minimum White Tiles After Covering With Carpets (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-white-tiles-after-covering-with-carpets-hard"}},u={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Max Heap",id:"approach-1-max-heap",level:2},{value:"Approach 2: Priority Queue",id:"approach-2-priority-queue",level:2}],c={toc:h};function N(a){var e=a.components,t=(0,r.Z)(a,p);return(0,m.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2208----minimum-operations-to-halve-array-sum-medium"},"2208 -  Minimum Operations to Halve Array Sum (Medium)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-operations-to-halve-array-sum/"},"https://leetcode.com/problems/minimum-operations-to-halve-array-sum/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.)"),(0,m.kt)("p",null,"Return the minimum number of operations to reduce the sum of nums by at least half."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [5,19,8,1]\nOutput: 3\nExplanation: The initial sum of nums is equal to 5 + 19 + 8 + 1 = 33.\nThe following is one of the ways to reduce the sum by at least half:\nPick the number 19 and reduce it to 9.5.\nPick the number 9.5 and reduce it to 4.75.\nPick the number 8 and reduce it to 4.\nThe final array is [5, 4.75, 4, 1] with a total sum of 5 + 4.75 + 4 + 1 = 14.75. \nThe sum of nums has been reduced by 33 - 14.75 = 18.25, which is at least half of the initial sum, 18.25 >= 33/2 = 16.5.\nOverall, 3 operations were used so we return 3.\nIt can be shown that we cannot reduce the sum by at least half in less than 3 operations.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [3,8,20]\nOutput: 3\nExplanation: The initial sum of nums is equal to 3 + 8 + 20 = 31.\nThe following is one of the ways to reduce the sum by at least half:\nPick the number 20 and reduce it to 10.\nPick the number 10 and reduce it to 5.\nPick the number 3 and reduce it to 1.5.\nThe final array is [1.5, 8, 5] with a total sum of 1.5 + 8 + 5 = 14.5. \nThe sum of nums has been reduced by 31 - 14.5 = 16.5, which is at least half of the initial sum, 16.5 >= 31/2 = 16.5.\nOverall, 3 operations were used so we return 3.\nIt can be shown that we cannot reduce the sum by at least half in less than 3 operations.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^7"))),(0,m.kt)("h2",{id:"approach-1-max-heap"},"Approach 1: Max Heap"),(0,m.kt)("p",null,"We can keep track of the current largest number, and perform the division on the largest number while keeping track of the sum"),(0,m.kt)(s.Z,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def halveArray(self, nums: List[int]) -> int:\n        s = sum(nums)\n        \n        target = s / 2\n        h = []\n        \n        for n in nums:\n            heappush(h, -n)\n            \n        val = s\n        res = 0\n        while(val > target):\n            res += 1\n            top = -(h[0] / 2)\n            val -= top\n            heappop(h)\n            heappush(h, - top)\n\n        return res\n")),(0,m.kt)("h2",{id:"approach-2-priority-queue"},"Approach 2: Priority Queue"),(0,m.kt)("p",null,"First we calculate ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"f")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"half")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ha"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"))))),". We use priority queue to store the elements. We pop out the maximum element ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"p")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"top")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"))))),", add the half of it (i.e. ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"top / 2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"mord"},"/2"))))),") to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"reduce")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"))))),", and push it to priority queue. We keep doing that until ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"reduce")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce")))))," is greater than / equal to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"f")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"half")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ha"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"))))),". The answer is how many rounds we have performed."),(0,m.kt)(s.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int halveArray(vector<int>& nums) {\n        int n = nums.size(), ans = 0;\n        // calculate the sum\n        long double sum = accumulate(nums.begin(), nums.end(), 0LL);\n        // calculate the half\n        long double half = sum / 2;\n        // init priority queue\n        priority_queue<double> pq;\n        for (auto x : nums) pq.push(x);\n        // used to compare with half\n        double reduce = 0;\n        // final goal: reduce >= half\n        while (reduce < half) {\n            // take the max one and pop it out\n            double top = pq.top(); pq.pop();\n            // add half of it\n            reduce += top / 2;\n            // push the half to the queue\n            pq.push(top / 2);\n            // 1 operation is done here\n            ans++;\n        }\n        return ans;\n    }\n};\n")))}N.isMDXComponent=!0},8539:function(a,e,t){t.d(e,{Z:function(){return r}});var n=t(67294);function r(a){var e=a.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",e))}}}]);