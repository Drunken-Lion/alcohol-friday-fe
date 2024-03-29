import type { Metadata } from 'next';
import AuthSession from './AuthSession';
import Header from './_components/Header';
import Footer from './_components/Footer';
import ReactQueryProvider from './_hooks/useReactQuery';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://cdn.iamport.kr/v1/iamport.js" />
        <AuthSession>
          <ReactQueryProvider>
            <Header />
            {children}
            <Footer />
          </ReactQueryProvider>
        </AuthSession>
      </body>
    </html>
  );
}
