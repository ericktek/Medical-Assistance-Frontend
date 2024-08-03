import "./globals.css";
import { roboto, inter, poppins, montserrat } from "./utils/fonts";

export const metadata = {
  title: "Medikea Medikea Assistance",
  description: "Medikea Medikea Assistance AI is an advanced digital health assistant that enables users to interact with a sophisticated chatbot. This AI-powered platform analyzes symptoms and provides insightful information to help you understand potential health issues. Designed for accuracy and ease of use, Medikea offers a seamless way to receive reliable health guidance and manage your wellbeing with confidence."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter} ${roboto} ${poppins} ${montserrat}`}>
        <main className="inter">{children}</main>
      </body>
    </html>
  );
}
