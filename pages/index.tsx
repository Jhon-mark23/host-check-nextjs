import HomepageLink from "@/components/homepageLink";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto rounded-xl border lg:bg-gray-200 p-4 lg:dark:bg-zinc-800/30">
          Click a link to test if it&apos;s working in your hosting environment
        </p>
      </div>

      <div className="grid max-w-5xl w-full mb-0 lg:grid-cols-3 text-left">
        <HomepageLink id="static" pageLink="static" pageTitle="getStaticProps()" pageDescription="Can a page be statically generated (SSG)?" />
        <HomepageLink id="server" pageLink="server" pageTitle="getServerSideProps()" pageDescription="Can a page be server rendered (SSR)?" />
        <HomepageLink id="image-optimization" pageLink="image-optimization" pageTitle="Image Optimization" pageDescription="Are images using the Next/Image component optimized?" />
        <HomepageLink id="incremental-static-regeneration" pageLink="incremental-static-regeneration" pageTitle="Incremental Static Regeneration (ISR)" pageDescription="Does Incremental Static Regeneration (ISR) work?" />
        <HomepageLink id="api-route" pageLink="api-route" pageTitle="API Routes" pageDescription="Do API routes work?" />
        <HomepageLink id="middleware" pageLink="middleware" pageTitle="Middleware Redirect" pageDescription="Should redirect to homepage with success url param" />
        <HomepageLink id="dynamic-route" pageLink="dynamic-route/65" pageTitle="Dynamic Routes" pageDescription="Should handle generated a SSR Dynamic Route" />
        <HomepageLink id="redirect" pageLink="redirect" pageTitle="next.config.js Redirect" pageDescription="Should perform a 308 Redirect" />
        <HomepageLink id="edge-runtime" pageLink="edge-function" pageTitle="Edge Runtime" pageDescription="Should execute API routes with Edge Runtime" />
        <HomepageLink id="jss-image" pageLink="jss-image-optimization" pageTitle="JSS Image Optimization" pageDescription="JSS images using NextImage component should be optimized" />
      </div>
    </main>
  );
}
