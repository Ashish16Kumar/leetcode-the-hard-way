"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9232],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},h),{},{components:n})):r.createElement(f,l({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Breadth First Search (BFS)",description:"In BFS, we explore all the closest nodes first before going one step further.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","breadth first search","bfs","algorithm"]},s=void 0,u={unversionedId:"graph-theory/breadth-first-search",id:"graph-theory/breadth-first-search",title:"Breadth First Search (BFS)",description:"In BFS, we explore all the closest nodes first before going one step further.",source:"@site/tutorials/graph-theory/breadth-first-search.md",sourceDirName:"graph-theory",slug:"/graph-theory/breadth-first-search",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/breadth-first-search",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/graph-theory/breadth-first-search.md",tags:[],version:"current",frontMatter:{title:"Breadth First Search (BFS)",description:"In BFS, we explore all the closest nodes first before going one step further.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","breadth first search","bfs","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/introduction"},next:{title:"Depth First Search (DFS)",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/depth-first-search"}},h={},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This tutorial is written by @heiheihang")),(0,a.kt)("p",null,"In Breadth-First Search (BFS), we explore ",(0,a.kt)("strong",{parentName:"p"},"all")," the closest nodes first before going one step further. A good example would be:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Given a binary tree, find the ",(0,a.kt)("strong",{parentName:"p"},"closest node")," from ",(0,a.kt)("strong",{parentName:"p"},"root")," that has the ",(0,a.kt)("strong",{parentName:"p"},"value 3"))),(0,a.kt)("p",null,"Of course, you may use DFS to find the solution by iterating all nodes. However, as you can imagine, if the target node is the right child of the root, we have wasted so much time iterating the entire left branch of the root!"),(0,a.kt)("p",null,"BFS would immediately locate the closest target node without wasting time iterating deeper nodes."),(0,a.kt)("p",null,"We will introduce the following template for BFS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def findTargetNode(root, targetValue):\n    if(root is None):\n        return None\n    \n    #currentLevel contains the nodes with the same distance to root (closest so far)\n    currentLevel = [root]\n    \n    #we increase our depth one by one as long as there is still node\n    while(len(level) > 0):\n    \n        #we store the current level node's children in nextLevel\n        nextLevel = []\n        \n        for node in currentLevel:\n            #skip if the node is None\n            if(node is None):\n                continue\n            #we can be sure the target node is the CLOSEST so we can return\n            #because we are traversing the tree level by level\n            if(node.val == targetValue):\n                return node\n                \n            #add the children to nextLevel\n            nextLevel.append(node.left)\n            nextLevel.append(node.right)\n        #change the currentLevel to nextLevel (no target node in this level, go next)\n        currentLevel = nextLevel\n    \n    #if no target node has been returned    \n    return None\n    \n    \n")),(0,a.kt)("p",null,"In general, we use a ",(0,a.kt)("strong",{parentName:"p"},"queue")," to model ",(0,a.kt)("strong",{parentName:"p"},"BFS.")," As the head of the queue represents the closest nodes, and the tail of the queue represents the furthest nodes. We look at the head of the queue, and add new nodes to the end of the queue."),(0,a.kt)("p",null,"We can start applying this template to the following problem (",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/average-of-levels-in-binary-tree/"},"LeetCode Link"),")."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,a.kt)("em",{parentName:"p"},"the average value of the nodes on each level in the form of an array"),". Answers within ",(0,a.kt)("inlineCode",{parentName:"p"},"10-5")," of the actual answer will be accepted.")),(0,a.kt)("p",null,"In this problem, our primary goal is to separate the tree into different levels. For example, we have these following levels:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"[1]")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"[2,3]")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"[4, _, 3, 5]"))),(0,a.kt)("p",null,"When we can separate the tree into different levels, we are just one step before obtaining the solution (which is just getting the averages of each list)"),(0,a.kt)("p",null,"The challenge here is how can we separate the tree into different levels. We can use the template above with ",(0,a.kt)("inlineCode",{parentName:"p"},"currentLevel")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nextLevel"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def findAverageOfLevels(root):\n\n    answer = []\n    \n    #saves the nodes in the currentLevel\n    currentLevel = [root]\n    \n    #continue traversing as long as there is still unexplored nodes\n    while(len(level) > 0):\n    \n        #stores the children of the nodes in the currentLevel\n        nextLevel = []\n        \n        #stores the total sum of the currentLevel nodes\n        currentLevelSum = 0\n        for node in currentLevel:\n            if(node is None):\n                continue\n            currentLevelSum += node.val\n            nextLevel.append(node.left)\n            nextLevel.append(node.right)\n        \n        #calculate the level average\n        currentLevelNodeCount = len(currentLevel)\n        currentLevelAverage = currentLevelSum / currentLevelNodeCount\n        answer.append(currnetLevelAverage)\n        \n        #explore the nextLevel\n        currentLevel = nextLevel\n    return answer\n")),(0,a.kt)("p",null,"We should keep practising the this template of BFS in these similar problems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Binary Tree Right Side View (",(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-right-side-view/"},"LeetCode Link"),") (Guide)"),(0,a.kt)("li",{parentName:"ul"},"Binary Tree Zigzag Level Order Traversal (",(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},"LeetCode Link"),") (Guide)"),(0,a.kt)("li",{parentName:"ul"},"Symmetric Tree (",(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/symmetric-tree/"},"LeetCode Link"),") (Guide)")))}d.isMDXComponent=!0}}]);