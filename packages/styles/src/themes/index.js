import { colors } from '../constants';

import base from './base';

const light = {
    ...base,
    color: {
        ...base.color,
        background: colors.white,
        primary: colors.blue,
        surface: colors.white,
        text: colors.black,
    }
};

const dark = {
    ...base,
    color: {
        ...base.color,
        background: colors.black,
        primary: colors.blue,
        surface: colors.black,
        text: colors.white,
    }
};

export const themes = {
    dark,
    light
}