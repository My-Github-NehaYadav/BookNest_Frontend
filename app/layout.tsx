// import "./globals.css";
// import Link from "next/link";

// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <body>
//         <nav className="navbar">
//           <h2>📚 BookNest</h2>

//           <div>
//             <Link href="/">Home</Link>
//             <Link href="/add-book">Add Book</Link>
//           </div>
//         </nav>

//         {children}
//       </body>
//     </html>
//   );
// }

import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/add-book">Add Book</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}