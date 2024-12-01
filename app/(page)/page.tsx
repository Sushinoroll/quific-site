import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-6xl gradientText font-black mb-6">
          This page is under construction
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-60 mb-2">
          in the mean time, join our discord server!
        </p>
        <p className="text-lg font-bold opacity-50">
          Lots of love, the QuificOS team
        </p>
      </div>
      
      <div className="flex items-center gap-8 mt-16">
        <Link 
          href="https://discord.gg/sH2XYT49NX" 
          className="hover:opacity-80 transition-opacity"
          aria-label="Join our Discord server"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" width="69" height="53" viewBox="0 0 69 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.4723 4.96853C54.1041 2.9642 49.4199 1.4875 44.5222 0.641731C44.433 0.625408 44.3439 0.666201 44.2979 0.747787C43.6955 1.81927 43.0282 3.2171 42.5609 4.3158C37.2931 3.52716 32.0524 3.52716 26.8926 4.3158C26.4252 3.19268 25.7337 1.81927 25.1285 0.747787C25.0826 0.668923 24.9935 0.628131 24.9043 0.641731C20.0093 1.4848 15.3251 2.9615 10.9541 4.96853C10.9163 4.98484 10.8839 5.01206 10.8623 5.04739C1.97728 18.3215 -0.456708 31.2693 0.737325 44.0566C0.742728 44.1191 0.777846 44.179 0.826472 44.217C6.68858 48.522 12.367 51.1355 17.94 52.8678C18.0292 52.8951 18.1237 52.8624 18.1805 52.789C19.4988 50.9887 20.6739 49.0905 21.6815 47.0942C21.741 46.9774 21.6842 46.8386 21.5627 46.7924C19.6987 46.0853 17.9238 45.2232 16.2165 44.2442C16.0815 44.1654 16.0707 43.9722 16.1949 43.8797C16.5542 43.6105 16.9135 43.3304 17.2566 43.0476C17.3187 42.9959 17.4052 42.985 17.4781 43.0176C28.6944 48.1386 40.8374 48.1386 51.9213 43.0176C51.9943 42.9823 52.0808 42.9932 52.1456 43.0449C52.4887 43.3277 52.848 43.6105 53.21 43.8797C53.3342 43.9722 53.3261 44.1654 53.1911 44.2442C51.4838 45.2422 49.7089 46.0853 47.8422 46.7897C47.7207 46.8359 47.6666 46.9774 47.7261 47.0942C48.7553 49.0877 49.9304 50.9859 51.2244 52.7863C51.2784 52.8624 51.3756 52.8951 51.4648 52.8678C57.0649 51.1355 62.7433 48.522 68.6054 44.217C68.6567 44.179 68.6892 44.1218 68.6946 44.0593C70.1236 29.2758 66.301 16.4341 58.5614 5.05009C58.5425 5.01206 58.5102 4.98484 58.4723 4.96853ZM23.3565 36.2705C19.9796 36.2705 17.1971 33.1702 17.1971 29.3628C17.1971 25.5555 19.9256 22.4552 23.3565 22.4552C26.8142 22.4552 29.5697 25.5827 29.5157 29.3628C29.5157 33.1702 26.7872 36.2705 23.3565 36.2705ZM46.1295 36.2705C42.7527 36.2705 39.9703 33.1702 39.9703 29.3628C39.9703 25.5555 42.6986 22.4552 46.1295 22.4552C49.5873 22.4552 52.3428 25.5827 52.2888 29.3628C52.2888 33.1702 49.5873 36.2705 46.1295 36.2705Z" fill="url(#paint0_linear_1337_821)"/>
            <defs>
              <linearGradient id="paint0_linear_1337_821" x1="34.7219" y1="0.638184" x2="34.7219" y2="52.8774" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>
        <Link 
          href="https://www.tiktok.com/@quific" 
          className="hover:opacity-80 transition-opacity"
          aria-label="Follow us on TikTok"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" width="61" height="70" viewBox="0 0 61 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.4563 14.2275C47.7645 11.8204 45.1 7.96909 44.2688 3.47949C44.0892 2.50947 43.9906 1.51117 43.9906 0.489746H32.2079L32.189 47.7106C31.9909 52.9985 27.6388 57.2426 22.3034 57.2426C20.6452 57.2426 19.0837 56.828 17.709 56.1046C14.5564 54.4456 12.3989 51.141 12.3989 47.3383C12.3989 41.8767 16.8423 37.4333 22.3034 37.4333C23.3229 37.4333 24.3008 37.6015 25.2259 37.8912V25.8624C24.2685 25.7321 23.2959 25.6506 22.3034 25.6506C10.3448 25.6506 0.616211 35.3797 0.616211 47.3383C0.616211 54.6754 4.28202 61.1685 9.87462 65.0947C13.3973 67.5678 17.6822 69.0253 22.3034 69.0253C34.262 69.0253 43.9906 59.2968 43.9906 47.3383V23.3932C48.6119 26.7101 54.2738 28.6647 60.3832 28.6647V16.8821C57.0922 16.8821 54.027 15.9037 51.4563 14.2275" fill="url(#paint0_linear_1337_822)"/>
            <defs>
              <linearGradient id="paint0_linear_1337_822" x1="30.4997" y1="0.489746" x2="30.4997" y2="69.0253" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>
        <Link 
          href="https://www.youtube.com/@Quific" 
          className="hover:opacity-80 transition-opacity"
          aria-label="Subscribe to our YouTube channel"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" width="69" height="49" viewBox="0 0 69 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M60.9799 2.19188C63.9272 2.98369 66.2586 5.31515 67.0504 8.26242C68.5021 13.6291 68.5461 24.7585 68.5461 24.7585C68.5461 24.7585 68.5461 35.9318 67.0944 41.2545C66.3026 44.2018 63.9712 46.5332 61.0239 47.3251C55.7011 48.7767 34.2783 48.7767 34.2783 48.7767C34.2783 48.7767 12.8554 48.7767 7.5327 47.3251C4.5854 46.5332 2.25396 44.2018 1.46215 41.2545C0.010498 35.8878 0.010498 24.7585 0.010498 24.7585C0.010498 24.7585 0.010498 13.6291 1.41816 8.30643C2.20997 5.35913 4.54141 3.02769 7.4887 2.23589C12.8114 0.784213 34.2343 0.740234 34.2343 0.740234C34.2343 0.740234 55.6572 0.740234 60.9799 2.19188ZM45.1877 24.7585L27.4159 35.052V14.4649L45.1877 24.7585Z" fill="url(#paint0_linear_1337_823)"/>
            <defs>
              <linearGradient id="paint0_linear_1337_823" x1="34.2783" y1="0.740234" x2="34.2783" y2="48.7767" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>
    </main>
  )
}
