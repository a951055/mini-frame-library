import { PageIntf, component, data, instantiation, page } from "./index";

@page
class LayerMessageAlert extends PageIntf {
  @data
  a: Object = {
    type: String,
    value: "111"
  };

  @data
  b: Number = 555;

  onShow() {
    this.a = "333";
  }

  onTap() {}
}

instantiation(LayerMessageAlert);
