import localizeFilter from '@/filters/localize.filter'

export default {
  bind(el, { value }) {
    if (value.includes('Tooltip_')) {
      const processingValue = localizeFilter(value);
      M.Tooltip.init(el, {html: processingValue});
    } else {
      M.Tooltip.init(el, {html: value});
    }
  },
  unbind(el) {
    const tooltip = M.Tooltip.getInstance(el);

    if (tooltip && tooltip.destroy) {
      tooltip.destroy();
    }
  }
};