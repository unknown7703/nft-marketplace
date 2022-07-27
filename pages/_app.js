import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <nav className="border-b p-6 bg-blue-600">
      <p className="text-5xl font-bold text-yellow-400">NFT-Kart</p>
      <div className="flex mt-4 ml-6">
        <Link href="/">
          <a className="mr-6 text-yellow-400">Home</a>
        </Link>
        <Link href="/create-item">
        <a className="mr-6 text-yellow-400">My Warrenties</a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 text-yellow-400">Seller Login</a>
        </Link>
        <Link href="/creator-daskboard">
          <a className="mr-6 text-yellow-400">More</a>
        </Link>
      </div>
    </nav>
    <Component {...pageProps} />
  </div>
  );
}

export default MyApp;
