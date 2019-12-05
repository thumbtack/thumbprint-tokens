module.exports = [
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                        value: '1025',
                    },
                },
                type: 'number',
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
                type: 'string',
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
                        value: '700',
                    },
                },
                type: 'number',
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
                type: 'string',
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
                        value: '481',
                    },
                },
                type: 'number',
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
                type: 'string',
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
                        value: '1060',
                    },
                },
                type: 'number',
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
                type: 'string',
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
                        value: '769',
                    },
                },
                type: 'number',
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
                        value:
                            'UIColor = UIColor(red: 0.91764706, green: 0.9647059, blue: 0.98039216, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_100',
                        value: '#eaf6fa',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.7019608, green: 0.92156863, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_200',
                        value: '#b3ebff',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.4745098, green: 0.8235294, blue: 0.9490196, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_300',
                        value: '#79d2f2',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.0, green: 0.62352943, blue: 0.8509804, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue',
                        value: '#009fd9',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.0, green: 0.49803922, blue: 0.6784314, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_500',
                        value: '#007fad',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'blue-600',
                platforms: {
                    scss: {
                        name: '$tp-color__blue-600',
                        value: '#005a7a',
                    },
                    javascript: {
                        name: 'tpColorBlue600',
                        value: '#005a7a',
                    },
                    ios: {
                        name: 'blue600',
                        description: 'Blue 600 – #005a7a',
                        value:
                            'UIColor = UIColor(red: 0.0, green: 0.3529412, blue: 0.47843137, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_blue_600',
                        value: '#005a7a',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.9098039, green: 0.94509804, blue: 0.99215686, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_100',
                        value: '#e8f1fd',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.8, green: 0.88235295, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_200',
                        value: '#cce1ff',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.5882353, green: 0.7607843, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_300',
                        value: '#96c2ff',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.34901962, green: 0.40784314, blue: 0.8862745, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo',
                        value: '#5968e2',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.30980393, green: 0.32941177, blue: 0.7019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_500',
                        value: '#4f54b3',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.21960784, green: 0.23529412, blue: 0.5019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_indigo_600',
                        value: '#383c80',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.9607843, green: 0.9372549, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_100',
                        value: '#f5efff',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.8745098, green: 0.8, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_200',
                        value: '#dfccff',
                    },
                },
                value: {
                    ios: 'UIColor = UIColor(red: 0.8745098, green: 0.8, blue: 1.0, alpha: 1.0)',
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'purple-300',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-300',
                        value: '#d3baff',
                    },
                    javascript: {
                        name: 'tpColorPurple300',
                        value: '#d3baff',
                    },
                    ios: {
                        name: 'purple300',
                        description: 'Purple 300 – #d3baff',
                        value:
                            'UIColor = UIColor(red: 0.827451, green: 0.7294118, blue: 1.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_300',
                        value: '#d3baff',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'purple',
                platforms: {
                    scss: {
                        name: '$tp-color__purple',
                        value: '#a97ff0',
                    },
                    javascript: {
                        name: 'tpColorPurple',
                        value: '#a97ff0',
                    },
                    ios: {
                        name: 'purple',
                        description: 'Purple – #a97ff0',
                        value:
                            'UIColor = UIColor(red: 0.6627451, green: 0.49803922, blue: 0.9411765, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple',
                        value: '#a97ff0',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'purple-500',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-500',
                        value: '#8a5ed6',
                    },
                    javascript: {
                        name: 'tpColorPurple500',
                        value: '#8a5ed6',
                    },
                    ios: {
                        name: 'purple500',
                        description: 'Purple 500 – #8a5ed6',
                        value:
                            'UIColor = UIColor(red: 0.5411765, green: 0.36862746, blue: 0.8392157, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_500',
                        value: '#8a5ed6',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'purple-600',
                platforms: {
                    scss: {
                        name: '$tp-color__purple-600',
                        value: '#502095',
                    },
                    javascript: {
                        name: 'tpColorPurple600',
                        value: '#502095',
                    },
                    ios: {
                        name: 'purple600',
                        description: 'Purple 600 – #502095',
                        value:
                            'UIColor = UIColor(red: 0.3137255, green: 0.1254902, blue: 0.58431375, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_purple_600',
                        value: '#502095',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.88235295, green: 0.99215686, blue: 0.9529412, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_100',
                        value: '#e1fdf3',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.7764706, green: 0.96862745, blue: 0.85490197, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_200',
                        value: '#c6f7da',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.4509804, green: 0.89411765, blue: 0.63529414, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_300',
                        value: '#73e4a2',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.1764706, green: 0.7176471, blue: 0.5137255, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green',
                        value: '#2db783',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'green-500',
                platforms: {
                    scss: {
                        name: '$tp-color__green-500',
                        value: '#109e78',
                    },
                    javascript: {
                        name: 'tpColorGreen500',
                        value: '#109e78',
                    },
                    ios: {
                        name: 'green500',
                        description: 'Green 500 – #109e78',
                        value:
                            'UIColor = UIColor(red: 0.0627451, green: 0.61960787, blue: 0.47058824, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_500',
                        value: '#109e78',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'green-600',
                platforms: {
                    scss: {
                        name: '$tp-color__green-600',
                        value: '#0f6648',
                    },
                    javascript: {
                        name: 'tpColorGreen600',
                        value: '#0f6648',
                    },
                    ios: {
                        name: 'green600',
                        description: 'Green 600 – #0f6648',
                        value:
                            'UIColor = UIColor(red: 0.05882353, green: 0.4, blue: 0.28235295, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_green_600',
                        value: '#0f6648',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.99215686, green: 0.96862745, blue: 0.90588236, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_100',
                        value: '#fdf7e7',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 1.0, green: 0.92156863, blue: 0.7019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_200',
                        value: '#ffebb3',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 1.0, green: 0.8666667, blue: 0.5019608, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_300',
                        value: '#ffdd80',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.99607843, green: 0.74509805, blue: 0.078431375, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow',
                        value: '#febe14',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'yellow-500',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow-500',
                        value: '#d48300',
                    },
                    javascript: {
                        name: 'tpColorYellow500',
                        value: '#d48300',
                    },
                    ios: {
                        name: 'yellow500',
                        description: 'Yellow 500 – #d48300',
                        value:
                            'UIColor = UIColor(red: 0.83137256, green: 0.5137255, blue: 0.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_500',
                        value: '#d48300',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'yellow-600',
                platforms: {
                    scss: {
                        name: '$tp-color__yellow-600',
                        value: '#8a5500',
                    },
                    javascript: {
                        name: 'tpColorYellow600',
                        value: '#8a5500',
                    },
                    ios: {
                        name: 'yellow600',
                        description: 'Yellow 600 – #8a5500',
                        value:
                            'UIColor = UIColor(red: 0.5411765, green: 0.33333334, blue: 0.0, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_yellow_600',
                        value: '#8a5500',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 1.0, green: 0.9372549, blue: 0.9411765, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_100',
                        value: '#ffeff0',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 1.0, green: 0.8509804, blue: 0.8509804, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_200',
                        value: '#ffd9d9',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 1.0, green: 0.6901961, blue: 0.6901961, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_300',
                        value: '#ffb0b0',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 1.0, green: 0.3529412, blue: 0.37254903, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red',
                        value: '#ff5a5f',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'red-500',
                platforms: {
                    scss: {
                        name: '$tp-color__red-500',
                        value: '#cc3553',
                    },
                    javascript: {
                        name: 'tpColorRed500',
                        value: '#cc3553',
                    },
                    ios: {
                        name: 'red500',
                        description: 'Red 500 – #cc3553',
                        value:
                            'UIColor = UIColor(red: 0.8, green: 0.20784314, blue: 0.3254902, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_500',
                        value: '#cc3553',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'red-600',
                platforms: {
                    scss: {
                        name: '$tp-color__red-600',
                        value: '#76012c',
                    },
                    javascript: {
                        name: 'tpColorRed600',
                        value: '#76012c',
                    },
                    ios: {
                        name: 'red600',
                        description: 'Red 600 – #76012c',
                        value:
                            'UIColor = UIColor(red: 0.4627451, green: 0.003921569, blue: 0.17254902, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_red_600',
                        value: '#76012c',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.40392157, green: 0.42745098, blue: 0.4509804, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_black_300',
                        value: '#676d73',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.18431373, green: 0.1882353, blue: 0.2, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_black',
                        value: '#2f3033',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.98039216, green: 0.98039216, blue: 0.98039216, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_gray_200',
                        value: '#fafafa',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.9137255, green: 0.9254902, blue: 0.92941177, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_gray_300',
                        value: '#e9eced',
                    },
                },
                format: 'color',
                type: 'string',
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
                        value:
                            'UIColor = UIColor(red: 0.827451, green: 0.83137256, blue: 0.8352941, alpha: 1.0)',
                    },
                    android: {
                        name: 'tp_gray',
                        value: '#d3d4d5',
                    },
                },
                format: 'color',
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
            },
        ],
    },
    {
        name: 'Font Weight',
        tokens: [
            {
                id: 'normal',
                platforms: {
                    scss: {
                        name: '$tp-font-weight__normal',
                        value: '400',
                    },
                    javascript: {
                        name: 'tpFontWeightNormal',
                        value: '400',
                    },
                },
                type: 'string',
            },
            {
                id: 'bold',
                platforms: {
                    scss: {
                        name: '$tp-font-weight__bold',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontWeightBold',
                        value: '700',
                    },
                },
                type: 'string',
            },
        ],
    },
    {
        name: 'Font',
        tokens: [
            {
                group: 'Title 1',
                id: 'title__1__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__size',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle1Size',
                        value: '28px',
                    },
                },
            },
            {
                group: 'Title 1',
                id: 'title__1__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__line-height',
                        value: '32px',
                    },
                    javascript: {
                        name: 'tpFontTitle1LineHeight',
                        value: '32px',
                    },
                },
            },
            {
                group: 'Title 1',
                id: 'title__1__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__1__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle1Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__size',
                type: 'string',
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
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__line-height',
                type: 'string',
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
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__weight',
                type: 'string',
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
            },
            {
                group: 'Title 2',
                id: 'title__2__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__size',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontTitle2Size',
                        value: '24px',
                    },
                },
            },
            {
                group: 'Title 2',
                id: 'title__2__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__line-height',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle2LineHeight',
                        value: '28px',
                    },
                },
            },
            {
                group: 'Title 2',
                id: 'title__2__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__2__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle2Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__size',
                type: 'string',
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
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__line-height',
                type: 'string',
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
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__weight',
                type: 'string',
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
            },
            {
                group: 'Title 3',
                id: 'title__3__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__size',
                        value: '22px',
                    },
                    javascript: {
                        name: 'tpFontTitle3Size',
                        value: '22px',
                    },
                },
            },
            {
                group: 'Title 3',
                id: 'title__3__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__line-height',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle3LineHeight',
                        value: '28px',
                    },
                },
            },
            {
                group: 'Title 3',
                id: 'title__3__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__3__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle3Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__size',
                type: 'string',
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
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__line-height',
                type: 'string',
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
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__weight',
                type: 'string',
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
            },
            {
                group: 'Title 4',
                id: 'title__4__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__4__size',
                        value: '20px',
                    },
                    javascript: {
                        name: 'tpFontTitle4Size',
                        value: '20px',
                    },
                },
            },
            {
                group: 'Title 4',
                id: 'title__4__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__4__line-height',
                        value: '28px',
                    },
                    javascript: {
                        name: 'tpFontTitle4LineHeight',
                        value: '28px',
                    },
                },
            },
            {
                group: 'Title 4',
                id: 'title__4__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__4__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle4Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Title 5',
                id: 'title__5__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__5__size',
                        value: '18px',
                    },
                    javascript: {
                        name: 'tpFontTitle5Size',
                        value: '18px',
                    },
                },
            },
            {
                group: 'Title 5',
                id: 'title__5__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__5__line-height',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontTitle5LineHeight',
                        value: '24px',
                    },
                },
            },
            {
                group: 'Title 5',
                id: 'title__5__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__5__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle5Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Title 6',
                id: 'title__6__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__6__size',
                        value: '16px',
                    },
                    javascript: {
                        name: 'tpFontTitle6Size',
                        value: '16px',
                    },
                },
            },
            {
                group: 'Title 6',
                id: 'title__6__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__6__line-height',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontTitle6LineHeight',
                        value: '24px',
                    },
                },
            },
            {
                group: 'Title 6',
                id: 'title__6__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__6__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle6Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Title 7',
                id: 'title__7__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__7__size',
                        value: '14px',
                    },
                    javascript: {
                        name: 'tpFontTitle7Size',
                        value: '14px',
                    },
                },
            },
            {
                group: 'Title 7',
                id: 'title__7__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__7__line-height',
                        value: '20px',
                    },
                    javascript: {
                        name: 'tpFontTitle7LineHeight',
                        value: '20px',
                    },
                },
            },
            {
                group: 'Title 7',
                id: 'title__7__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__7__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle7Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Title 8',
                id: 'title__8__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__8__size',
                        value: '12px',
                    },
                    javascript: {
                        name: 'tpFontTitle8Size',
                        value: '12px',
                    },
                },
            },
            {
                group: 'Title 8',
                id: 'title__8__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__8__line-height',
                        value: '18px',
                    },
                    javascript: {
                        name: 'tpFontTitle8LineHeight',
                        value: '18px',
                    },
                },
            },
            {
                group: 'Title 8',
                id: 'title__8__weight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__title__8__weight',
                        value: '700',
                    },
                    javascript: {
                        name: 'tpFontTitle8Weight',
                        value: '700',
                    },
                },
            },
            {
                group: 'Body 1',
                id: 'body__1__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__body__1__size',
                        value: '16px',
                    },
                    javascript: {
                        name: 'tpFontBody1Size',
                        value: '16px',
                    },
                },
            },
            {
                group: 'Body 1',
                id: 'body__1__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__body__1__line-height',
                        value: '24px',
                    },
                    javascript: {
                        name: 'tpFontBody1LineHeight',
                        value: '24px',
                    },
                },
            },
            {
                group: 'Body 2',
                id: 'body__2__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__body__2__size',
                        value: '14px',
                    },
                    javascript: {
                        name: 'tpFontBody2Size',
                        value: '14px',
                    },
                },
            },
            {
                group: 'Body 2',
                id: 'body__2__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__body__2__line-height',
                        value: '20px',
                    },
                    javascript: {
                        name: 'tpFontBody2LineHeight',
                        value: '20px',
                    },
                },
            },
            {
                group: 'Body 3',
                id: 'body__3__size',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__body__3__size',
                        value: '12px',
                    },
                    javascript: {
                        name: 'tpFontBody3Size',
                        value: '12px',
                    },
                },
            },
            {
                group: 'Body 3',
                id: 'body__3__line-height',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-font__body__3__line-height',
                        value: '18px',
                    },
                    javascript: {
                        name: 'tpFontBody3LineHeight',
                        value: '18px',
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
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-letter-spacing__loose',
                        value: '1px',
                    },
                    javascript: {
                        name: 'tpLetterSpacingLoose',
                        value: '1px',
                    },
                },
            },
            {
                id: 'tight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-letter-spacing__tight',
                        value: '-1px',
                    },
                    javascript: {
                        name: 'tpLetterSpacingTight',
                        value: '-1px',
                    },
                },
            },
            {
                id: 'extra-tight',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-letter-spacing__extra-tight',
                        value: '-2px',
                    },
                    javascript: {
                        name: 'tpLetterSpacingExtraTight',
                        value: '-2px',
                    },
                },
            },
        ],
    },
    {
        name: 'Line Height',
        tokens: [
            {
                id: 'base',
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
        description: 'Values for transparent light or dark curtains used to cover content.',
        tokens: [
            {
                id: 'light',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-scrim__light',
                        value: 'rgba(255, 255, 255, 0.8)',
                    },
                    javascript: {
                        name: 'tpScrimLight',
                        value: 'rgba(255, 255, 255, 0.8)',
                    },
                    ios: {
                        name: 'light',
                        value: 'UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.8)',
                    },
                    android: {
                        name: 'tp_scrim_light',
                        value: '#ccffffff',
                    },
                },
            },
            {
                id: 'dark',
                type: 'string',
                platforms: {
                    scss: {
                        name: '$tp-scrim__dark',
                        value: 'rgba(0, 0, 0, 0.8)',
                    },
                    javascript: {
                        name: 'tpScrimDark',
                        value: 'rgba(0, 0, 0, 0.8)',
                    },
                    ios: {
                        name: 'dark',
                        value: 'UIColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 0.8)',
                    },
                    android: {
                        name: 'tp_scrim_dark',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'string',
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
                type: 'number',
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
