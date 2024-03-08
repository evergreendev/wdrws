import { Newsreader, PT_Sans, Lato } from 'next/font/google'

export const newsreader = Newsreader({
    subsets: ['latin'],
    variable: '--font-newsreader'
});

export const pt_sans = PT_Sans({subsets: ['latin'], weight:["400","700"], variable:'--font-ptsans'});

export const lato = Lato({subsets: ['latin'], weight: ["100", "700", "900"], variable:'--font-lato'})