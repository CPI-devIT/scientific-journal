export const fontsTask = () => {
  const { plugins, paths } = global.app

  return plugins.gulp.src(paths.fonts.src, { encoding: false })
    .pipe(plugins.ttf2woff())
    .pipe(plugins.gulp.dest(paths.fonts.app))
    .on('end', () => {
      // После конвертации TTF в WOFF, запускаем конвертацию в WOFF2
      plugins.gulp.src(paths.fonts.src, { encoding: false })
        .pipe(plugins.ttf2woff2())
        .pipe(plugins.gulp.dest(paths.fonts.app))
    })

}
