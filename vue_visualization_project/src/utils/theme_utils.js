const theme = {
  chalk: {
    backgroundColor: '#161522',
    titleColor: '#fff',
    bgColor: '#222733',
    logoSrc: 'logo_dark.png',
    themeSrc: 'qiehuan_dark.png',
    headerLine: 'header_border_dark.png'
  },
  vintage: {
    backgroundColor: '#eee',
    titleColor: '#000',
    bgColor: '#fff',
    logoSrc: 'logo_light.png',
    themeSrc: 'qiehuan_light.png',
    headerLine: 'header_border_light.png'
  }
}

export function getThemeValue(themeName) {
  return theme[themeName]
}
