---
tags:
- note/literature
---

漫士对 [Bertrand Paradox](https://www.bilibili.com/video/BV1Vkz4YqEC9/?share_source=copy_web&vd_source=bb765b8b9b772ee1eabe70c4833388d1&t=515) 的讲解终于让我触及了这玄之又玄的理论。其实就一句话足以概括： *随机* 一词不够准确，于是产生了不同的观测方式。这里尝试解答视频最后留下的练习：

>[!question] 漫士视频中的练习
>计算 *三种采样方式* 的概率密度函数 $f(r,\theta)$.

***Solution*** 第三种采样方式最简单，就是单位圆上的均匀分布
$$
f_{R,\Theta}(r,\theta)= \frac{1}{\pi} \mathbf{1}_{D}(r,\theta)
$$
其中 $D$ 表示单位圆所在区域.

>[!question] 漫士视频中的概率分布函数
>对极坐标下的均匀分布产生疑问，尝试坐标变换计算：
>$$
>f_{X,Y}(x,y)= \frac{1}{\pi} \mathbf{1}_{D}(x,y)
>$$
>利用坐标变换公式：
>$$
>\begin{align}
>f_{R,\Theta}(r,\theta) & = \frac{1}{\pi} \frac{\partial f(x,y)}{\partial (r,\theta)} \mathbf{1}_{D}\left( r(x,y),\theta(x,y) \right)  \\
> & =\frac{r}{\pi} \mathbf{1}_{D}(r,\theta)
>\end{align}
>$$

*应该是视频里写错了*

<br>

计算第二种方法，用条件概率的方式
此时弦中点和内部的圆形成对应关系. 内部圆半径服从均匀分布
$$
f_{R}(r)=\mathbf{1}_{\left\{ 0<r<1 \right\}}(r)
$$

弦中点在内部圆周上均匀分布

$$
f_{\Theta|R}(\theta|r)= \frac{1}{2\pi} \mathbf{1}_{\left\{ 0<\theta<2\pi \right\} }
$$

于是可以得到联合分布

$$
\begin{align}
f_{R,\Theta}(r,\theta) & =f_{\Theta|R}(\theta|r) \cdot f_{R}(r) \\
 & =\frac{1}{2\pi} \mathbf{1}_{\left\{ 0<\theta<2\pi,\,0<r<1 \right\} }(r,\theta)
\end{align}
$$

<br>

计算第一种方法，先固定一点 $A(1,0)$. 设动点为 $B$，在极坐标意义下更容易求得圆周上的均匀分布：

$$
f_{\Theta}(\theta)= \frac{1}{2\pi} \mathbf{1}_{\left\{ 0<\theta <2\pi \right\} }(\theta)
$$

对应 $B$ 点坐标 $\left( \cos\Theta,\sin\Theta \right)$，于是中点坐标 $\left( \dfrac{\cos\Theta}{2}, \dfrac{1+\sin\Theta}{2} \right)$

>把一维变成二维？利用对称性降维了，还是要利用条件分布。先找出 $R$ 的分布，再结合幅角 $\Theta$ 的分布算出联合分布。

将动点 $B$ 的幅角重新记为 $U$

$$
f_{U}(u)= \frac{1}{2\pi} \mathbf{1}_{\left\{ 0<u<2\pi \right\} }(u)
$$

使用勾股定理得到 $R$ 和 $U$ 的关系

$$
\begin{align}
R^{2} & =1-\left( \frac{l_{AB}}{2} \right) ^{2} \\
 & =1-\frac{1}{4} \left[ \left( 1-\cos U \right) ^{2}+ \sin ^{2} U \right]  \\
 & =1-\frac{1}{4} \left( 2-2\cos U \right)  \\
 & =\frac{1}{2}+\frac{1}{2}\cos U \\
\implies \cos U & = 2R^{2}-1
\end{align}
$$

使用坐标变换公式

$$
\begin{align}
f_{R}(r)\mathcal{d}r & =\mathbf{P}\left\{ R=r \right\}  \\
 & =\mathbf{P}\left\{ U=\arccos \left( 2r^{2}-1 \right)  \right\} + \mathbf{P}\left\{ U=2\pi-\arccos \left( 2r^{2}-1 \right)\right\}  \\
 & =2 \cdot \frac{1}{2\pi} \cdot \left| \frac{\mathcal{d}}{\mathcal{d}r} \, \arccos \left( 2r^{2}-1 \right) \right| \mathcal{d}r \\
 & = \frac{1}{\pi} \cdot \frac{1}{\sqrt{ 1-\left( 2r^{2}-1 \right) ^{2} }} \cdot 4r \,\mathcal{d}r \\
 & = \frac{1}{\pi} \cdot \frac{1}{\sqrt{ 4r^{2}-4r^{4} }} \cdot 4r \,\mathcal{d}r \\
 & = \frac{1}{\pi} \cdot \frac{1}{2r\sqrt{ 1-r^{2} }} \cdot 4r \,\mathcal{d}r \\
 & =\frac{1}{\pi} \frac{2}{\sqrt{ 1-r^{2} }} \,\mathcal{d}r
\end{align}
$$

结合条件概率

$$
f_{\Theta|R}(\theta|r)=\frac{1}{2\pi} \mathbf{1}_{\left\{ 0<\theta<2\pi \right\} }(\theta)
$$

于是有

$$
\begin{align}
f_{R,\Theta}(r,\theta) & = f_{\Theta|R}(\theta|r) \cdot f_{R}(r) \\
 & = \frac{1}{\pi^{2}\sqrt{ 1-r^{2} }}
\end{align}
$$

back to [[Bertrand Paradox]]