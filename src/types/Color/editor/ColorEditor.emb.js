import { defineEditor } from "@embeddable.com/react";
import ColorType from "../Color.type.emb.js";
import { Value } from "@embeddable.com/core";

import Component from "./index";

export const meta = {
  name: "ColorEditor",
  label: "Color Editor",
  type: ColorType,
};

export default defineEditor(Component, meta, {
  inputs: (value, setter) => {
    return ({
      value,
      onChange: (val) => setter(Value.of(val)),
    });
  }
});