print('hello')

a = 88
if a >= 0:
  print('yes')
else:
  print('no')

quote = '他说："Python 真好玩！"'
print(quote)

name = '小猫'
age = 3
print(f'[名字是{name:^10}]')

intro = f'我叫{name}, 今年 {age} 岁'
print(intro)

rate = 3.24345346
print(f'rate:{rate:.2f}')
print(f'per:{rate:.1%}')

print(('1','2','3','4'))
print(['1','2','3','4'])

# names_list = [f'user_{i}' for i in range(1000000)]
# names_set = set(names_list)
# print('user_99999' in names_list)
# print('user_99999' in names_set)

t = ()
if t:
  print('true')
else:
  print('false')


for i in 'letter':
  print(i)

users = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25},
    {'name': 'Carol', 'age': 28},
]
def print_users(u):
  for item in u:
    s = f'{item['name']}: {item['age']}'
    print(s)
print_users(users)

# 按年龄排序——临时写个 lambda 当 key
sorted_users = sorted(users, key=lambda u: u['age'])
nums = [45,75,99,63]
nums.sort()
print(nums)


# 1、字符串创建迭代器对象
str1 = 'liangdianshui'
iter1 = iter(str1)

# 2、list 对象创建迭代器
list1 = [1, 2, 3, 4]
iter2 = iter(list1)

# 3、tuple 对象创建迭代器
tuple1 = (1, 2, 3, 4)
iter3 = iter(tuple1)

# for 循环遍历迭代器对象
for x in iter1:
    print(x, end=' ', flush=True)

print('\n------------------------')

# next() 函数遍历迭代器
while True:
    try:
        print(next(iter3))
    except StopIteration:
        break


lines = iter(['a', 'b', 'c'])
print(list(lines))   # ['a', 'b', 'c']
print(list(lines))   # []  ← 不是 bug，是迭代器已经耗尽了
list1 = [x * x for x in range(1,11)] # 要生成的元素放在最前 然后for 然后条件
print(list1, end=' ')
list3 = [x * x for x in range(1,11) if x % 2 == 0] # 要生成的元素放在最前 然后for 然后条件
print(list3, end=' ')
list2 = [(x,y) for x in range(1,3) for y in range(1,5)]
print(list2, end=' ')
gen = ((x + 1) * (x + 1) for x in range(10))
print(max(gen))
def fibon(n):
    a = b = 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for x in fibon(10):
    print(x, end=' ')


class Person:
   species = '人类'

   def __init__(self, name, age):
      self.name = name
      self.age = age

   def greet(self):
    print(f'你好{self.name}')
p = Person('小猫', 3.5)
print(p.species)
p.greet()

class Student(Person):
   pass
s = Student('小明', 18)
s.greet()

import math
print(math.pi)

from math import sqrt
print(sqrt(5))

import datetime as dt
print(dt.date(2026, 1, 1))

print(__name__)

# _ 内部使用  __名字改写 类内部使用 __abc__ 特殊变量/魔法方法
def _diamond_vip(lv):
   print('钻石会员')
   return f'DiamondVIP{lv}'

def _gold_vip(lv):
   print('黄金会员')
   return f'GoldVIP{lv}'

def vip_lv_name(lv):
    if lv == 1:
      print(_diamond_vip(lv))
    else:
       print(_gold_vip(lv))

vip_lv_name(2)

import random
# random.seed(42)
print(random.randint(1,10))
print(random.choice([1,4,5,7]))

import json
jsonData = {'name': 'alice', 'age': 18}
jsonStr = json.dumps(jsonData) # json转为字符串 dumps
print(type(jsonStr))
strToJson = json.loads(jsonStr)
print(type(strToJson)) # 字符串转json loads


class User:
    pass

print(dir(User()))

class Book:
  def __init__(self, title):
    self.title = title
  def __repr__(self):
     return f'Book(title={self.title!r})'
  def __str__(self):
     return self.title
b = Book('入门到放弃')
print(b)
print(repr(b))
print([b])

class Stack:
    def __init__(self, items):
        self.items = items
    def __getitem__(self, i):
        return self.items[i]
    def __setitem__(self, i, v):
       self.items[i] = v

s = Stack(['a', 'b', 'c'])
print(s[0])
print(s[-1])
s[2] = '2'

for i in s:
   print(i)

class Vec2:
    def __init__(self, x , y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vec2(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f'Vec2({self.x}, {self.y})'
v1 = Vec2(1,2)
v2 = Vec2(3,4)
v3 = v1 + v2
print(v3)
print(v1)

from enum import Enum,unique, auto
@unique
class Color(Enum):
   RED = auto()
  #  RED_COPY = 1 // 强制值唯一

for i in Color:
   print(i.name, i.value)
print(Color.RED.value)


class Hello:
   def hi(self, name='xm'):
      print(f'hello,{name}!')
h = Hello()
h.hi()
# print(h)
# print(type(h))
# print(type(Hello))
# print(Hello.__class__)

# Hello1与Hello完全等价 使用type()定义
def hello_say(self, name = 'xm'):
   print(f'hello,{name}!')
Hello1 = type('Hello1', (object,), {'hi': hello_say})
h1 = Hello1()
h1.hi()

def __init__(self, name):
   self.name = name

def greet(self):
   print(f'你好,我是{self.name}')
Person1 = type('Person1', (object,), {
   '__init__': __init__,
   'greet': greet
})
p = Person1('小明')
p.greet()

