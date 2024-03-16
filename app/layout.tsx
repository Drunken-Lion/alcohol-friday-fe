import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from './_hooks/useReactQuery';
import { getServerSession } from 'next-auth';

import AuthSession from './AuthSession';
import Header from './_components/Header';
import Footer from './_components/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AuthSession>
            <Header />
            {children}
            {session && <Footer />}
          </AuthSession>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
