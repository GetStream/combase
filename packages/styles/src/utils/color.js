import tinycolor from 'tinycolor2';

export const colorUtils = {
    fade: (c, a) => tinycolor(c).setAlpha(a).toRgbString(),
};