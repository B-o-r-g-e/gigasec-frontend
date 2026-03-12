import { DM_Sans, Syne, Space_Mono } from 'next/font/google'

export const dMSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
    display: 'swap',
})

export const syne = Syne({
    subsets: ['latin'],
    variable: '--font-syne',
    display: 'swap',
})

export const spaceMono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-space-mono',
    display: 'swap',
})