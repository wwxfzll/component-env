import { mount } from "@vue/test-utils";
import SxTag from "@packages/components/tag/src/main.vue";

describe("SxTag.vue", () => {
  it("icon-close is normal display", () => {
    let propsData = {
      closable: true,
    };
    let wr = mount(SxTag, {
      propsData,
    });
    expect(wr.find(".sx-icon-close2").exists()).toBe(true);
  });
});
