import './globals.css';

export const metadata = {
  title: 'Zenith Banking Web',
  description: 'Responsive Zenith-style mobile and web banking clone with services, products, and lifestyle features.',
  openGraph: {
    title: 'Zenith Banking Web',
    description: 'Responsive Zenith-style mobile and web banking clone with services, products, and lifestyle features.',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
