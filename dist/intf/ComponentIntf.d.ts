/// <reference types="miniprogram-api-typings" />
import { ComponentInstanceMethods } from "./ComponentInstanceMethods";
/**
 * Component 接口
 *
 * @export
 * @abstract
 * @class ComponentIntf
 */
export declare abstract class ComponentIntf extends ComponentInstanceMethods implements WechatMiniprogram.Component.OtherOption, WechatMiniprogram.Component.Lifetimes {
    lifetimes: Partial<{
        created(): void;
        attached(): void;
        ready(): void;
        moved(): void;
        detached(): void;
        error(err: Error): void;
    }>;
    /**
     * 在组件实例刚刚被创建时执行，注意此时不能调用 `setData`
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    created(): void;
    /**
     * 在组件实例进入页面节点树时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    attached(): void;
    /**
     * 在组件在视图层布局完成后执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ready(): void;
    /**
     * 在组件实例被移动到节点树另一个位置时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    moved(): void;
    /**
     * 在组件实例被从页面节点树移除时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    detached(): void;
    /**
     * 每当组件方法抛出错误时执行
     *
     * @description 需要 `@lifetimes` 装饰器,如果不添加装饰器,事件将会被复制到method中
     * 最低基础库版本：[`2.4.1`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    error(err: Error): void;
    /** 类似于mixins和traits的组件间代码复用机制，参见 [behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html) */
    behaviors: string[];
    /**
     * 组件数据字段监听器，用于监听 properties 和 data 的变化，参见 [数据监听器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html)
     *
     * 最低基础库版本：[`2.6.1`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    observers: Record<string, (...args: any[]) => any>;
    /** 组件间关系定义，参见 [组件间关系](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html) */
    relations: {
        [componentName: string]: WechatMiniprogram.Component.RelationOption;
    };
    /** 组件接受的外部样式类，参见 [外部样式类](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html) */
    externalClasses?: string[];
    /** 组件所在页面的生命周期声明对象，参见 [组件生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)
     *
     * @description 可以通过 `@lifetimes` 装饰器,将成员方法复制到 `pageLifetimes` 对象内
     * 最低基础库版本： [`2.2.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) */
    pageLifetimes?: Partial<WechatMiniprogram.Component.PageLifetimes>;
    /** 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举） */
    options: WechatMiniprogram.Component.ComponentOptions;
    /** 定义段过滤器，用于自定义组件扩展，参见 [自定义组件扩展](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/extend.html)
     *
     * 最低基础库版本： [`2.2.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) */
    definitionFilter?: WechatMiniprogram.Component.DefinitionFilter;
}
//# sourceMappingURL=ComponentIntf.d.ts.map