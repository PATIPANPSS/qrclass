import { AuthProvider } from "./context/AuthContext";
import { ClassProvider } from "./context/ClassContext";
import "./globals.css";

export const metadata = {
  title: "QR-Class",
  description: "Attendance with QR code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <AuthProvider>
          <ClassProvider>
            {children}
          </ClassProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
