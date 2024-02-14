import { defineType, defineOption } from "@embeddable.com/core";

const MyTimeRange = defineType("myTimeRange", {
  label: "My Time Range",
  toString: (option) => option.name,
  toNativeDataType: {
    timeRange: (value) => {
      console.log('toTimeRange', value)
      return value.relativeTimeString
        ? value.relativeTimeString
        : [value.from, value.to]
      },
  },
});

const now = new Date()

defineOption(MyTimeRange, { 
	name: 'Today', 
	relativeTimeString: 'today' 
});
defineOption(MyTimeRange, { 
	name: 'Last week', 
	relativeTimeString: 'last week' 
});
defineOption(MyTimeRange, { 
  name: 'Last month', 
  from: new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()), 
  to: new Date(now.getFullYear(), now.getMonth(), now.getDate())
});


export default MyTimeRange;