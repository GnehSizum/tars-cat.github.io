# ROS考核

<br />

## 话题通信

### 题目一：（自定义msg消息类型）
蒋院士看过电视剧《循环》后，经常陷入时间妄想。请告诉她此时的时间，以此打消顾虑。

> 要求使用ROS中message通信的方式，使用自定义msg完成任务。一个节点进行系统当前时间的发布，一个节点进行话题的接受，并打印于终端，话题频率为1hz。

#### 输出样例
	2022年5月1日22时00分01秒
	2022年5月1日22时00分02秒
	...

### 题目二：（同一个节点发布和接收同时存在）
设计三个节点，要求如下：
	
话题一号：接受话题三号发布的字符串类型的数字，判断其是否为一个偶数并将结果 "Ture"/"Fasle"（bool类型）发送给话题二号。
	
话题二号：接受话题一号发布的bool值，并根据其值在终端输出"Ture"/"Fasle" ，向话题三号发布int32类型的数字，数字以斐波那契数列的顺序发布，当发送的值大于12345时，数字归1重新开始发布。
	
话题三号：接受话题二号发布的int类型的值，转换为string类型，发布给话题一号。

> 注：涉及到的消息类型ROS中都有自带，但还是希望大家可以通过自定义消息类型的方式来完成任务。

​	![](https://s3.bmp.ovh/imgs/2022/05/01/ea3702ede64f28c1.png)

<br />

## 服务通信

### 题目三：（自定义srv消息类型）
姚院士喜欢去超市购物，但是总是忘记自己的余额是否能够支撑她的购物，请你帮她做出能否购买的决定。
		
> 现要求使用ROS中service通信的方式，使用自定义srv完成任务。姚院士现有500余额，当你发送购买的商品的金额后，会返回能否购买的提示。

#### 输入样例-1
	400
#### 输出样例-1
	可以购买
#### 输入样例-2
	600
#### 输出样例-2
	不可以购买
[参考教程](https://zhuanlan.zhihu.com/p/354665530)

<br />

## 动作通信

### 题目四：（自定义action）
设有一个奇怪的开水壶，它的烧水速度与初始温度有关。若初始温度低于50摄氏度，则它的水温增长符合y = y0+x^2(x>0);若初始温度高于50摄氏度，则它的水温增长符合y = y0+x(x>0);若水温高于100度，则保持一百摄氏度。
	
> 现要求使用ROS中action通信的方式，使用自定义action完成任务。发送初始水温后，可得到每秒的水温（时间从0秒开始，即0秒的水温是初始水温），水烧开则结束。

#### 输入样例：
	25
#### 输出样例：
	25
	26
	29
	34
	...
	100

[参考教程](https://zhuanlan.zhihu.com/p/366180924)