import { TokenGroup } from './token-types';

const tokenGroups: TokenGroup[] = [
    {
        name: 'Border Radius',
        tokens: [
            {
                id: 'base',
                platforms: {
                    scss: {
                        name: '$tp-border-radius__base',
                        value: '4px',
                    },
                    javascript: {
                        name: 'tpBorderRadiusBase',
                        value: '4px',
                    },
                },
                deprecated: true,
            },
            {
                id: 'big',
                platforms: {
                    scss: {
                        name: '$tp-border-radius__big',
                        value: '6px',
                    },
                    javascript: {
                        name: 'tpBorderRadiusBig',
                        value: '6px',
                    },
                },
                deprecated: true,
            },
            {
                id: 'full',
                platforms: {
                    scss: {
                        name: '$tp-border-radius__full',
                        value: '50%',
                    },
                    javascript: {
                        name: 'tpBorderRadiusFull',
                        value: '50%',
                    },
                },
                deprecated: true,
            },
            {
                id: 'sides',
                platforms: {
                    scss: {
                        name: '$tp-border-radius__sides',
                        value: '9999px',
                    },
                    javascript: {
                        name: 'tpBorderRadiusSides',
                        value: '9999px',
                    },
                },
                deprecated: true,
            },
        ],
    },
    {
        name: 'Breakpoint',
        tokens: [
            {
                id: 'large',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__large',
                        value: '1025px',
                    },
                    javascript: {
                        name: 'tpBreakpointLarge',
                        value: '1025px',
                    },
                },
            },
            {
                id: 'large__value',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__large__value',
                        value: '1025',
                    },
                    javascript: {
                        name: 'tpBreakpointLargeValue',
                        value: 1025,
                    },
                },
            },
            {
                id: 'medium',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__medium',
                        value: '700px',
                    },
                    javascript: {
                        name: 'tpBreakpointMedium',
                        value: '700px',
                    },
                },
            },
            {
                id: 'medium__value',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__medium__value',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpBreakpointMediumValue',
                        value: 700,
                    },
                },
            },
            {
                id: 'small',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__small',
                        value: '481px',
                    },
                    javascript: {
                        name: 'tpBreakpointSmall',
                        value: '481px',
                    },
                },
            },
            {
                id: 'small__value',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__small__value',
                        value: '481',
                    },
                    javascript: {
                        name: 'tpBreakpointSmallValue',
                        value: 481,
                    },
                },
            },
            {
                id: 'split-view__medium',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__split-view__medium',
                        value: '1060px',
                    },
                    javascript: {
                        name: 'tpBreakpointSplitViewMedium',
                        value: '1060px',
                    },
                },
            },
            {
                id: 'split-view__medium__value',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__split-view__medium__value',
                        value: '1060',
                    },
                    javascript: {
                        name: 'tpBreakpointSplitViewMediumValue',
                        value: 1060,
                    },
                },
            },
            {
                id: 'split-view__small',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__split-view__small',
                        value: '769px',
                    },
                    javascript: {
                        name: 'tpBreakpointSplitViewSmall',
                        value: '769px',
                    },
                },
            },
            {
                id: 'split-view__small__value',
                platforms: {
                    scss: {
                        name: '$tp-breakpoint__split-view__small__value',
                        value: '769',
                    },
                    javascript: {
                        name: 'tpBreakpointSplitViewSmallValue',
                        value: 769,
                    },
                },
            },
        ],
    },
    {
        name: 'Color',
        description: 'These are the colors we use at Thumbtack.',
        tokens: [
            {
                id: 'blue-100',
                platforms: {
                    scss: {
                        name: '$tp-color__blue-100',
                        value: '#eaf6fa',
                    },
                    javascript: {
                        name: 'tpColorBlue100',
                        value: '#eaf6fa',
                    },
                    ios: {
                        name: 'blue100',
                        description: 'Blue 100 – #eaf6fa',
                        value: 'UIColor = UIColor(red: 0.91764706, green: 0.9647059, blue: 0.98039216, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_100',
                        value: '#eaf6fa',
                    },
                },
                format: 'color',
            },
            {
                id: 'blue-200',
                platforms: {
                    scss: {
                        name: '$tp-color__blue-200',
                        value: '#b3ebff',
                    },
                    javascript: {
                        name: 'tpColorBlue200',
                        value: '#b3ebff',
                    },
                    ios: {
                        name: 'blue200',
                        description: 'Blue 200 – #b3ebff',
                        value: 'UIColor = UIColor(red: 0.7019608, green: 0.92156863, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_200',
                        value: '#b3ebff',
                    },
                },
                format: 'color',
            },
            {
                id: 'blue-300',
                platforms: {
                    scss: {
                        name: '$tp-color__blue-300',
                        value: '#79d2f2',
                    },
                    javascript: {
                        name: 'tpColorBlue300',
                        value: '#79d2f2',
                    },
                    ios: {
                        name: 'blue300',
                        description: 'Blue 300 – #79d2f2',
                        value: 'UIColor = UIColor(red: 0.4745098, green: 0.8235294, blue: 0.9490196, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_300',
                        value: '#79d2f2',
                    },
                },
                format: 'color',
            },
            {
                id: 'blue',
                platforms: {
                    scss: {
                        name: '$tp-color__blue',
                        value: '#009fd9',
                    },
                    javascript: {
                        name: 'tpColorBlue',
                        value: '#009fd9',
                    },
                    ios: {
                        name: 'blue',
                        description: 'Blue – #009fd9',
                        value: 'UIColor = UIColor(red: 0.0, green: 0.62352943, blue: 0.8509804, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue',
                        value: '#009fd9',
                    },
                },
                format: 'color',
            },
            {
                id: 'blue-500',
                platforms: {
                    scss: {
                        name: '$tp-color__blue-500',
                        value: '#007fad',
                    },
                    javascript: {
                        name: 'tpColorBlue500',
                        value: '#007fad',
                    },
                    ios: {
                        name: 'blue500',
                        description: 'Blue 500 – #007fad',
                        value: 'UIColor = UIColor(red: 0.0, green: 0.49803922, blue: 0.6784314, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_500',
                        value: '#007fad',
                    },
                },
                format: 'color',
            },
            {
                id: 'blue-600',
                platforms: {
                    scss: {
                        name: '$tp-color__blue-600',
                        value: '#005979',
                    },
                    javascript: {
                        name: 'tpColorBlue600',
                        value: '#005979',
                    },
                    ios: {
                        name: 'blue600',
                        description: 'Blue 600 – #005979',
                        value: 'UIColor = UIColor(red: 0.0, green: 0.349, blue: 0.475, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_600',
                        value: '#005979',
                    },
                },
                format: 'color',
            },
            {
                id: 'indigo-100',
                platforms: {
                    scss: {
                        name: '$tp-color__indigo-100',
                        value: '#e8f1fd',
                    },
                    javascript: {
                        name: 'tpColorIndigo100',
                        value: '#e8f1fd',
                    },
                    ios: {
                        name: 'indigo100',
                        description: 'Indigo 100 – #e8f1fd',
                        value: 'UIColor = UIColor(red: 0.9098039, green: 0.94509804, blue: 0.99215686, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_100',
                        value: '#e8f1fd',
                    },
                },
                format: 'color',
            },
            {
                id: 'indigo-200',
                platforms: {
                    scss: {
                        name: '$tp-color__indigo-200',
                        value: '#cce1ff',
                    },
                    javascript: {
                        name: 'tpColorIndigo200',
                        value: '#cce1ff',
                    },
                    ios: {
                        name: 'indigo200',
                        description: 'Indigo 200 – #cce1ff',
                        value: 'UIColor = UIColor(red: 0.8, green: 0.88235295, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_200',
                        value: '#cce1ff',
                    },
                },
                format: 'color',
            },
            {
                id: 'indigo-300',
                platforms: {
                    scss: {
                        name: '$tp-color__indigo-300',
                        value: '#96c2ff',
                    },
                    javascript: {
                        name: 'tpColorIndigo300',
                        value: '#96c2ff',
                    },
                    ios: {
                        name: 'indigo300',
                        description: 'Indigo 300 – #96c2ff',
                        value: 'UIColor = UIColor(red: 0.5882353, green: 0.7607843, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_300',
                        value: '#96c2ff',
                    },
                },
                format: 'color',
            },
            {
                id: 'indigo',
                platforms: {
                    scss: {
                        name: '$tp-color__indigo',
                        value: '#5968e2',
                    },
                    javascript: {
                        name: 'tpColorIndigo',
                        value: '#5968e2',
                    },
                    ios: {
                        name: 'indigo',
                        description: 'Indigo – #5968e2',
                        value: 'UIColor = UIColor(red: 0.34901962, green: 0.40784314, blue: 0.8862745, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo',
                        value: '#5968e2',
                    },
                },
                format: 'color',
            },
            {
                id: 'indigo-500',
                platforms: {
                    scss: {
                        name: '$tp-color__indigo-500',
                        value: '#4f54b3',
                    },
                    javascript: {
                        name: 'tpColorIndigo500',
                        value: '#4f54b3',
                    },
                    ios: {
                        name: 'indigo500',
                        description: 'Indigo 500 – #4f54b3',
                        value: 'UIColor = UIColor(red: 0.30980393, green: 0.32941177, blue: 0.7019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_500',
                        value: '#4f54b3',
                    },
                },
                format: 'color',
            },
            {
                id: 'indigo-600',
                platforms: {
                    scss: {
                        name: '$tp-color__indigo-600',
                        value: '#383c80',
                    },
                    javascript: {
                        name: 'tpColorIndigo600',
                        value: '#383c80',
                    },
                    ios: {
                        name: 'indigo600',
                        description: 'Indigo 600 – #383c80',
                        value: 'UIColor = UIColor(red: 0.21960784, green: 0.23529412, blue: 0.5019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_600',
                        value: '#383c80',
                    },
                },
                format: 'color',
            },
            {
                id: 'purple-100',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-100',
                        value: '#f5efff',
                    },
                    javascript: {
                        name: 'tpColorPurple100',
                        value: '#f5efff',
                    },
                    ios: {
                        name: 'purple100',
                        description: 'Purple 100 – #f5efff',
                        value: 'UIColor = UIColor(red: 0.9607843, green: 0.9372549, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_100',
                        value: '#f5efff',
                    },
                },
                format: 'color',
            },
            {
                id: 'purple-200',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-200',
                        value: '#dfccff',
                    },
                    javascript: {
                        name: 'tpColorPurple200',
                        value: '#dfccff',
                    },
                    ios: {
                        name: 'purple200',
                        description: 'Purple 200 – #dfccff',
                        value: 'UIColor = UIColor(red: 0.8745098, green: 0.8, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_200',
                        value: '#dfccff',
                    },
                },
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore TODO(giles) should this be removed? no other token has a value here.
                value: {
                    ios: 'UIColor = UIColor(red: 0.8745098, green: 0.8, blue: 1.0, alpha: 1.0)',
                },
                format: 'color',
            },
            {
                id: 'purple-300',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-300',
                        value: '#c9acfd',
                    },
                    javascript: {
                        name: 'tpColorPurple300',
                        value: '#c9acfd',
                    },
                    ios: {
                        name: 'purple300',
                        description: 'Purple 300 – #c9acfd',
                        value: 'UIColor = UIColor(red: 0.788, green: 0.675, blue: 0.992, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_300',
                        value: '#c9acfd',
                    },
                },
                format: 'color',
            },
            {
                id: 'purple',
                platforms: {
                    scss: {
                        name: '$tp-color__purple',
                        value: '#8d56eb',
                    },
                    javascript: {
                        name: 'tpColorPurple',
                        value: '#8d56eb',
                    },
                    ios: {
                        name: 'purple',
                        description: 'Purple – #8d56eb',
                        value: 'UIColor = UIColor(red: 0.553, green: 0.337, blue: 0.922, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple',
                        value: '#8d56eb',
                    },
                },
                format: 'color',
            },
            {
                id: 'purple-500',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-500',
                        value: '#6637b6',
                    },
                    javascript: {
                        name: 'tpColorPurple500',
                        value: '#6637b6',
                    },
                    ios: {
                        name: 'purple500',
                        description: 'Purple 500 – #6637b6',
                        value: 'UIColor = UIColor(red: 0.4, green: 0.216, blue: 0.714, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_500',
                        value: '#6637b6',
                    },
                },
                format: 'color',
            },
            {
                id: 'purple-600',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-600',
                        value: '#492782',
                    },
                    javascript: {
                        name: 'tpColorPurple600',
                        value: '#492782',
                    },
                    ios: {
                        name: 'purple600',
                        description: 'Purple 600 – #492782',
                        value: 'UIColor = UIColor(red: 0.285, green: 0.153, blue: 0.508, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_600',
                        value: '#492782',
                    },
                },
                format: 'color',
            },
            {
                id: 'green-100',
                platforms: {
                    scss: {
                        name: '$tp-color__green-100',
                        value: '#e1fdf3',
                    },
                    javascript: {
                        name: 'tpColorGreen100',
                        value: '#e1fdf3',
                    },
                    ios: {
                        name: 'green100',
                        description: 'Green 100 – #e1fdf3',
                        value: 'UIColor = UIColor(red: 0.88235295, green: 0.99215686, blue: 0.9529412, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_100',
                        value: '#e1fdf3',
                    },
                },
                format: 'color',
            },
            {
                id: 'green-200',
                platforms: {
                    scss: {
                        name: '$tp-color__green-200',
                        value: '#c6f7da',
                    },
                    javascript: {
                        name: 'tpColorGreen200',
                        value: '#c6f7da',
                    },
                    ios: {
                        name: 'green200',
                        description: 'Green 200 – #c6f7da',
                        value: 'UIColor = UIColor(red: 0.7764706, green: 0.96862745, blue: 0.85490197, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_200',
                        value: '#c6f7da',
                    },
                },
                format: 'color',
            },
            {
                id: 'green-300',
                platforms: {
                    scss: {
                        name: '$tp-color__green-300',
                        value: '#73e4a2',
                    },
                    javascript: {
                        name: 'tpColorGreen300',
                        value: '#73e4a2',
                    },
                    ios: {
                        name: 'green300',
                        description: 'Green 300 – #73e4a2',
                        value: 'UIColor = UIColor(red: 0.4509804, green: 0.89411765, blue: 0.63529414, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_300',
                        value: '#73e4a2',
                    },
                },
                format: 'color',
            },
            {
                id: 'green',
                platforms: {
                    scss: {
                        name: '$tp-color__green',
                        value: '#2db783',
                    },
                    javascript: {
                        name: 'tpColorGreen',
                        value: '#2db783',
                    },
                    ios: {
                        name: 'green',
                        description: 'Green – #2db783',
                        value: 'UIColor = UIColor(red: 0.1764706, green: 0.7176471, blue: 0.5137255, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green',
                        value: '#2db783',
                    },
                },
                format: 'color',
            },
            {
                id: 'green-500',
                platforms: {
                    scss: {
                        name: '$tp-color__green-500',
                        value: '#16855b',
                    },
                    javascript: {
                        name: 'tpColorGreen500',
                        value: '#16855b',
                    },
                    ios: {
                        name: 'green500',
                        description: 'Green 500 – #16855b',
                        value: 'UIColor = UIColor(red: 0.086, green: 0.522, blue: 0.357, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_500',
                        value: '#16855b',
                    },
                },
                format: 'color',
            },
            {
                id: 'green-600',
                platforms: {
                    scss: {
                        name: '$tp-color__green-600',
                        value: '#054e33',
                    },
                    javascript: {
                        name: 'tpColorGreen600',
                        value: '#054e33',
                    },
                    ios: {
                        name: 'green600',
                        description: 'Green 600 – #054e33',
                        value: 'UIColor = UIColor(red: 0.02, green: 0.306, blue: 0.2, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_600',
                        value: '#054e33',
                    },
                },
                format: 'color',
            },
            {
                id: 'yellow-100',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow-100',
                        value: '#fdf7e7',
                    },
                    javascript: {
                        name: 'tpColorYellow100',
                        value: '#fdf7e7',
                    },
                    ios: {
                        name: 'yellow100',
                        description: 'Yellow 100 – #fdf7e7',
                        value: 'UIColor = UIColor(red: 0.99215686, green: 0.96862745, blue: 0.90588236, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_100',
                        value: '#fdf7e7',
                    },
                },
                format: 'color',
            },
            {
                id: 'yellow-200',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow-200',
                        value: '#ffebb3',
                    },
                    javascript: {
                        name: 'tpColorYellow200',
                        value: '#ffebb3',
                    },
                    ios: {
                        name: 'yellow200',
                        description: 'Yellow 200 – #ffebb3',
                        value: 'UIColor = UIColor(red: 1.0, green: 0.92156863, blue: 0.7019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_200',
                        value: '#ffebb3',
                    },
                },
                format: 'color',
            },
            {
                id: 'yellow-300',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow-300',
                        value: '#ffdd80',
                    },
                    javascript: {
                        name: 'tpColorYellow300',
                        value: '#ffdd80',
                    },
                    ios: {
                        name: 'yellow300',
                        description: 'Yellow 300 – #ffdd80',
                        value: 'UIColor = UIColor(red: 1.0, green: 0.8666667, blue: 0.5019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_300',
                        value: '#ffdd80',
                    },
                },
                format: 'color',
            },
            {
                id: 'yellow',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow',
                        value: '#febe14',
                    },
                    javascript: {
                        name: 'tpColorYellow',
                        value: '#febe14',
                    },
                    ios: {
                        name: 'yellow',
                        description: 'Yellow – #febe14',
                        value: 'UIColor = UIColor(red: 0.99607843, green: 0.74509805, blue: 0.078431375, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow',
                        value: '#febe14',
                    },
                },
                format: 'color',
            },
            {
                id: 'yellow-500',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow-500',
                        value: '#a77005',
                    },
                    javascript: {
                        name: 'tpColorYellow500',
                        value: '#a77005',
                    },
                    ios: {
                        name: 'yellow500',
                        description: 'Yellow 500 – #a77005',
                        value: 'UIColor = UIColor(red: 0.654, green: 0.438, blue: 0.019, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_500',
                        value: '#a77005',
                    },
                },
                format: 'color',
            },
            {
                id: 'yellow-600',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow-600',
                        value: '#714601',
                    },
                    javascript: {
                        name: 'tpColorYellow600',
                        value: '#714601',
                    },
                    ios: {
                        name: 'yellow600',
                        description: 'Yellow 600 – #714601',
                        value: 'UIColor = UIColor(red: 0.442, green: 0.273, blue: 0.004, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_600',
                        value: '#714601',
                    },
                },
                format: 'color',
            },
            {
                id: 'red-100',
                platforms: {
                    scss: {
                        name: '$tp-color__red-100',
                        value: '#ffeff0',
                    },
                    javascript: {
                        name: 'tpColorRed100',
                        value: '#ffeff0',
                    },
                    ios: {
                        name: 'red100',
                        description: 'Red 100 – #ffeff0',
                        value: 'UIColor = UIColor(red: 1.0, green: 0.9372549, blue: 0.9411765, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_100',
                        value: '#ffeff0',
                    },
                },
                format: 'color',
            },
            {
                id: 'red-200',
                platforms: {
                    scss: {
                        name: '$tp-color__red-200',
                        value: '#ffd9d9',
                    },
                    javascript: {
                        name: 'tpColorRed200',
                        value: '#ffd9d9',
                    },
                    ios: {
                        name: 'red200',
                        description: 'Red 200 – #ffd9d9',
                        value: 'UIColor = UIColor(red: 1.0, green: 0.8509804, blue: 0.8509804, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_200',
                        value: '#ffd9d9',
                    },
                },
                format: 'color',
            },
            {
                id: 'red-300',
                platforms: {
                    scss: {
                        name: '$tp-color__red-300',
                        value: '#ffb0b0',
                    },
                    javascript: {
                        name: 'tpColorRed300',
                        value: '#ffb0b0',
                    },
                    ios: {
                        name: 'red300',
                        description: 'Red 300 – #ffb0b0',
                        value: 'UIColor = UIColor(red: 1.0, green: 0.6901961, blue: 0.6901961, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_300',
                        value: '#ffb0b0',
                    },
                },
                format: 'color',
            },
            {
                id: 'red',
                platforms: {
                    scss: {
                        name: '$tp-color__red',
                        value: '#ff5a5f',
                    },
                    javascript: {
                        name: 'tpColorRed',
                        value: '#ff5a5f',
                    },
                    ios: {
                        name: 'red',
                        description: 'Red – #ff5a5f',
                        value: 'UIColor = UIColor(red: 1.0, green: 0.3529412, blue: 0.37254903, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red',
                        value: '#ff5a5f',
                    },
                },
                format: 'color',
            },
            {
                id: 'red-500',
                platforms: {
                    scss: {
                        name: '$tp-color__red-500',
                        value: '#b22d31',
                    },
                    javascript: {
                        name: 'tpColorRed500',
                        value: '#b22d31',
                    },
                    ios: {
                        name: 'red500',
                        description: 'Red 500 – #b22d31',
                        value: 'UIColor = UIColor(red: 0.808, green: 0.209, blue: 0.266, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_500',
                        value: '#b22d31',
                    },
                },
                format: 'color',
            },
            {
                id: 'red-600',
                platforms: {
                    scss: {
                        name: '$tp-color__red-600',
                        value: '#7d0d10',
                    },
                    javascript: {
                        name: 'tpColorRed600',
                        value: '#7d0d10',
                    },
                    ios: {
                        name: 'red600',
                        description: 'Red 600 – #7d0d10',
                        value: 'UIColor = UIColor(red: 0.492, green: 0.051, blue: 0.065, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_600',
                        value: '#7d0d10',
                    },
                },
                format: 'color',
            },
            {
                id: 'black-300',
                platforms: {
                    scss: {
                        name: '$tp-color__black-300',
                        value: '#676d73',
                    },
                    javascript: {
                        name: 'tpColorBlack300',
                        value: '#676d73',
                    },
                    ios: {
                        name: 'black300',
                        description: 'Black 300 – #676d73',
                        value: 'UIColor = UIColor(red: 0.40392157, green: 0.42745098, blue: 0.4509804, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_black_300',
                        value: '#676d73',
                    },
                },
                format: 'color',
            },
            {
                id: 'black',
                platforms: {
                    scss: {
                        name: '$tp-color__black',
                        value: '#2f3033',
                    },
                    javascript: {
                        name: 'tpColorBlack',
                        value: '#2f3033',
                    },
                    ios: {
                        name: 'black',
                        description: 'Black – #2f3033',
                        value: 'UIColor = UIColor(red: 0.18431373, green: 0.1882353, blue: 0.2, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_black',
                        value: '#2f3033',
                    },
                },
                format: 'color',
            },
            {
                id: 'gray-200',
                platforms: {
                    scss: {
                        name: '$tp-color__gray-200',
                        value: '#fafafa',
                    },
                    javascript: {
                        name: 'tpColorGray200',
                        value: '#fafafa',
                    },
                    ios: {
                        name: 'gray200',
                        description: 'Gray 200 – #fafafa',
                        value: 'UIColor = UIColor(red: 0.98039216, green: 0.98039216, blue: 0.98039216, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_gray_200',
                        value: '#fafafa',
                    },
                },
                format: 'color',
            },
            {
                id: 'gray-300',
                platforms: {
                    scss: {
                        name: '$tp-color__gray-300',
                        value: '#e9eced',
                    },
                    javascript: {
                        name: 'tpColorGray300',
                        value: '#e9eced',
                    },
                    ios: {
                        name: 'gray300',
                        description: 'Gray 300 – #e9eced',
                        value: 'UIColor = UIColor(red: 0.9137255, green: 0.9254902, blue: 0.92941177, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_gray_300',
                        value: '#e9eced',
                    },
                },
                format: 'color',
            },
            {
                id: 'gray',
                platforms: {
                    scss: {
                        name: '$tp-color__gray',
                        value: '#d3d4d5',
                    },
                    javascript: {
                        name: 'tpColorGray',
                        value: '#d3d4d5',
                    },
                    ios: {
                        name: 'gray',
                        description: 'Gray – #d3d4d5',
                        value: 'UIColor = UIColor(red: 0.827451, green: 0.83137256, blue: 0.8352941, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_gray',
                        value: '#d3d4d5',
                    },
                },
                format: 'color',
            },
            {
                id: 'white',
                platforms: {
                    scss: {
                        name: '$tp-color__white',
                        value: '#ffffff',
                    },
                    javascript: {
                        name: 'tpColorWhite',
                        value: '#ffffff',
                    },
                    ios: {
                        name: 'white',
                        description: 'White – #ffffff',
                        value: 'UIColor = UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_white',
                        value: '#ffffff',
                    },
                },
                format: 'color',
            },
        ],
    },
    {
        name: 'Corner Radius',
        tokens: [
            {
                id: 'base',
                platforms: {
                    scss: {
                        name: '$tp-corner-radius__base',
                        value: '4px',
                    },
                    javascript: {
                        name: 'tpCornerRadiusBase',
                        value: '4px',
                    },
                    ios: {
                        name: 'base',
                        value: 'CGFloat = 4',
                    },
                    android: {
                        name: 'tp_corner_radius_base',
                        value: '4dp',
                    },
                },
                format: 'size',
            },
            {
                id: 'big',
                platforms: {
                    scss: {
                        name: '$tp-corner-radius__big',
                        value: '6px',
                    },
                    javascript: {
                        name: 'tpCornerRadiusBig',
                        value: '6px',
                    },
                    android: {
                        name: 'tp_corner_radius_big',
                        value: '6dp',
                    },
                },
                format: 'size',
            },
            {
                id: 'full',
                platforms: {
                    scss: {
                        name: '$tp-corner-radius__full',
                        value: '50%',
                    },
                    javascript: {
                        name: 'tpCornerRadiusFull',
                        value: '50%',
                    },
                },
                format: 'size',
            },
            {
                id: 'sides',
                platforms: {
                    scss: {
                        name: '$tp-corner-radius__sides',
                        value: '9999px',
                    },
                    javascript: {
                        name: 'tpCornerRadiusSides',
                        value: '9999px',
                    },
                },
                format: 'size',
            },
        ],
    },
    {
        name: 'Duration',
        tokens: [
            {
                id: '1',
                format: 'time',
                platforms: {
                    scss: {
                        name: '$tp-duration__1',
                        value: '75ms',
                    },
                    javascript: {
                        name: 'tpDuration1',
                        value: 75,
                    },
                    ios: {
                        name: 'one',
                        value: 'TimeInterval = 0.075',
                    },
                    android: {
                        name: 'tp_duration_1',
                        value: 75,
                    },
                },
            },
            {
                id: '2',
                format: 'time',
                platforms: {
                    scss: {
                        name: '$tp-duration__2',
                        value: '150ms',
                    },
                    javascript: {
                        name: 'tpDuration2',
                        value: 150,
                    },
                    ios: {
                        name: 'two',
                        value: 'TimeInterval = 0.15',
                    },
                    android: {
                        name: 'tp_duration_2',
                        value: 150,
                    },
                },
            },
            {
                id: '3',
                format: 'time',
                platforms: {
                    scss: {
                        name: '$tp-duration__3',
                        value: '200ms',
                    },
                    javascript: {
                        name: 'tpDuration3',
                        value: 200,
                    },
                    ios: {
                        name: 'three',
                        value: 'TimeInterval = 0.2',
                    },
                    android: {
                        name: 'tp_duration_3',
                        value: 200,
                    },
                },
            },
            {
                id: '4',
                format: 'time',
                platforms: {
                    scss: {
                        name: '$tp-duration__4',
                        value: '250ms',
                    },
                    javascript: {
                        name: 'tpDuration4',
                        value: 250,
                    },
                    ios: {
                        name: 'four',
                        value: 'TimeInterval = 0.25',
                    },
                    android: {
                        name: 'tp_duration_4',
                        value: 250,
                    },
                },
            },
            {
                id: '5',
                format: 'time',
                platforms: {
                    scss: {
                        name: '$tp-duration__5',
                        value: '300ms',
                    },
                    javascript: {
                        name: 'tpDuration5',
                        value: 300,
                    },
                    ios: {
                        name: 'five',
                        value: 'TimeInterval = 0.3',
                    },
                    android: {
                        name: 'tp_duration_5',
                        value: 300,
                    },
                },
            },
            {
                id: '6',
                format: 'time',
                platforms: {
                    scss: {
                        name: '$tp-duration__6',
                        value: '350ms',
                    },
                    javascript: {
                        name: 'tpDuration6',
                        value: 350,
                    },
                    ios: {
                        name: 'six',
                        value: 'TimeInterval = 0.35',
                    },
                    android: {
                        name: 'tp_duration_6',
                        value: 350,
                    },
                },
            },
        ],
    },
    {
        name: 'Easing',
        tokens: [
            {
                id: 'ease-in',
                platforms: {
                    scss: {
                        name: '$tp-ease__in',
                        value: 'cubic-bezier(0.50, 0, 1, 1)',
                    },
                    javascript: {
                        name: 'tpEaseIn',
                        value: 'cubic-bezier(0.50, 0, 1, 1)',
                    },
                },
            },
            {
                id: 'ease-out',
                platforms: {
                    scss: {
                        name: '$tp-ease__out',
                        value: 'cubic-bezier(0, 0, 0.40, 1)',
                    },
                    javascript: {
                        name: 'tpEaseOut',
                        value: 'cubic-bezier(0, 0, 0.40, 1)',
                    },
                },
            },
            {
                id: 'ease-in-out',
                platforms: {
                    scss: {
                        name: '$tp-ease__in-out',
                        value: 'cubic-bezier(0.45, 0, 0.40, 1)',
                    },
                    javascript: {
                        name: 'tpEaseInOut',
                        value: 'cubic-bezier(0.45, 0, 0.40, 1)',
                    },
                },
            },
        ],
    },
    {
        name: 'Font Family',
        tokens: [
            {
                id: 'base',
                platforms: {
                    scss: {
                        name: '$tp-font-family__base',
                        value: 'Mark, Avenir, Helvetica, Arial, sans-serif',
                    },
                    javascript: {
                        name: 'tpFontFamilyBase',
                        value: 'Mark, Avenir, Helvetica, Arial, sans-serif',
                    },
                },
            },
            {
                id: 'monospace',
                platforms: {
                    scss: {
                        name: '$tp-font-family__monospace',
                        value: "'Source Code Pro', monospace",
                    },
                    javascript: {
                        name: 'tpFontFamilyMonospace',
                        value: "'Source Code Pro', monospace",
                    },
                },
            },
        ],
    },
    {
        name: 'Font Weight',
        tokens: [
            {
                id: 'normal',
                format: 'fontWeight',
                platforms: {
                    scss: {
                        name: '$tp-font-weight__normal',
                        value: '400',
                    },
                    javascript: {
                        name: 'tpFontWeightNormal',
                        value: '400',
                    },
                    ios: {
                        name: 'normal',
                        value: 'normal',
                    },
                    android: {
                        name: 'tp_font_weight_normal',
                        value: '400',
                    },
                },
            },
            {
                id: 'bold',
                format: 'fontWeight',
                platforms: {
                    scss: {
                        name: '$tp-font-weight__bold',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontWeightBold',
                        value: '700',
                    },
                    ios: {
                        name: 'bold',
                        value: 'bold',
                    },
                    android: {
                        name: 'tp_font_weight_bold',
                        value: '700',
                    },
                },
            },
        ],
    },
    {
        name: 'Font',
        tokens: [
            {
                group: 'Title 1',
                id: 'title__1__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__size',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle1Size',
                        value: '28px',
                    },
                    ios: {
                        name: 'title1Size',
                        value: 'CGFloat = 28',
                    },
                    android: {
                        name: 'tp_title_1_size',
                        value: '28sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 1',
                id: 'title__1__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__line-height',
                        value: '32px',
                    },
                    javascript: {
                        name: 'tpFontTitle1LineHeight',
                        value: '32px',
                    },
                    android: {
                        name: 'tp_title_1_line_height',
                        value: '32sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 1',
                id: 'title__1__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle1Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title1Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_1_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__responsive__size',
                        value: '40px',
                    },
                    javascript: {
                        name: 'tpFontTitle1ResponsiveSize',
                        value: '40px',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__responsive__line-height',
                        value: '44px',
                    },
                    javascript: {
                        name: 'tpFontTitle1ResponsiveLineHeight',
                        value: '44px',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__responsive__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle1ResponsiveWeight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 1',
                id: 'title__1__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title1UIFontTextStyle',
                        value: 'UIFont.TextStyle = .headline',
                    },
                },
            },
            {
                group: 'Title 2',
                id: 'title__2__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__size',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontTitle2Size',
                        value: '24px',
                    },
                    ios: {
                        name: 'title2Size',
                        value: 'CGFloat = 24',
                    },
                    android: {
                        name: 'tp_title_2_size',
                        value: '24sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 2',
                id: 'title__2__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__line-height',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle2LineHeight',
                        value: '28px',
                    },
                    android: {
                        name: 'tp_title_2_line_height',
                        value: '28sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 2',
                id: 'title__2__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle2Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title2Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_2_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__responsive__size',
                        value: '32px',
                    },
                    javascript: {
                        name: 'tpFontTitle2ResponsiveSize',
                        value: '32px',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__responsive__line-height',
                        value: '40px',
                    },
                    javascript: {
                        name: 'tpFontTitle2ResponsiveLineHeight',
                        value: '40px',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__responsive__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle2ResponsiveWeight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 2',
                id: 'title__2__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title2UIFontTextStyle',
                        value: 'UIFont.TextStyle = .subheadline',
                    },
                },
            },
            {
                group: 'Title 3',
                id: 'title__3__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__size',
                        value: '22px',
                    },
                    javascript: {
                        name: 'tpFontTitle3Size',
                        value: '22px',
                    },
                    ios: {
                        name: 'title3Size',
                        value: 'CGFloat = 22',
                    },
                    android: {
                        name: 'tp_title_3_size',
                        value: '22sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 3',
                id: 'title__3__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__line-height',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle3LineHeight',
                        value: '28px',
                    },
                    android: {
                        name: 'tp_title_3_line_height',
                        value: '28sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 3',
                id: 'title__3__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle3Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title3Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_3_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__responsive__size',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontTitle3ResponsiveSize',
                        value: '24px',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__responsive__line-height',
                        value: '32px',
                    },
                    javascript: {
                        name: 'tpFontTitle3ResponsiveLineHeight',
                        value: '32px',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__responsive__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle3ResponsiveWeight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 3',
                id: 'title__3__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title3UIFontTextStyle',
                        value: 'UIFont.TextStyle = .title1',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 4',
                id: 'title__4__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__4__size',
                        value: '20px',
                    },
                    javascript: {
                        name: 'tpFontTitle4Size',
                        value: '20px',
                    },
                    ios: {
                        name: 'title4Size',
                        value: 'CGFloat = 20',
                    },
                    android: {
                        name: 'tp_title_4_size',
                        value: '20sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 4',
                id: 'title__4__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__4__line-height',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle4LineHeight',
                        value: '28px',
                    },
                    android: {
                        name: 'tp_title_4_line_height',
                        value: '28sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 4',
                id: 'title__4__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__4__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle4Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title4Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_4_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 4',
                id: 'title__4__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title4UIFontTextStyle',
                        value: 'UIFont.TextStyle = .title2',
                    },
                },
            },
            {
                group: 'Title 5',
                id: 'title__5__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__5__size',
                        value: '18px',
                    },
                    javascript: {
                        name: 'tpFontTitle5Size',
                        value: '18px',
                    },
                    ios: {
                        name: 'title5Size',
                        value: 'CGFloat = 18',
                    },
                    android: {
                        name: 'tp_title_5_size',
                        value: '18sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 5',
                id: 'title__5__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__5__line-height',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontTitle5LineHeight',
                        value: '24px',
                    },
                    android: {
                        name: 'tp_title_5_line_height',
                        value: '24sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 5',
                id: 'title__5__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__5__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle5Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title5Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_5_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 5',
                id: 'title__5__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title5UIFontTextStyle',
                        value: 'UIFont.TextStyle = .title3',
                    },
                },
            },
            {
                group: 'Title 6',
                id: 'title__6__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__6__size',
                        value: '16px',
                    },
                    javascript: {
                        name: 'tpFontTitle6Size',
                        value: '16px',
                    },
                    ios: {
                        name: 'title6Size',
                        value: 'CGFloat = 16',
                    },
                    android: {
                        name: 'tp_title_6_size',
                        value: '16sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 6',
                id: 'title__6__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__6__line-height',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontTitle6LineHeight',
                        value: '24px',
                    },
                    android: {
                        name: 'tp_title_6_line_height',
                        value: '24sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 6',
                id: 'title__6__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__6__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle6Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title6Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_6_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 6',
                id: 'title__6__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title6UIFontTextStyle',
                        value: 'UIFont.TextStyle = .body',
                    },
                },
            },
            {
                group: 'Title 7',
                id: 'title__7__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__7__size',
                        value: '14px',
                    },
                    javascript: {
                        name: 'tpFontTitle7Size',
                        value: '14px',
                    },
                    ios: {
                        name: 'title7Size',
                        value: 'CGFloat = 14',
                    },
                    android: {
                        name: 'tp_title_7_size',
                        value: '14sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 7',
                id: 'title__7__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__7__line-height',
                        value: '20px',
                    },
                    javascript: {
                        name: 'tpFontTitle7LineHeight',
                        value: '20px',
                    },
                    android: {
                        name: 'tp_title_7_line_height',
                        value: '20sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 7',
                id: 'title__7__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__7__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle7Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title7Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_7_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 7',
                id: 'title__7__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title7UIFontTextStyle',
                        value: 'UIFont.TextStyle = .body',
                    },
                },
            },
            {
                group: 'Title 8',
                id: 'title__8__size',
                platforms: {
                    scss: {
                        name: '$tp-font__title__8__size',
                        value: '12px',
                    },
                    javascript: {
                        name: 'tpFontTitle8Size',
                        value: '12px',
                    },
                    ios: {
                        name: 'title8Size',
                        value: 'CGFloat = 12',
                    },
                    android: {
                        name: 'tp_title_8_size',
                        value: '12sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 8',
                id: 'title__8__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__title__8__line-height',
                        value: '18px',
                    },
                    javascript: {
                        name: 'tpFontTitle8LineHeight',
                        value: '18px',
                    },
                    android: {
                        name: 'tp_title_8_line_height',
                        value: '18sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Title 8',
                id: 'title__8__weight',
                platforms: {
                    scss: {
                        name: '$tp-font__title__8__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle8Weight',
                        value: '700',
                    },
                    ios: {
                        name: 'title8Weight',
                        value: 'FontWeight = .bold',
                    },
                    android: {
                        name: 'tp_title_8_weight',
                        value: '700',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Title 8',
                id: 'title__8__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'title8UIFontTextStyle',
                        value: 'UIFont.TextStyle = .body',
                    },
                },
            },
            {
                group: 'Body 1',
                id: 'body__1__size',
                platforms: {
                    scss: {
                        name: '$tp-font__body__1__size',
                        value: '16px',
                    },
                    javascript: {
                        name: 'tpFontBody1Size',
                        value: '16px',
                    },
                    ios: {
                        name: 'text1Size',
                        value: 'CGFloat = 16',
                    },
                    android: {
                        name: 'tp_body_1_size',
                        value: '16sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Body 1',
                id: 'body__1__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__body__1__line-height',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontBody1LineHeight',
                        value: '24px',
                    },
                    android: {
                        name: 'tp_body_1_line_height',
                        value: '24sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Body 1',
                id: 'body__1__weight',
                platforms: {
                    ios: {
                        name: 'text1Weight',
                        value: 'FontWeight = .normal',
                    },
                    android: {
                        name: 'tp_body_1_weight',
                        value: '400',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Body 1',
                id: 'body__1__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'text1UIFontTextStyle',
                        value: 'UIFont.TextStyle = .body',
                    },
                },
            },
            {
                group: 'Body 2',
                id: 'body__2__size',
                platforms: {
                    scss: {
                        name: '$tp-font__body__2__size',
                        value: '14px',
                    },
                    javascript: {
                        name: 'tpFontBody2Size',
                        value: '14px',
                    },
                    ios: {
                        name: 'text2Size',
                        value: 'CGFloat = 14',
                    },
                    android: {
                        name: 'tp_body_2_size',
                        value: '14sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Body 2',
                id: 'body__2__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__body__2__line-height',
                        value: '20px',
                    },
                    javascript: {
                        name: 'tpFontBody2LineHeight',
                        value: '20px',
                    },
                    android: {
                        name: 'tp_body_2_line_height',
                        value: '20sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Body 2',
                id: 'body__2__weight',
                platforms: {
                    ios: {
                        name: 'text2Weight',
                        value: 'FontWeight = .normal',
                    },
                    android: {
                        name: 'tp_body_2_weight',
                        value: '400',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Body 2',
                id: 'body__2__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'text2UIFontTextStyle',
                        value: 'UIFont.TextStyle = .body',
                    },
                },
            },
            {
                group: 'Body 3',
                id: 'body__3__size',
                platforms: {
                    scss: {
                        name: '$tp-font__body__3__size',
                        value: '12px',
                    },
                    javascript: {
                        name: 'tpFontBody3Size',
                        value: '12px',
                    },
                    ios: {
                        name: 'text3Size',
                        value: 'CGFloat = 12',
                    },
                    android: {
                        name: 'tp_body_3_size',
                        value: '12sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Body 3',
                id: 'body__3__line-height',
                platforms: {
                    scss: {
                        name: '$tp-font__body__3__line-height',
                        value: '18px',
                    },
                    javascript: {
                        name: 'tpFontBody3LineHeight',
                        value: '18px',
                    },
                    android: {
                        name: 'tp_body_3_line_height',
                        value: '18sp',
                    },
                },
                format: 'size',
            },
            {
                group: 'Body 3',
                id: 'body__3__weight',
                platforms: {
                    ios: {
                        name: 'text3Weight',
                        value: 'FontWeight = .normal',
                    },
                    android: {
                        name: 'tp_body_3_weight',
                        value: '400',
                    },
                },
                format: 'fontWeight',
            },
            {
                group: 'Body 3',
                id: 'body__3__uifont__text__style',
                platforms: {
                    ios: {
                        name: 'text3UIFontTextStyle',
                        value: 'UIFont.TextStyle = .body',
                    },
                },
            },
        ],
    },
    {
        name: 'Letter Spacing',
        tokens: [
            {
                id: 'loose',
                platforms: {
                    scss: {
                        name: '$tp-letter-spacing__loose',
                        value: '1px',
                    },
                    javascript: {
                        name: 'tpLetterSpacingLoose',
                        value: '1px',
                    },
                    android: {
                        name: 'tp_letter_spacing_loose',
                        value: '1sp',
                    },
                },
                format: 'size',
            },
            {
                id: 'tight',
                platforms: {
                    scss: {
                        name: '$tp-letter-spacing__tight',
                        value: '-1px',
                    },
                    javascript: {
                        name: 'tpLetterSpacingTight',
                        value: '-1px',
                    },
                    android: {
                        name: 'tp_letter_spacing_tight',
                        value: '-1sp',
                    },
                },
                format: 'size',
            },
            {
                id: 'extra-tight',
                platforms: {
                    scss: {
                        name: '$tp-letter-spacing__extra-tight',
                        value: '-2px',
                    },
                    javascript: {
                        name: 'tpLetterSpacingExtraTight',
                        value: '-2px',
                    },
                    android: {
                        name: 'tp_letter_spacing_extra_tight',
                        value: '-2sp',
                    },
                },
                format: 'size',
            },
        ],
    },
    {
        name: 'Line Height',
        tokens: [
            {
                id: 'base',
                platforms: {
                    scss: {
                        name: '$tp-line-height__base',
                        value: '1.6',
                    },
                    javascript: {
                        name: 'tpLineHeightBase',
                        value: '1.6',
                    },
                },
            },
            {
                id: 'tight',
                platforms: {
                    scss: {
                        name: '$tp-line-height__tight',
                        value: '1.4',
                    },
                    javascript: {
                        name: 'tpLineHeightTight',
                        value: '1.4',
                    },
                },
            },
            {
                id: 'loose',
                platforms: {
                    scss: {
                        name: '$tp-line-height__loose',
                        value: '1.9',
                    },
                    javascript: {
                        name: 'tpLineHeightLoose',
                        value: '1.9',
                    },
                },
            },
        ],
    },
    {
        name: 'Shadow',
        tokens: [
            {
                id: '100',
                platforms: {
                    scss: {
                        name: '$tp-shadow__100',
                        value: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    },
                    javascript: {
                        name: 'tpShadow100',
                        value: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
            {
                id: '200',
                platforms: {
                    scss: {
                        name: '$tp-shadow__200',
                        value: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                    },
                    javascript: {
                        name: 'tpShadow200',
                        value: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                    },
                },
            },
            {
                id: '300',
                platforms: {
                    scss: {
                        name: '$tp-shadow__300',
                        value: '0px 2px 7px rgba(0, 0, 0, 0.15)',
                    },
                    javascript: {
                        name: 'tpShadow300',
                        value: '0px 2px 7px rgba(0, 0, 0, 0.15)',
                    },
                },
            },
            {
                id: '400',
                platforms: {
                    scss: {
                        name: '$tp-shadow__400',
                        value: '0px 2px 10px rgba(0, 0, 0, 0.2)',
                    },
                    javascript: {
                        name: 'tpShadow400',
                        value: '0px 2px 10px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
            {
                id: 'card',
                deprecated: true,
                platforms: {
                    scss: {
                        name: '$tp-shadow__card',
                        value: '0 -1px 1px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',
                    },
                    javascript: {
                        name: 'tpShadowCard',
                        value: '0 -1px 1px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',
                    },
                },
            },
        ],
    },
    {
        name: 'Scrim',
        description: 'Values for transparent light and dark curtains that cover content.',
        tokens: [
            {
                id: 'scrim-light-80',
                format: 'color',
                platforms: {
                    scss: {
                        name: '$tp-scrim__light-80',
                        value: 'rgba(255, 255, 255, 0.8)',
                    },
                    javascript: {
                        name: 'tpScrimLight80',
                        value: 'rgba(255, 255, 255, 0.8)',
                    },
                    ios: {
                        name: 'light80',
                        value: 'UIColor = UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.8)',
                    },
                    android: {
                        name: 'tp_scrim_light_80',
                        value: '#ccffffff',
                    },
                },
            },
            {
                id: 'scrim-dark-80',
                format: 'color',
                platforms: {
                    scss: {
                        name: '$tp-scrim__dark-80',
                        value: 'rgba(0, 0, 0, 0.8)',
                    },
                    javascript: {
                        name: 'tpScrimDark80',
                        value: 'rgba(0, 0, 0, 0.8)',
                    },
                    ios: {
                        name: 'dark80',
                        value: 'UIColor = UIColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 0.8)',
                    },
                    android: {
                        name: 'tp_scrim_dark_80',
                        value: '#cc000000',
                    },
                },
            },
        ],
    },
    {
        name: 'Space',
        tokens: [
            {
                id: '1',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__1',
                        value: '4px',
                    },
                    javascript: {
                        name: 'tpSpace1',
                        value: '4px',
                    },
                    ios: {
                        name: 'one',
                        value: 'CGFloat = 4.0',
                        description: 'Space 1 – 4.0pt',
                    },
                    android: {
                        name: 'tp_space_1',
                        value: '4dp',
                    },
                },
            },
            {
                id: '2',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__2',
                        value: '8px',
                    },
                    javascript: {
                        name: 'tpSpace2',
                        value: '8px',
                    },
                    ios: {
                        name: 'two',
                        value: 'CGFloat = 8.0',
                        description: 'Space 2 – 8.0pt',
                    },
                    android: {
                        name: 'tp_space_2',
                        value: '8dp',
                    },
                },
            },
            {
                id: '3',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__3',
                        value: '16px',
                    },
                    javascript: {
                        name: 'tpSpace3',
                        value: '16px',
                    },
                    ios: {
                        name: 'three',
                        value: 'CGFloat = 16.0',
                        description: 'Space 3 – 16.0pt',
                    },
                    android: {
                        name: 'tp_space_3',
                        value: '16dp',
                    },
                },
            },
            {
                id: '4',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__4',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpSpace4',
                        value: '24px',
                    },
                    ios: {
                        name: 'four',
                        value: 'CGFloat = 24.0',
                        description: 'Space 4 – 24.0pt',
                    },
                    android: {
                        name: 'tp_space_4',
                        value: '24dp',
                    },
                },
            },
            {
                id: '5',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__5',
                        value: '32px',
                    },
                    javascript: {
                        name: 'tpSpace5',
                        value: '32px',
                    },
                    ios: {
                        name: 'five',
                        value: 'CGFloat = 32.0',
                        description: 'Space 5 – 32.0pt',
                    },
                    android: {
                        name: 'tp_space_5',
                        value: '32dp',
                    },
                },
            },
            {
                id: '6',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__6',
                        value: '64px',
                    },
                    javascript: {
                        name: 'tpSpace6',
                        value: '64px',
                    },
                    ios: {
                        name: 'six',
                        value: 'CGFloat = 48.0',
                        description: 'Space 6 – 48.0pt',
                    },
                    android: {
                        name: 'tp_space_6',
                        value: '48dp',
                    },
                },
            },
            {
                id: '7',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__7',
                        value: '128px',
                    },
                    javascript: {
                        name: 'tpSpace7',
                        value: '128px',
                    },
                },
            },
            {
                id: '8',
                format: 'size',
                platforms: {
                    scss: {
                        name: '$tp-space__8',
                        value: '256px',
                    },
                    javascript: {
                        name: 'tpSpace8',
                        value: '256px',
                    },
                },
            },
        ],
    },
    {
        name: 'Wrap',
        tokens: [
            {
                id: 'max-width',
                platforms: {
                    scss: {
                        name: '$tp-wrap__max-width',
                        value: '946px',
                    },
                    javascript: {
                        name: 'tpWrapMaxWidth',
                        value: '946px',
                    },
                },
            },
            {
                id: 'no-pad-width',
                platforms: {
                    scss: {
                        name: '$tp-wrap__no-pad-width',
                        value: '1010px',
                    },
                    javascript: {
                        name: 'tpWrapNoPadWidth',
                        value: '1010px',
                    },
                },
            },
        ],
    },
    {
        name: 'Z-Index',
        description: 'Values to help stack Thumbprint UI components.',
        tokens: [
            {
                id: 'modal',
                platforms: {
                    scss: {
                        name: '$tp-z-index__modal',
                        value: 200,
                    },
                    javascript: {
                        name: 'tpZIndexModal',
                        value: 200,
                    },
                },
            },
        ],
    },
];

export default tokenGroups;
