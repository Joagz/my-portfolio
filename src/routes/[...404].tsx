import { A, useLocation } from "@solidjs/router"; // (<a></a> tag)
import Layout from "~/components/Layout";

export default function NotFound() {

  const { pathname } = useLocation();
  return (
    <Layout>
      <div class={"h-screen flex w-full justify-center items-center gap-5 flex-col"}>
        <div class="flex flex-col">
          <h3 class="font-light">404</h3>
          <h1>{pathname.length > 20 ? `[...]${pathname.substring(pathname.length - 15, pathname.length)}` : pathname} not found.</h1>
        </div>
        <A href="/" class="text-lg text-blue-400 hover:underline">return Home;</A>
      </div>
    </Layout>
  );
}
