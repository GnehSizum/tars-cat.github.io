---
sidebar_position: 1
---

# Cpp考核

<br />

### 题目一

**输入两个字符串s1和s2，要求删除字符串s1中包含的所有子串s2，即输出结果中不能包含s2。**

输入格式：
> 输入两个不超过100个字符的、以空格结束的非空字符串，对应s1与s2。

输出格式：
> 在一行中输出删除s1中出现的所有s2后的结果字符串。

输入样例：

```
wo ai jlu-ai-lab
ai
```

输出样例：

```
wo  jlu--lab
```

<br />

### 题目二

**定义一个名为Integer的整数类，具有数据成员d和以下成员函数：GetD()获取d的值，SetD(int)设置d的值，IsOdd()判断d是否为偶数，IsPrime()判断d是否为素数。并编写主函数用一个对象分别设置d的值为16和31，测试这个类。**

输出样例：

```
num:16
IsOdd:1
IsPrime:0
num:31
IsOdd:0
IsPrime:1
```

<br />

### 题目三

**设计一个平面直线类Line，采用友元函数判断两条直线是平行还是相交，并采用友元函数计算二直线在相交时的交点坐标。再编写一个主函数进行测试。**

输入格式：
> 以采用直线一般式（ax+by+c=0）为例：<br />分别输入二直线的 a、b、c 。

输出格式：
> 输出二直线是否平行，若不平行，还需要输出二直线交点坐标。

输入样例：(2x-y+1=0 & -3x-y+4=0)

```
2
-1
1
-3
-1
4
```

输出样例：

```
false
(0.6,2.2)
```

<br />

### 题目四（图书管理系统）

**项目说明：设计一个图书管理系统，系统功能如下：**

1.用户借阅图书：主要包括可借书目查询、图书借阅、图书归还等功能。

2.图书管理员图书管理：主要包括图书的添加、删除、图书信息修改、查找图书、统计图书信息等功能。

3.系统管理员用户管理：主要包括用户注册、用户登录、修改用户密码、修改个人信息、设置用户类型等功能。

**考核要求：**

1.使用C/C++。

2.菜单设计：控制台要求显示菜单，通过输入菜单编号执行各功能。

3.用户区分：系统中用户分为：读者、图书管理员、系统管理员。要求在登录时进行区分。根据不同类型用户，登陆系统显示不同的功能菜单。

4.信息提示：借阅图书时，对所能借阅图书的最大数量给予提示，归还图书时，图书已超期需要提示。

5.数据管理：将用户信息、图书信息、借阅记录等保存到磁盘中，登录时加载，登出时存盘，保存数据。

6.要求定义使用图书管理系统中的User类、Book类、Log类。

7.使用各类库、容器、数组、链表等方法不限，均可自由发挥。