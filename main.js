function switchTheme() {
  let altTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'darkmode' : 'lightmode'
  document.documentElement.classList.toggle(altTheme)
}
