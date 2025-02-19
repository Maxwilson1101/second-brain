---
tags:
- note/literature
---

>[!quote] Understanding Analysis, Page 2
>Prior to the preceding discovery, it was an assumed and commonly used fact that, given two line segments $AB$ and $CD$, it would always be possible to find a third line segment whose length divides evenly into the first two.
>...
>Because *the Pythagoreans* implicitly interpreted number to mean rational number, they were forced to accept that number was a strictly weaker notion than length.

对于中考，**几何**是更加重要的考点，代数性质对于一般初中生的心智水平来说还是难以接受。

>一方面，用文字描述 *交换律*、*分配律* 和 *结合律* 的内容，似乎让数学变成 *背诵数学*。另一方面几何性质更为直观，只需画图就可以 check 定理的正确性（也许不会严格证明，但是作图的 cost 十分廉价）。可以尝试从几何角度引入 *rational numbers* 以及 *irrational numbers*。

从几何角度引入 *rational numbers* 并非易事。（*The Elements* 关于比例的章节是最难的一部分）考虑如下问题：

>[!question] Least Multipliers
>给定两条长度不等的线段 $a$ 和 $b$。你能做的操作：**将线段延长整数倍**。将线段 $a$ 和 $b$ 的头对齐后，从尾方向分别延长一定倍数。
>问：是否存在一种方案，让延长后的尾端点 *齐平* ？

（假定 $a$ 和 $b$ 是整数）这个问题可以从几何角度引入最小公倍数的概念。

>通过作图可以观察到：要使得尾端点齐平，似乎会陷入一种“周期”现象。只有不断重复 *最小公倍数* 才能让尾端点齐平。

由于还没翻阅完 *The Elements, Book 5*，书中是如何从几何角度考察比例问题还不得而知。不过可以肯定的是：我可以把这个例子做得更加完善，从纯几何的角度引出有理数——比例。

---
从这个问题出发，还可以引出 *irrational numbers* 的概念。把 $a$ 和 $b$ 是整数的假设弱化，对于更一般的 *数* 来说，一定存在某种方案让延长后的尾端点 *齐平* 吗？届时，可以引出问题：

>[!question] $\sqrt{ 2 }$ 是有理数吗？

---
同时，还能引出尺规作图问题：如何将线段延长整数倍？

>[!hint] The Elements, Proposition 2
>仅靠圆规截取定长线段是不严谨的。你可能在“平移”的过程中改变截取的长度。对尺规作图严格化描述。