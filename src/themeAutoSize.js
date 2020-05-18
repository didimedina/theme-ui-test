const themeAutoSize = {

    // Theme-UI "fontSizes" options avail in theme.js:
    // 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80

    heading: {
        h1: [7, 10, 11, 12],
        h2: [6, 8, 9, 10],
        h3: [5, 6, 7, 8],
        h4: [4, 4, 5, 6],
    },

    text: {
        b1: [3, 3, 4, 5],
        b2: [2, 2, 3, 4],
        b3: [1, 1, 2, 3],
        b4: [0, 0, 1, 2],
    },
    
    
    // Theme-UI "space" options avail in theme.js:
    // 0, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128, 160
    
    spacer: {
        flush: 0,
        tightest: [1, 2, 3, 4],
        tighter: [2, 3, 5, 6],
        tight: [3, 5, 6, 8],
        normal: [5, 7, 9, 10],
        loose: [6, 9, 11, 12],
        looser: [9, 13, 14, 15],
        loosest: [13, 16, 17, 18]
    },

    // Theme-UI "space" options avail in theme.js:
    // 0, 4, 6, 8, 10, 12, 14, 16, 20, '100%'
    // 0(0), 4(1), 6(2), 8(3), 10(4), 12(5), 14(6), 16(7), 20(8), '50%'(9)

    corner: {
        edge: 0,
        smooth: [1, 2, 3, 4],
        smoother: [3, 4, 5, 6],
        smoothest: [5, 6, 7, 8],
        round: 9,
    }

}

export default themeAutoSize



