"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4391],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,c=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?i.createElement(c,r(r({ref:t},m),{},{components:n})):i.createElement(c,r({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var i=n(87462),a=n(63366),l=(n(67294),n(3905)),r=n(8539),o=["components"],s={description:"Author: @heiheihang | https://leetcode.com/problems/design-bitset/"},p="2166 - Design Bitset (Medium)",m={unversionedId:"2100-2199/design-bitset-medium",id:"2100-2199/design-bitset-medium",title:"2166 - Design Bitset (Medium)",description:"Author: @heiheihang | https://leetcode.com/problems/design-bitset/",source:"@site/solutions/2100-2199/2166-design-bitset-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/design-bitset-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/design-bitset-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2166-design-bitset-medium.md",tags:[],version:"current",sidebarPosition:2166,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/design-bitset/"},sidebar:"tutorialSidebar",previous:{title:"2165 - Smallest Value of the Rearranged Number (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/smallest-value-of-the-rearranged-number-medium"},next:{title:"2167 - Minimum Time to Remove All Cars Containing Illegal Goods (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-time-to-remove-all-cars-containing-illegal-goods-hard"}},d={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Class Implementation",id:"approach-1-class-implementation",level:2}],f={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2166---design-bitset-medium"},"2166 - Design Bitset (Medium)"),(0,l.kt)("h2",{id:"problem-link"},"Problem Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/design-bitset/"},"https://leetcode.com/problems/design-bitset/")),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"Bitset")," is a data structure that compactly stores bits."),(0,l.kt)("p",null,"Implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"Bitset")," class:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bitset(int size)")," Initializes the Bitset with ",(0,l.kt)("inlineCode",{parentName:"li"},"size")," bits, all of which are ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void fix(int idx)")," Updates the value of the bit at the index ",(0,l.kt)("inlineCode",{parentName:"li"},"idx")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),". If the value was already ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),", no change occurs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void unfix(int idx)")," Updates the value of the bit at the index ",(0,l.kt)("inlineCode",{parentName:"li"},"idx")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),". If the value was already ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", no change occurs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void flip()")," Flips the values of each bit in the Bitset. In other words, all bits with value ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," will now have value ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," and vice versa."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"boolean all()")," Checks if the value of ",(0,l.kt)("strong",{parentName:"li"},"each")," bit in the Bitset is ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),". Returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if it satisfies the condition, ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"boolean one()")," Checks if there is ",(0,l.kt)("strong",{parentName:"li"},"at least one")," bit in the Bitset with value ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),". Returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if it satisfies the condition, ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int count()")," Returns the ",(0,l.kt)("strong",{parentName:"li"},"total number")," of bits in the Bitset which have value ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String toString()")," Returns the current composition of the Bitset. Note that in the resultant string, the character at the ",(0,l.kt)("inlineCode",{parentName:"li"},"ith")," index should coincide with the value at the ",(0,l.kt)("inlineCode",{parentName:"li"},"ith")," bit of the Bitset.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input\n["Bitset", "fix", "fix", "flip", "all", "unfix", "flip", "one", "unfix", "count", "toString"]\n[[5], [3], [1], [], [], [0], [], [], [0], [], []]\nOutput\n[null, null, null, null, false, null, null, true, null, 2, "01010"]\n\nExplanation\nBitset bs = new Bitset(5); // bitset = "00000".\nbs.fix(3);     // the value at idx = 3 is updated to 1, so bitset = "00010".\nbs.fix(1);     // the value at idx = 1 is updated to 1, so bitset = "01010". \nbs.flip();     // the value of each bit is flipped, so bitset = "10101". \nbs.all();      // return False, as not all values of the bitset are 1.\nbs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = "00101".\nbs.flip();     // the value of each bit is flipped, so bitset = "11010". \nbs.one();      // return True, as there is at least 1 index with value 1.\nbs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = "01010".\nbs.count();    // return 2, as there are 2 bits with value 1.\nbs.toString(); // return "01010", which is the composition of bitset.\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= size <= 105")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= idx <= size - 1")),(0,l.kt)("li",{parentName:"ul"},"At most ",(0,l.kt)("inlineCode",{parentName:"li"},"105")," calls will be made ",(0,l.kt)("strong",{parentName:"li"},"in total")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"fix"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"unfix"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"flip"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"all"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"one"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"count"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"toString"),"."),(0,l.kt)("li",{parentName:"ul"},"At least one call will be made to ",(0,l.kt)("inlineCode",{parentName:"li"},"all"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"one"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"count"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},"toString"),"."),(0,l.kt)("li",{parentName:"ul"},"At most ",(0,l.kt)("inlineCode",{parentName:"li"},"5")," calls will be made to ",(0,l.kt)("inlineCode",{parentName:"li"},"toString"),".")),(0,l.kt)("h2",{id:"approach-1-class-implementation"},"Approach 1: Class Implementation"),(0,l.kt)("p",null,"In general, we need to keep track of 3 things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The state of the bits"),(0,l.kt)("li",{parentName:"ul"},"The number of 1s"),(0,l.kt)("li",{parentName:"ul"},"Flipped or not")),(0,l.kt)("p",null,"We first consider the ",(0,l.kt)("inlineCode",{parentName:"p"},"flip")," function first. The naive way to perform ",(0,l.kt)("inlineCode",{parentName:"p"},"flip")," is to iterate over the ",(0,l.kt)("inlineCode",{parentName:"p"},"bits")," and change all the bits. This takes ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"N"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))," time and is too slow. We instead use a state called ",(0,l.kt)("inlineCode",{parentName:"p"},"flipped")," to store the state whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"bits")," are flipped or not. When we call ",(0,l.kt)("inlineCode",{parentName:"p"},"flip"),", the new number of 1s in ",(0,l.kt)("inlineCode",{parentName:"p"},"bits")," becomes the old number of 0s in ",(0,l.kt)("inlineCode",{parentName:"p"},"bits"),", which can be calculated by ",(0,l.kt)("inlineCode",{parentName:"p"},"len(bits) - ones"),"."),(0,l.kt)("p",null,"We then consider ",(0,l.kt)("inlineCode",{parentName:"p"},"fix")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"unfix"),". These two functions require certain condition of the target bit to activate. If we want to check a bit is ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," or not, we have two possibilities"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"target bit is ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"flipped = True")),(0,l.kt)("li",{parentName:"ul"},"target bit is ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"flipped = False"))),(0,l.kt)("p",null,"Then we update the target bit and ",(0,l.kt)("inlineCode",{parentName:"p"},"ones")," accordingly."),(0,l.kt)("p",null,"Similar logic applies to ",(0,l.kt)("inlineCode",{parentName:"p"},"toString")," that we need to accommodate the state of ",(0,l.kt)("inlineCode",{parentName:"p"},"flipped")),(0,l.kt)(r.Z,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class Bitset:\n\n    def __init__(self, size: int):\n        \n        #record the state of the bit\n        self.bits = [0] * size\n        \n        #record the number of ones\n        self.ones = 0\n        \n        #record if flip is called\n        self.flipped = False\n        \n\n    def fix(self, idx: int) -> None:\n        \n        #we need to check if the target bit is 0 (if not flipped -> 0) or 1 (if flipped -> 0)\n        if(self.bits[idx] == 0 and not self.flipped or self.bits[idx] == 1 and self.flipped):\n            \n            #add 1 to ones if it is 0 (after considering flip)\n            self.ones += 1\n            \n            #change its state\n            self.bits[idx] = (self.bits[idx] + 1) % 2\n    \n    \n    def unfix(self, idx: int) -> None:\n        \n        #we need to check if the target bit is 1 (if not flipped -> 1) or 0 (if flipped -> 1)\n        if(self.bits[idx] == 1 and not self.flipped or self.bits[idx] == 0 and self.flipped):\n            \n            #decrease 1 to ones if it is 1 (after considering flip)\n            self.ones -= 1\n            \n            #change its state\n            self.bits[idx] = (self.bits[idx] + 1) % 2\n\n    #this needs to be O(1)!\n    def flip(self) -> None:\n        \n        #we reverse the number of ones after flip\n        self.ones = len(self.bits) - self.ones\n        \n        #update the state of flipped\n        if(self.flipped):\n            self.flipped = False\n        else:\n            self.flipped = True\n    \n    def all(self) -> bool:\n        \n        #check if number of ones equals to the length of bits\n        if(self.ones == len(self.bits)):\n            return True\n        return False\n\n    def one(self) -> bool:\n        \n        #check if there is at least one 1\n        if(self.ones > 0):\n            return True\n        return False\n\n    def count(self) -> int:\n        \n        #return the number of ones\n        return self.ones\n\n    def toString(self) -> str:\n        \n        #initialize the result\n        res = []\n        \n        if(self.flipped):\n            \n            for i in range(len(self.bits)):\n                \n                #if flipped, we need to put the reverse of the bit to result\n                res.append(str((self.bits[i] + 1) % 2))\n        else:\n            for i in range(len(self.bits)):\n                \n                #put the bit to result\n                res.append(str(self.bits[i]))\n                \n        #return the string of list\n        return "".join(res)\n')))}c.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(67294);function a(e){var t=e.name;return i.createElement("div",{className:"solution-author-wrapper"},i.createElement("span",null,"This solution is written by ",t))}}}]);