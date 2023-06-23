import './globals.css';
import { Noto_Sans } from 'next/font/google';

const inter = Noto_Sans({ weight: ["100", "300", "400", "500", "700"], subsets: ['cyrillic'] });

export const metadata = {
  title: 'MyTop - наш топ',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}




