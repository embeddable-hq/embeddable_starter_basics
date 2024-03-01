import { defineType, defineOption } from "@embeddable.com/core";

const ColorType = defineType("color", {
  label: "Color",
  toString: (color) => color.name, 
});

defineOption(ColorType, { name: 'Orange', r: 256, g: 158, b: 84});
defineOption(ColorType, { name: 'Red', r: 247, g: 122, b: 95});
defineOption(ColorType, { name: 'Blue', r: 65, g: 98, b: 136});

export default ColorType;