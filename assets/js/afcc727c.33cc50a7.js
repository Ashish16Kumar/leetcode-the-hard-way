"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5083],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,k=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},59738:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(8539),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/"},d="2200 - Find All K-Distant Indices in an Array (Easy)",u={unversionedId:"2100-2199/find-all-k-distant-indices-in-an-array-easy",id:"2100-2199/find-all-k-distant-indices-in-an-array-easy",title:"2200 - Find All K-Distant Indices in an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/",source:"@site/solutions/2100-2199/2200-find-all-k-distant-indices-in-an-array-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/find-all-k-distant-indices-in-an-array-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-all-k-distant-indices-in-an-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2200-find-all-k-distant-indices-in-an-array-easy.md",tags:[],version:"current",sidebarPosition:2200,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/"},sidebar:"tutorialSidebar",previous:{title:"2197 - Replace Non-Coprime Numbers in Array (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/replace-non-coprime-numbers-in-array-hard"},next:{title:"2201 - Count Artifacts That Can Be Extracted (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-artifacts-that-can-be-extracted-medium"}},p={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],m={toc:c};function k(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2200---find-all-k-distant-indices-in-an-array-easy"},"2200 - Find All K-Distant Indices in an Array (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/"},"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a ",(0,i.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," and two integers ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),". A ",(0,i.kt)("strong",{parentName:"p"},"k-distant index")," is an index ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," for which there exists at least one index ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," such that ",(0,i.kt)("inlineCode",{parentName:"p"},"|i - j| <= k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nums[j] == key"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"a list of all k-distant indices sorted in ",(0,i.kt)("strong",{parentName:"em"},"increasing order")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1\nOutput: [1,2,3,4,5,6]\nExplanation: Here, nums[2] == key and nums[5] == key.\n- For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.\n- For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.\n- For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.\n- For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.\n- For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.\n- For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.\n- For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.\nThus, we return [1,2,3,4,5,6] which is sorted in increasing order. \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,2,2,2,2], key = 2, k = 2\nOutput: [0,1,2,3,4]\nExplanation: For all indices i in nums, there exists some index j such that |i - j| <= k and nums[j] == key, so every index is a k-distant index. \nHence, we return [0,1,2,3,4].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," is an integer from the array ",(0,i.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k <= nums.length"))),(0,i.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,i.kt)("p",null,"Just do what it says."),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {\n        vector<int> ans;\n        int n = nums.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (abs(i - j) <= k && nums[j] == key) {\n                    ans.push_back(i);\n                    break;\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);