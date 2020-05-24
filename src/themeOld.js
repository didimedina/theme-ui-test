
export default {
    fonts: {
        body: 'Georgia, Cambria, "Times New Roman", Times, serif',
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    fontSizes: 
        [
            /* SM */ 10, 12, 14, 16, 20, 24, 28, 32,
            /* MD */ 10, 12, 14, 16, 20, 28, 40, 56,
            /* LG */ 12, 14, 16, 20, 24, 32, 48, 64,
            /* XL */ 14, 16, 20, 24, 28, 40, 56, 80
        ],

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
    
    radii: 
        [             0, 
            /* SM */  4,  8, 12, 
            /* MD */  4,  8, 12,
            /* LG */  6, 10, 16,
            /* XL */  6, 10, 16,
                      '50%'
        ],
    
    space: 
        [ 
                      0,
            /* SM */  4,  6,  8, 12, 16, 24, 48,
            /* MD */  5,  7, 10, 14, 20, 28, 56,
            /* LG */  6,  8, 12, 16, 24, 32, 64,
            /* XL */  7, 10, 14, 20, 28, 40, 80,
        ],
    

    breakpoints: ['512px', '896px', '1280px'],

}

export const spacer = {
    flush:      0,
    tightest: [ 1,  8, 15, 22],
    tighter:  [ 2,  9, 16, 23],
    tight:    [ 3, 10, 17, 24],
    normal:   [ 4, 11, 18, 25],
    loose:    [ 5, 12, 19, 26],
    looser:   [ 6, 13, 20, 27],
    loosest:  [ 7, 14, 21, 28]
}

export const heading = {
    h1: [28, 29, 30, 31],
    h2: [20, 21, 22, 23],
    h3: [12, 13, 14, 15],
    h4: [ 4,  5,  6,  7],
}

export const text = {
    t1: [24, 25, 26, 27],
    t2: [16, 17, 18, 19],
    t3: [ 8,  9, 10, 11],
    t4: [ 0,  1,  2,  3],
}

export const corner = {
    edge:        0,
    smooth:    [ 1, 4, 7, 10],
    smoother:  [ 2, 5, 8, 11],
    smoothest: [ 3, 6, 9, 12],
    pill:        13,
}