// app/layout.js

export const metadata = {
  title: 'Metaversus',
  description: 'A brief description of your application.',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
