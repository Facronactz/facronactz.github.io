import type {Metadata} from 'next'
import './globals.css'
import '../styles/animations.css'
import '../styles/utilities.css'
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Facronactz's Landing Page",
    description: 'Landing page for Facronactz',
    generator: 'facronactz',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
        <body>
        <div className="relative z-10">
            {children}
        </div>
        </body>
        </html>
    )
}
