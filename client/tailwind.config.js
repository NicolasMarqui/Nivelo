module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryOrange: "#FF4338",
                darkerOrange: "#E76F51",
                lightOrange: "rgba(231, 111, 81, 0.31)",
                primaryGreen: "#57CC99",
                lightGreen: "rgba(87, 204, 153, 0.31)",
                primaryBlue: "#68E1FD",
                lightBlue: "rgba(104, 225, 253, 0.31)",
                primaryYellow: "#F4D35E",
                lightYellow: "rgba(244, 211, 94, 0.31)",
                primaryPurple: "#8390FA",
                lightPurple: "rgba(131, 144, 250, 0.31)",
                primaryPink: "#FF928B",
                primaryRed: "#FB475E",
                overlay: "rgba(0, 0, 0, 0.47)",
                black222: "#222222",
                divider: "#C4C4C4",
                lightGray: "#F5F5F5",
                desc: "#646464",
                lightBG: "#FAFAFC",
            },
            backgroundImage: (theme) => ({
                banner: "url('/images/banner.jpg')",
                banner_t: "url('/images/banner-t.jpg')",
            }),
            backgroundPosition: {
                centerMobile: "67%",
                bannerInterno: "15% 35%",
            },
            borderColor: (theme) => ({
                orange: "#FF4338",
            }),
            fontSize: {
                nav: "1.05rem",
                heroSize: "4rem",
            },
            margin: {
                hr: "200px",
            },
            flex: {
                2: "2 2 0%",
                1.5: "1.5 1.5 0%",
            },
            fontFamily: {
                patua: ["Patua One", "cursive"],
            },
            inset: {
                topNav: "121%",
                topMobBread: "37%",
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                sideLeft: {
                    from: {
                        transform: "translateX(0px)",
                    },
                    to: {
                        transform: "translateX(300px)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.3s ease-out",
            },
        },
        variant: {
            extend: {
                display: ["group-hover", "hover"],
                borderRadius: ["group-hover", "hover"],
            },
        },
        fontFamily: ["Nunito", "Patua One"],
        container: {
            center: true,
        },
        screens: {
            xs: "640px",
            sm: "768px",
            md: "1024px",
            lg: "1280px",
            xl: "1300px",
            "2xl": "1700px",
            "3xl": "2000px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
