import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '評價世界',
    subtitle: ' Jarvis',
    author: 'Jarvis Ma',
    description: 'A blog about programming, technology, and life.',
    website: 'https://patrickma.vercel.app/',
    navLinks: [
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Gallery',
        href: 'https://gallery.chao.cam',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/realjarvisma',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://twitter.com/realjarvisma',
      },
    ],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
      'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    locale: 'en-us',
    fonts: {
      header: '"Noto Serif SC","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Noto Serif SC","Source Han Serif SC","Source Han Serif TC",serif',
    },
  },
}
