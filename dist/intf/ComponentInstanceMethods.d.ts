/// <reference types="miniprogram-api-typings" />
/**
 *
 * 组件实例支持方法
 * @description 这里是组件的原生方法,如 setData(). 这里留一个空方法壳子,编译时根据prototype移除对应function ,(因为没有想到其他不影响小程序代码结构的方法实现ts下,通过this 调用对象方法)
 * @export
 * @class ComponentSysFunc
 * @implements {WechatMiniprogram.Component.InstanceMethods<Object>}
 */
export declare class ComponentInstanceMethods implements WechatMiniprogram.Component.InstanceMethods<Object> {
    /** 原生方法引用 - 编译时移除 */
    setData(data: Partial<{}> & Record<string, any>, callback?: (() => void) | undefined): void;
    /** 原生方法引用 - 编译时移除 */
    hasBehavior(behavior: object): void;
    /** 原生方法引用 - 编译时移除 */
    triggerEvent(name: string, detail?: object | undefined, options?: WechatMiniprogram.Component.TriggerEventOption | undefined): void;
    /** 原生方法引用 - 编译时移除 */
    createSelectorQuery(): WechatMiniprogram.SelectorQuery;
    /** 原生方法引用 - 编译时移除 */
    createIntersectionObserver(options: WechatMiniprogram.CreateIntersectionObserverOption): WechatMiniprogram.IntersectionObserver;
    /** 原生方法引用 - 编译时移除 */
    selectComponent(selector: string): WechatMiniprogram.Component.Instance<Record<string, any>, Record<string, any>, Record<string, any>>;
    /** 原生方法引用 - 编译时移除 */
    selectAllComponents(selector: string): WechatMiniprogram.Component.Instance<Record<string, any>, Record<string, any>, Record<string, any>>[];
    /** 原生方法引用 - 编译时移除 */
    selectOwnerComponent(): WechatMiniprogram.Component.Instance<Record<string, any>, Record<string, any>, Record<string, any>>;
    /** 原生方法引用 - 编译时移除 */
    getRelationNodes(relationKey: string): WechatMiniprogram.Component.Instance<Record<string, any>, Record<string, any>, Record<string, any>>[];
    /** 原生方法引用 - 编译时移除 */
    groupSetData(callback?: (() => void) | undefined): void;
    /** 原生方法引用 - 编译时移除 */
    getTabBar(): WechatMiniprogram.Component.Instance<Record<string, any>, Record<string, any>, Record<string, any>>;
    /** 原生方法引用 - 编译时移除 */
    getPageId(): string;
    /** 原生方法引用 - 编译时移除 */
    animate(selector: string, keyFrames: WechatMiniprogram.Component.KeyFrame[], duration: number, callback: () => void): void;
    animate(selector: string, keyFrames: WechatMiniprogram.Component.ScrollTimelineKeyframe[], duration: number, scrollTimeline: WechatMiniprogram.Component.ScrollTimelineOption): void;
    /** 原生方法引用 - 编译时移除 */
    clearAnimation(selector: string, callback: () => void): void;
    clearAnimation(selector: string, options: WechatMiniprogram.Component.ClearAnimationOptions, callback: () => void): void;
}
//# sourceMappingURL=ComponentInstanceMethods.d.ts.map