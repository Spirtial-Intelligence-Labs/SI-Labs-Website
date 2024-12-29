# VitePress 优化
## 1. 部分组件宽屏展示

### 方案一：使用通用选择器和 :has 伪类选择器
```
<style>
.parent {
    background-color: lightblue;
    padding: 20px;
}

.child {
    background-color: lightgreen;
    padding: 10px;
}

.parent:has(.child) {
    background-color: lightgray;
}
</style>

<div class="parent">
    <div class="child">
        <p>Hello, World!</p>
    </div>
</div>
```

> 在上面的示例中，我们通过给最近的父元素添加特定的样式来实现获取最近的父元素，但要排除当前元素。这里使用了 :has 伪类选择器，它可以选择具有指定后代的父元素。

### 方案二：使用 :not 伪类选择器

``` 
<style>
.parent {
    background-color: lightblue;
    padding: 20px;
}

.child {
    background-color: lightgreen;
    padding: 10px;
}

.parent:not(.child) {
    background-color: lightgray;
}
</style>

<div class="parent">
    <div class="child">
        <p>Hello, World!</p>
    </div>
</div>
```

> 在这个示例中，我们使用 :not 伪类选择器来排除当前元素的样式。这样我们就可以通过添加一个与当前元素相反的样式来实现获取最近的父元素。


[转载自](https://geek-docs.com/css/css-ask-answer/100_css_get_closest_parent_element_excluding_current_element_using_a_selector.html)

## 2. VitePress 框架部分原生代码失效

### 2.1 @keyframes 动画失效
> 在 animation 后添加 !important
