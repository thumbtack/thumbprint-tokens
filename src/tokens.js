module.exports = [
    {
        name: 'Border Radius',
        tokens: [
            {
                id: 'base',
                value: { web: '4px' },
            },
            {
                id: 'big',
                value: { web: '6px' },
            },
            {
                id: 'full',
                value: { web: '50%' },
            },
            {
                id: 'sides',
                value: { web: '9999px' },
            },
        ],
    },
    {
        name: 'Breakpoint',
        tokens: [
            {
                id: 'large',
                value: { web: '1025px' },
            },
            {
                id: 'large__value',
                value: { web: 1025 },
            },
            {
                id: 'medium',
                value: { web: '700px' },
            },
            {
                id: 'medium__value',
                value: { web: 700 },
            },
            {
                id: 'small',
                value: { web: '481px' },
            },
            {
                id: 'small__value',
                value: { web: 481 },
            },
            {
                id: 'split-view__medium',
                value: { web: '1060px' },
            },
            {
                id: 'split-view__medium__value',
                value: { web: 1060 },
            },
            {
                id: 'split-view__small',
                value: { web: '769px' },
            },
            {
                id: 'split-view__small__value',
                value: { web: 769 },
            },
        ],
    },
    {
        name: 'Color',
        description: 'These are the colors we use at Thumbtack.',
        tokens: [
            {
                id: 'blue-100',
                description: {
                    ios: 'Blue 100 – #eaf6fa',
                },
                value: {
                    web: '#eaf6fa',
                    android: '#eaf6fa',
                    ios:
                        'UIColor = UIColor(red: 0.91764706, green: 0.9647059, blue: 0.98039216, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'blue-200',
                description: {
                    ios: 'Blue 200 – #b3ebff',
                },
                value: {
                    web: '#b3ebff',
                    android: '#b3ebff',
                    ios:
                        'UIColor = UIColor(red: 0.7019608, green: 0.92156863, blue: 1.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'blue-300',
                description: {
                    ios: 'Blue 300 – #79d2f2',
                },
                value: {
                    web: '#79d2f2',
                    android: '#79d2f2',
                    ios:
                        'UIColor = UIColor(red: 0.4745098, green: 0.8235294, blue: 0.9490196, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'blue',
                description: {
                    ios: 'Blue – #009fd9',
                },
                value: {
                    web: '#009fd9',
                    android: '#009fd9',
                    ios:
                        'UIColor = UIColor(red: 0.0, green: 0.62352943, blue: 0.8509804, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'blue-500',
                description: {
                    ios: 'Blue 500 – #007fad',
                },
                value: {
                    web: '#007fad',
                    android: '#007fad',
                    ios:
                        'UIColor = UIColor(red: 0.0, green: 0.49803922, blue: 0.6784314, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'blue-600',
                description: {
                    ios: 'Blue 600 – #005a7a',
                },
                value: {
                    web: '#005a7a',
                    android: '#005a7a',
                    ios:
                        'UIColor = UIColor(red: 0.0, green: 0.3529412, blue: 0.47843137, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'indigo-100',
                description: {
                    ios: 'Indigo 100 – #e8f1fd',
                },
                value: {
                    web: '#e8f1fd',
                    android: '#e8f1fd',
                    ios:
                        'UIColor = UIColor(red: 0.9098039, green: 0.94509804, blue: 0.99215686, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'indigo-200',
                description: {
                    ios: 'Indigo 200 – #cce1ff',
                },
                value: {
                    web: '#cce1ff',
                    android: '#cce1ff',
                    ios: 'UIColor = UIColor(red: 0.8, green: 0.88235295, blue: 1.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'indigo-300',
                description: {
                    ios: 'Indigo 300 – #96c2ff',
                },
                value: {
                    web: '#96c2ff',
                    android: '#96c2ff',
                    ios:
                        'UIColor = UIColor(red: 0.5882353, green: 0.7607843, blue: 1.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'indigo',
                description: {
                    ios: 'Indigo – #5968e2',
                },
                value: {
                    web: '#5968e2',
                    android: '#5968e2',
                    ios:
                        'UIColor = UIColor(red: 0.34901962, green: 0.40784314, blue: 0.8862745, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'indigo-500',
                description: {
                    ios: 'Indigo 500 – #4f54b3',
                },
                value: {
                    web: '#4f54b3',
                    android: '#4f54b3',
                    ios:
                        'UIColor = UIColor(red: 0.30980393, green: 0.32941177, blue: 0.7019608, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'indigo-600',
                description: {
                    ios: 'Indigo 600 – #383c80',
                },
                value: {
                    web: '#383c80',
                    android: '#383c80',
                    ios:
                        'UIColor = UIColor(red: 0.21960784, green: 0.23529412, blue: 0.5019608, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'purple-100',
                description: {
                    ios: 'Purple 100 – #f5efff',
                },
                value: {
                    web: '#f5efff',
                    android: '#f5efff',
                    ios:
                        'UIColor = UIColor(red: 0.9607843, green: 0.9372549, blue: 1.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'purple-200',
                description: {
                    ios: 'Purple 200 – #dfccff',
                },
                value: {
                    web: '#dfccff',
                    android: '#dfccff',
                    ios: 'UIColor = UIColor(red: 0.8745098, green: 0.8, blue: 1.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'purple-300',
                description: {
                    ios: 'Purple 300 – #d3baff',
                },
                value: {
                    web: '#d3baff',
                    android: '#d3baff',
                    ios:
                        'UIColor = UIColor(red: 0.827451, green: 0.7294118, blue: 1.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'purple',
                description: {
                    ios: 'Purple – #a97ff0',
                },
                value: {
                    web: '#a97ff0',
                    android: '#a97ff0',
                    ios:
                        'UIColor = UIColor(red: 0.6627451, green: 0.49803922, blue: 0.9411765, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'purple-500',
                description: {
                    ios: 'Purple 500 – #8a5ed6',
                },
                value: {
                    web: '#8a5ed6',
                    android: '#8a5ed6',
                    ios:
                        'UIColor = UIColor(red: 0.5411765, green: 0.36862746, blue: 0.8392157, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'purple-600',
                description: {
                    ios: 'Purple 600 – #502095',
                },
                value: {
                    web: '#502095',
                    android: '#502095',
                    ios:
                        'UIColor = UIColor(red: 0.3137255, green: 0.1254902, blue: 0.58431375, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'green-100',
                description: {
                    ios: 'Green 100 – #e1fdf3',
                },
                value: {
                    web: '#e1fdf3',
                    android: '#e1fdf3',
                    ios:
                        'UIColor = UIColor(red: 0.88235295, green: 0.99215686, blue: 0.9529412, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'green-200',
                description: {
                    ios: 'Green 200 – #c6f7da',
                },
                value: {
                    web: '#c6f7da',
                    android: '#c6f7da',
                    ios:
                        'UIColor = UIColor(red: 0.7764706, green: 0.96862745, blue: 0.85490197, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'green-300',
                description: {
                    ios: 'Green 300 – #73e4a2',
                },
                value: {
                    web: '#73e4a2',
                    android: '#73e4a2',
                    ios:
                        'UIColor = UIColor(red: 0.4509804, green: 0.89411765, blue: 0.63529414, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'green',
                description: {
                    ios: 'Green – #2db783',
                },
                value: {
                    web: '#2db783',
                    android: '#2db783',
                    ios:
                        'UIColor = UIColor(red: 0.1764706, green: 0.7176471, blue: 0.5137255, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'green-500',
                description: {
                    ios: 'Green 500 – #109e78',
                },
                value: {
                    web: '#109e78',
                    android: '#109e78',
                    ios:
                        'UIColor = UIColor(red: 0.0627451, green: 0.61960787, blue: 0.47058824, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'green-600',
                description: {
                    ios: 'Green 600 – #0f6648',
                },
                value: {
                    web: '#0f6648',
                    android: '#0f6648',
                    ios:
                        'UIColor = UIColor(red: 0.05882353, green: 0.4, blue: 0.28235295, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'yellow-100',
                description: {
                    ios: 'Yellow 100 – #fdf7e7',
                },
                value: {
                    web: '#fdf7e7',
                    android: '#fdf7e7',
                    ios:
                        'UIColor = UIColor(red: 0.99215686, green: 0.96862745, blue: 0.90588236, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'yellow-200',
                description: {
                    ios: 'Yellow 200 – #ffebb3',
                },
                value: {
                    web: '#ffebb3',
                    android: '#ffebb3',
                    ios:
                        'UIColor = UIColor(red: 1.0, green: 0.92156863, blue: 0.7019608, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'yellow-300',
                description: {
                    ios: 'Yellow 300 – #ffdd80',
                },
                value: {
                    web: '#ffdd80',
                    android: '#ffdd80',
                    ios:
                        'UIColor = UIColor(red: 1.0, green: 0.8666667, blue: 0.5019608, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'yellow',
                description: {
                    ios: 'Yellow – #febe14',
                },
                value: {
                    web: '#febe14',
                    android: '#febe14',
                    ios:
                        'UIColor = UIColor(red: 0.99607843, green: 0.74509805, blue: 0.078431375, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'yellow-500',
                description: {
                    ios: 'Yellow 500 – #d48300',
                },
                value: {
                    web: '#d48300',
                    android: '#d48300',
                    ios:
                        'UIColor = UIColor(red: 0.83137256, green: 0.5137255, blue: 0.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'yellow-600',
                description: {
                    ios: 'Yellow 600 – #8a5500',
                },
                value: {
                    web: '#8a5500',
                    android: '#8a5500',
                    ios:
                        'UIColor = UIColor(red: 0.5411765, green: 0.33333334, blue: 0.0, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'red-100',
                description: {
                    ios: 'Red 100 – #ffeff0',
                },
                value: {
                    web: '#ffeff0',
                    android: '#ffeff0',
                    ios:
                        'UIColor = UIColor(red: 1.0, green: 0.9372549, blue: 0.9411765, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'red-200',
                description: {
                    ios: 'Red 200 – #ffd9d9',
                },
                value: {
                    web: '#ffd9d9',
                    android: '#ffd9d9',
                    ios:
                        'UIColor = UIColor(red: 1.0, green: 0.8509804, blue: 0.8509804, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'red-300',
                description: {
                    ios: 'Red 300 – #ffb0b0',
                },
                value: {
                    web: '#ffb0b0',
                    android: '#ffb0b0',
                    ios:
                        'UIColor = UIColor(red: 1.0, green: 0.6901961, blue: 0.6901961, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'red',
                description: {
                    ios: 'Red – #ff5a5f',
                },
                value: {
                    web: '#ff5a5f',
                    android: '#ff5a5f',
                    ios:
                        'UIColor = UIColor(red: 1.0, green: 0.3529412, blue: 0.37254903, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'red-500',
                description: {
                    ios: 'Red 500 – #cc3553',
                },
                value: {
                    web: '#cc3553',
                    android: '#cc3553',
                    ios:
                        'UIColor = UIColor(red: 0.8, green: 0.20784314, blue: 0.3254902, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'red-600',
                description: {
                    ios: 'Red 600 – #76012c',
                },
                value: {
                    web: '#76012c',
                    android: '#76012c',
                    ios:
                        'UIColor = UIColor(red: 0.4627451, green: 0.003921569, blue: 0.17254902, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'black-300',
                description: {
                    ios: 'Black 300 – #676d73',
                },
                value: {
                    web: '#676d73',
                    android: '#676d73',
                    ios:
                        'UIColor = UIColor(red: 0.40392157, green: 0.42745098, blue: 0.4509804, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'black',
                description: {
                    ios: 'Black – #2f3033',
                },
                value: {
                    web: '#2f3033',
                    android: '#2f3033',
                    ios:
                        'UIColor = UIColor(red: 0.18431373, green: 0.1882353, blue: 0.2, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'gray-200',
                description: {
                    ios: 'Gray 200 – #fafafa',
                },
                value: {
                    web: '#fafafa',
                    android: '#fafafa',
                    ios:
                        'UIColor = UIColor(red: 0.98039216, green: 0.98039216, blue: 0.98039216, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'gray-300',
                description: {
                    ios: 'Gray 300 – #e9eced',
                },
                value: {
                    web: '#e9eced',
                    android: '#e9eced',
                    ios:
                        'UIColor = UIColor(red: 0.9137255, green: 0.9254902, blue: 0.92941177, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'gray',
                description: {
                    ios: 'Gray – #d3d4d5',
                },
                value: {
                    web: '#d3d4d5',
                    android: '#d3d4d5',
                    ios:
                        'UIColor = UIColor(red: 0.827451, green: 0.83137256, blue: 0.8352941, alpha: 1.0)',
                },
                type: 'color',
            },
            {
                id: 'white',
                description: {
                    ios: 'White – #ffffff',
                },
                value: {
                    web: '#ffffff',
                    android: '#ffffff',
                    ios: 'UIColor = UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)',
                },
                type: 'color',
            },
        ],
    },
    {
        name: 'Font Family',
        tokens: [
            {
                id: 'base',
                value: { web: 'Mark, Avenir, Helvetica, Arial, sans-serif' },
            },
            {
                id: 'monospace',
                value: { web: "'Source Code Pro', monospace" },
            },
        ],
    },
    {
        name: 'Font Weight',
        tokens: [
            {
                id: 'normal',
                value: { web: '400' },
            },
            {
                id: 'bold',
                value: { web: '700' },
            },
        ],
    },
    {
        name: 'Font',
        tokens: [
            {
                group: 'Title 1',
                id: 'title__1__size',
                value: { web: '28px' },
            },
            {
                group: 'Title 1',
                id: 'title__1__line-height',
                value: { web: '32px' },
            },
            {
                group: 'Title 1',
                id: 'title__1__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__size',
                value: { web: '40px' },
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__line-height',
                value: { web: '44px' },
            },
            {
                group: 'Title 1',
                id: 'title__1__responsive__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 2',
                id: 'title__2__size',
                value: { web: '24px' },
            },
            {
                group: 'Title 2',
                id: 'title__2__line-height',
                value: { web: '28px' },
            },
            {
                group: 'Title 2',
                id: 'title__2__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__size',
                value: { web: '32px' },
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__line-height',
                value: { web: '40px' },
            },
            {
                group: 'Title 2',
                id: 'title__2__responsive__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 3',
                id: 'title__3__size',
                value: { web: '22px' },
            },
            {
                group: 'Title 3',
                id: 'title__3__line-height',
                value: { web: '28px' },
            },
            {
                group: 'Title 3',
                id: 'title__3__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__size',
                value: { web: '24px' },
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__line-height',
                value: { web: '32px' },
            },
            {
                group: 'Title 3',
                id: 'title__3__responsive__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 4',
                id: 'title__4__size',
                value: { web: '20px' },
            },
            {
                group: 'Title 4',
                id: 'title__4__line-height',
                value: { web: '28px' },
            },
            {
                group: 'Title 4',
                id: 'title__4__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 5',
                id: 'title__5__size',
                value: { web: '18px' },
            },
            {
                group: 'Title 5',
                id: 'title__5__line-height',
                value: { web: '24px' },
            },
            {
                group: 'Title 5',
                id: 'title__5__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 6',
                id: 'title__6__size',
                value: { web: '16px' },
            },
            {
                group: 'Title 6',
                id: 'title__6__line-height',
                value: { web: '24px' },
            },
            {
                group: 'Title 6',
                id: 'title__6__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 7',
                id: 'title__7__size',
                value: { web: '14px' },
            },
            {
                group: 'Title 7',
                id: 'title__7__line-height',
                value: { web: '20px' },
            },
            {
                group: 'Title 7',
                id: 'title__7__weight',
                value: { web: '700' },
            },
            {
                group: 'Title 8',
                id: 'title__8__size',
                value: { web: '12px' },
            },
            {
                group: 'Title 8',
                id: 'title__8__line-height',
                value: { web: '18px' },
            },
            {
                group: 'Title 8',
                id: 'title__8__weight',
                value: { web: '700' },
            },
            {
                group: 'Body 1',
                id: 'body__1__size',
                value: { web: '16px' },
            },
            {
                group: 'Body 1',
                id: 'body__1__line-height',
                value: { web: '24px' },
            },
            {
                group: 'Body 2',
                id: 'body__2__size',
                value: { web: '14px' },
            },
            {
                group: 'Body 2',
                id: 'body__2__line-height',
                value: { web: '20px' },
            },
            {
                group: 'Body 3',
                id: 'body__3__size',
                value: { web: '12px' },
            },
            {
                group: 'Body 3',
                id: 'body__3__line-height',
                value: { web: '18px' },
            },
        ],
    },
    {
        name: 'Letter Spacing',
        tokens: [
            {
                id: 'loose',
                value: { web: '1px' },
            },
            {
                id: 'tight',
                value: { web: '-1px' },
            },
            {
                id: 'extra-tight',
                value: { web: '-2px' },
            },
        ],
    },
    {
        name: 'Line Height',
        tokens: [
            {
                id: 'base',
                value: { web: '1.6' },
            },
            {
                id: 'tight',
                value: { web: '1.4' },
            },
            {
                id: 'loose',
                value: { web: '1.9' },
            },
        ],
    },
    {
        name: 'Shadow',
        tokens: [
            {
                id: '100',
                value: { web: '0px 1px 3px rgba(0, 0, 0, 0.1)' },
            },
            {
                id: '200',
                value: { web: '0px 2px 4px rgba(0, 0, 0, 0.15)' },
            },
            {
                id: '300',
                value: { web: '0px 2px 7px rgba(0, 0, 0, 0.15)' },
            },
            {
                id: '400',
                value: { web: '0px 2px 10px rgba(0, 0, 0, 0.2)' },
            },
            {
                id: 'card',
                deprecated: true,
                value: {
                    web: '0 -1px 1px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',
                },
            },
        ],
    },
    {
        name: 'Space',
        tokens: [
            {
                id: '1',
                description: {
                    ios: 'Space 1 – 4.0pt',
                },
                value: { web: '4px', ios: 'CGFloat = 4.0', android: '4dp' },
                type: 'size',
            },
            {
                id: '2',
                description: {
                    ios: 'Space 2 – 8.0pt',
                },
                value: { web: '8px', ios: 'CGFloat = 8.0', android: '8dp' },
                type: 'size',
            },
            {
                id: '3',
                description: {
                    ios: 'Space 3 – 16.0pt',
                },
                value: { web: '16px', ios: 'CGFloat = 16.0', android: '16dp' },
                type: 'size',
            },
            {
                id: '4',
                description: {
                    ios: 'Space 4 – 24.0pt',
                },
                value: { web: '24px', ios: 'CGFloat = 24.0', android: '24dp' },
                type: 'size',
            },
            {
                id: '5',
                description: {
                    ios: 'Space 5 – 32.0pt',
                },
                value: { web: '32px', ios: 'CGFloat = 32.0', android: '32dp' },
                type: 'size',
            },
            {
                id: '6',
                description: {
                    ios: 'Space 6 – 48.0pt',
                },
                value: { web: '64px', ios: 'CGFloat = 48.0', android: '48dp' },
                type: 'size',
            },
            {
                id: '7',
                value: { web: '128px' },
                type: 'size',
            },
            {
                id: '8',
                value: { web: '256px' },
                type: 'size',
            },
        ],
    },
    {
        name: 'Wrap',
        tokens: [
            {
                id: 'max-width',
                value: { web: '946px' },
            },
            {
                id: 'no-pad-width',
                value: { web: '1010px' },
            },
        ],
    },
    {
        name: 'Z-Index',
        description: 'Values to help stack Thumbprint UI components.',
        tokens: [
            {
                id: 'modal',
                value: { web: 200 },
            },
        ],
    },
];
