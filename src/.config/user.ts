import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'Bikini Bottom',
    subtitle: 'Tech & Life Adventures',
    author: 'Jarvis Ma',
    description: 'Exploring the depths of technology, sharing code adventures, and documenting life under the sea of innovation',
    website: 'https://blog-realjarvisma.vercel.app/',
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
  },
}
