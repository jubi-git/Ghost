export type BodyFont = 'Noto Sans' | 'Poppins' | 'Fira Sans' | 'Inter' | 'Noto Serif' | 'Lora' | 'IBM Plex Serif' | 'EB Garamond' | 'Space Mono' | 'Fira Mono' | 'JetBrains Mono';
export type HeadingFont = 'Space Grotesk' | 'Playfair Display' | 'Chakra Petch' | BodyFont;
export type CustomFonts = {heading: HeadingFont[], body: BodyFont[]};

export type FontSelection = {
    heading?: HeadingFont,
    body?: BodyFont
};

export function generateCustomFontCss(fonts: FontSelection) {
    let fontImports: string = '';
    let bodyFontCSS: string = '';
    let headingFontCSS: string = '';

    const importStrings = {
        'Space Grotesk': {
            url: '@import url(https://fonts.bunny.net/css?family=space-grotesk:700)',
            adjust: 'none'
        },
        'Playfair Display': {
            url: '@import url(https://fonts.bunny.net/css?family=playfair-display:400)',
            adjust: 'none'
        },
        'Chakra Petch': {
            url: '@import url(https://fonts.bunny.net/css?family=chakra-petch:400)',
            adjust: 'none'
        },
        'Noto Sans': {
            url: '@import url(https://fonts.bunny.net/css?family=noto-sans:400,700)',
            adjust: 'none'
        },
        Poppins: {
            url: '@import url(https://fonts.bunny.net/css?family=poppins:400,500,600)',
            adjust: 'none'
        },
        'Fira Sans': {
            url: '@import url(https://fonts.bunny.net/css?family=fira-sans:400,500,600)',
            adjust: 'none'
        },
        Inter: {
            url: '@import url(https://fonts.bunny.net/css?family=inter:400,500,600)',
            adjust: 'none'
        },
        'Noto Serif': {
            url: '@import url(https://fonts.bunny.net/css?family=noto-serif:400,700)',
            adjust: 'none'
        },
        Lora: {
            url: '@import url(https://fonts.bunny.net/css?family=lora:400,700)',
            adjust: 'none'
        },
        'IBM Plex Serif': {
            url: '@import url(https://fonts.bunny.net/css?family=ibm-plex-serif:400,500,600)',
            adjust: 'none'
        },
        'EB Garamond': {
            url: '@import url(https://fonts.bunny.net/css?family=eb-garamond:400,700)',
            adjust: 0.45
        },
        'Space Mono': {
            url: '@import url(https://fonts.bunny.net/css?family=space-mono:400,700)',
            adjust: 'none'
        },
        'Fira Mono': {
            url: '@import url(https://fonts.bunny.net/css?family=fira-mono:400,700)',
            adjust: 'none'
        },
        'JetBrains Mono': {
            url: '@import url(https://fonts.bunny.net/css?family=jetbrains-mono:400,700)',
            adjust: 'none'
        }
    };

    if (fonts?.heading && fonts?.body && fonts?.heading === fonts?.body) {
        fontImports = `${importStrings[fonts?.heading]?.url};`;
    } else {
        fontImports = '';

        if (fonts?.heading) {
            fontImports += `${importStrings[fonts?.heading]?.url};`;
        }

        if (fonts?.body) {
            fontImports += `${importStrings[fonts?.body]?.url};`;
        }
    }

    if (fonts?.body) {
        bodyFontCSS = `.gh-body-font {font-family: ${fonts.body}; font-size-adjust: ${importStrings[fonts.body].adjust};}`;
    }

    if (fonts?.heading) {
        headingFontCSS = `.gh-heading-font, .gh-content :is(h1,h2,h3,h4,h5,h6)[id] {font-family: ${fonts.heading}; font-size-adjust: ${importStrings[fonts.heading].adjust};}`;
    }

    return `<style>${fontImports}${bodyFontCSS}${headingFontCSS}</style>`;
}

export const CUSTOM_FONTS: CustomFonts = {
    heading: [
        'Chakra Petch',
        'EB Garamond',
        'Fira Mono',
        'Fira Sans',
        'IBM Plex Serif',
        'Inter',
        'JetBrains Mono',
        'Lora',
        'Noto Sans',
        'Noto Serif',
        'Playfair Display',
        'Poppins',
        'Space Grotesk',
        'Space Mono'
    ],
    body: [
        'EB Garamond',
        'Fira Mono',
        'Fira Sans',
        'IBM Plex Serif',
        'Inter',
        'JetBrains Mono',
        'Lora',
        'Noto Sans',
        'Noto Serif',
        'Poppins',
        'Space Mono'
    ]
};

export function getCustomFonts(): CustomFonts {
    return CUSTOM_FONTS;
}

export function isValidCustomFont(font: string): font is BodyFont {
    return CUSTOM_FONTS.body.includes(font as BodyFont);
}

export function isValidCustomHeadingFont(font: string): font is HeadingFont {
    return CUSTOM_FONTS.heading.includes(font as HeadingFont);
}
