const { dest } = require("gulp");

const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    pug: {
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },

    scss: {
        src: pathSrc + "/sass/*.{sass,scss}",
        watch: pathSrc + "/sass/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },

    img: {
        src: pathSrc + "/img/*.{png,svg,jpg,jpeg,gif}",
        watch: pathSrc + "/img/**/*.{png,svg,jpg,jpeg,gif}",
        dest: pathDest + "/img"
    },

    fonts: {
        src: pathSrc + "/fonts/*.*",
        watch: pathSrc + "/fonts/**/*.*",
        dest: pathDest + "/fonts"
    }
}