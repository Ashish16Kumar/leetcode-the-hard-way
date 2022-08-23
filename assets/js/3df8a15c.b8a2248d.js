"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2889],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44579:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r,o=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/palindrome-linked-list/",tags:["Linked List","Two Pointers","Stack","Recursion"]},p="0234 - Palindrome Linked List (Easy)",d={unversionedId:"0200-0299/palindrome-linked-list-easy",id:"0200-0299/palindrome-linked-list-easy",title:"0234 - Palindrome Linked List (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/palindrome-linked-list/",source:"@site/solutions/0200-0299/0234-palindrome-linked-list-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/palindrome-linked-list-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/palindrome-linked-list-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0234-palindrome-linked-list-easy.md",tags:[{label:"Linked List",permalink:"/leetcode-the-hard-way/solutions/tags/linked-list"},{label:"Two Pointers",permalink:"/leetcode-the-hard-way/solutions/tags/two-pointers"},{label:"Stack",permalink:"/leetcode-the-hard-way/solutions/tags/stack"},{label:"Recursion",permalink:"/leetcode-the-hard-way/solutions/tags/recursion"}],version:"current",sidebarPosition:234,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/palindrome-linked-list/",tags:["Linked List","Two Pointers","Stack","Recursion"]},sidebar:"tutorialSidebar",previous:{title:"0231 - Power of Two (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/power-of-two-easy"},next:{title:"0242 - Valid Anagram (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/valid-anagram-easy"}},u={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Fast &amp; Slow Pointers",id:"approach-1-fast--slow-pointers",level:2},{value:"Approach 2: Convert it to String",id:"approach-2-convert-it-to-string",level:2}],m=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0234---palindrome-linked-list-easy"},"0234 - Palindrome Linked List (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," of a singly linked list, return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if it is a palindrome."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: head = [1,2,2,1]\nOutput: true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: head = [1,2]\nOutput: false\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of nodes in the list is in the range ",(0,i.kt)("inlineCode",{parentName:"li"},"[1, 105]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 9"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Follow up:")," Could you do it in ",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)")," time and ",(0,i.kt)("inlineCode",{parentName:"p"},"O(1)")," space?"),(0,i.kt)("h2",{id:"approach-1-fast--slow-pointers"},"Approach 1: Fast & Slow Pointers"),(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        // find the middle node\n        ListNode *fast = head;\n        ListNode *slow = head;\n        while(fast && fast->next) {\n            fast = fast->next->next;\n            slow = slow->next;\n        }\n        // handle odd case\n        if(fast) slow = slow->next;\n        // reverse the last half of the list\n        ListNode *node = slow;\n        ListNode *last = nullptr;\n        ListNode *next = nullptr;\n        while(node){\n            next = node->next;\n            node->next = last;\n            last = node;\n            node = next;\n        }\n        // compare each half of the list\n        node = last;\n        while(node){\n            if (node->val == head->val) node = node->next, head = head->next;\n            else return false;\n        }\n        return true;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-convert-it-to-string"},"Approach 2: Convert it to String"),(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        // convert it to a string\n        string s;\n        while (head != NULL) {\n            s += head->val;\n            head = head->next;\n        }\n        // test if a string is palindrome\n        string t = s;\n        reverse(t.begin(), t.end());\n        return s == t;\n    }\n};\n")))}f.isMDXComponent=!0}}]);