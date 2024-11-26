import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import SDFGeometryComponent from './components/SDFGeometryComponent';
import TextAnim from './components/TextAnim';
import { motion } from "framer-motion";
import AvatarModal from './components/AvatarModal';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parker Conrad',
  description: 'The Portfolio Website of Parker Conrad',
}
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-screen w-full flex justify-center items-center p-4 md:p-10">
          <main className="border border-black relative z-10 overflow-x-hidden h-full w-full flex flex-col md:flex-row justify-between">
            <SDFGeometryComponent />
            <div className="flex-1 m-4 z-10 h-1/4">
              <h1 className='text-3xl md:text-5xl'>Parker Conrad</h1>
              {/* <h2 className='text-lg'>Software Engineer/Human Being</h2> */}
              <TextAnim delay={1} />
              <ul className="font-bold list-none mt-6 md:mt-12 ml-2 md:ml-5">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/projects">PROJECTS</Link></li>
                <li><Link href="/info">INFO</Link></li>
                {/* <li>MY STORY</li> */}
              </ul>
            </div>
            {children}
            <div className="fixed bottom-4 left-4 md:bottom-10 md:left-10 m-4">
              <AvatarModal />
            </div>
          </main>
        </div>
        <div className='overflow-overlay'></div>
      </body>
    </html>
  )
}
