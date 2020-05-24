/*

Ex1: 
- density: 0
- breakpoint: 0

... px: spacer.tight ([3, 5, 6, 8])
                       ⬆
    ... space[3] => 8px


Ex2: 
- density: 0 => space = [0, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128, 160]

- breakpoint: 1

... px: spacer.tight ([3, 5, 6, 8])
                          ⬆
    ... space[5] => 12px

Ex3: 
- density: 1 => space = [0, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128, 160] * 1.3
- breakpoint: 1

... px: spacer.tight ([3, 5, 6, 8])
                          ⬆
    ... space[5] => 8px


*/


export default (density) => ({
    fonts: {
        body: 'Georgia, Cambria, "Times New Roman", Times, serif',
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    fontSizes: [10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80],

    fontWeights: {
        body: 400,
        heading: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    colors: {
        text: '#392a25',
        muted: '#aaaaaa',
        background: '#f8f8f8',
        foreground: '#ffffff',
        primary: '#92b955',
        secondary: '#9f8a6d',
        white: '#000'
    },
    radii: [0, 4, 6, 8, 10, 12, 14, 16, 20, '50%'],
    space: density === 'low' ? [0, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128, 160] : [
        [0, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128, 160]
    ],

    // [0, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128, 160]

    breakpoints: ['512px', '896px', '1280px'],


});

export const spacer = {
    flush: 0,
    tightest: [1, 2, 3, 4],
    tighter: [2, 3, 5, 6],
    tight: [3, 5, 6, 8],
    normal: [5, 7, 9, 10],
    loose: [6, 9, 11, 12],
    looser: [9, 13, 14, 15],
    loosest: [13, 16, 17, 18]
}

export const heading = {
    h1: [7, 10, 11, 12],
    h2: [6, 8, 9, 10],
    h3: [5, 6, 7, 8],
    h4: [4, 4, 5, 6],
}

export const text = {
    b1: [3, 3, 4, 5],
    b2: [2, 2, 3, 4],
    b3: [1, 1, 2, 3],
    b4: [0, 0, 1, 2],
}



export const corner = {
    edge: 0,
    smooth: [1, 2, 3, 4], // this should probably change to ignore 2 breakpoints ie: 1, null, 2, null / 1,1,2,2
    smoother: [3, 4, 5, 6],
    smoothest: [5, 6, 7, 8],
    round: 9,
}