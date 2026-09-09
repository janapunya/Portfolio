import leet from '../image/leetlens.jpeg'
import vibe  from '../image/vibeTune.jpeg'
import gpt  from '../image/gpt.jpeg'
export const projects = [
  {
    tag: 'FULL-STACK · 01',
    title: 'LeetLens',
    mono: leet,
    description:
      'A MERN dashboard for tracking and analyzing a LeetCode journey — JWT auth, coding stats, progress charts, submission history, and Redis-backed APIs.',
    pills: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT', 'Tailwind CSS', 'Chart.js'],
    link: 'https://github.com/janapunya/Leet_Lens',
    live: 'https://leet-lens-rho.vercel.app/',
  },
  {
    tag: 'MEDIA · 02',
    title: 'VibeTune',
    mono: vibe,
    description:
      'A front-end rebuild of the Spotify player experience — playlists, playback controls, and a dark, music-first layout.',
    pills: ['JavaScript', 'Tailwind Css', 'HTML5','React','Node.Js','APIs'],
    link: 'https://github.com/janapunya/spotify',
    live: 'https://vibetune-ten.vercel.app/',
  },
  {
    tag: 'AI TOOLS · 03',
    title: 'GPT Clone',
    mono: gpt,
    description:
      'A chat interface modeled on GPT-style assistants — message threading, streaming-style replies, and a minimal chat UI.',
    pills: ['React', 'Node.js', 'APIs'],
    link: 'https://github.com/janapunya/GPTclone',
    live: 'https://gp-tclone.vercel.app/',
  },
]
