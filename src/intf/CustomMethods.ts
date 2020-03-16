import { ComponentInstanceMethods } from "./ComponentInstanceMethods";

export class CustomMethods extends ComponentInstanceMethods {
  selectUniqueComponent(
    selector: string
  ): WechatMiniprogram.Component.Instance<Record<string, any>, Record<string, any>, Record<string, any>> {
    throw new Error("Method not implemented.");
  }
}
