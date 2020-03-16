# 微信小程序 ts 风格开发框架

> 基于`gulp-task`全量编译小程序 ts 源码至 js 项目结构

> 实现原理:通过 ts 装饰器收集信息,在实例化时将对应属性注入到指定位置.

## usage

1. 实现并默认导出一个实现对应接口的 `class`,如:`export default class extents PageIntf {}`.
2. class 增加装饰器 `@page` or `@app` or `@component`
3. 属性字段. 需要增加 `@data` 或 `@property`(组件内) 注解, 增加后对应的 data 字段通过`Proxy` 关联至 **data** 或者 **globalData** 上。
4. 组件`Component` 针对不同生命周期事件,及其他`options` 增加额外的装饰器,引入即可在编译时,将对应事件挂载到对应属性上.
5. 组件非生命周期方法,默认添加到 **methods:{}** 中,可省略`@method` 装饰器

### 命名规则

### 注意

1. 要转换的模块写法格式应遵循 `export default class extents [Intf]` 形式,或在定义`class name` 时,避免占用微信变量,如 `App`、`Page`、`Component` 等.
2. 为了方便起见,library 中引入的为 `latest` 版本 API 包,当 library 需要更新时,触发检查将 `./node_modules` 目录下 npm 包复制到 `./library` 目录下.
3. Page 中的分享事件,因为对接官方接口的关系,默认处于一个定义的打开状态,如果需要禁用,需要增加 `@disableShare` 注解
4. 组件原生方法,如:`setData()`, 通过 `ComponentInstanceMethods.ts` 预留空方法使用.然后在编译/导出 options 前阶段,针对删除这些参数变量.

### example

```
// 基本用法

@app
export default class extends AppIntf {
  /**
   *
   */
  globalData: { [key: string]: any } = {};
}

// 实现一个 page.js
@page
export default class extends PageIntf {
  @data
  data1:any = null;
  @data
  data2:any = null;
  @data
  data3:any = null;
  // 剩下的就是Page相关的事件,可以从上层抽象类中查询
  onShow(){
    // setData - plan 1
    this.setData({data1:'xxx'});
    // setData - plan 2 (需要@data装饰器)
    this.data1 = xxx;
  }
}

```

## 实现方式

1. 通过 **glob** 按条件检索项目内的需要编译的 ts 文件
2. 编译流程: /src/\*\*.ts -> tsc bu

## 原生小程序使用

1. install `yarn add mini-frame-library --dev`
2. 实现 class
3. 使用 Mini.instantiation(default class) 或 增加 编译前预处理``(推荐)
