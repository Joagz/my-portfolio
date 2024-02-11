import { A } from "@solidjs/router";
import Layout from "~/components/Layout";

export default function Home() {

  return (
    <Layout class="gap-14">
      <div class="flex flex-col gap-2">
        <h1 class="text-center">Joaquín Gómez</h1>
        <h4>I'm <b class="font-bold">Joaco</b>, currently studying CS, Math, AI, and other related areas by myself. <A href="/about">You can learn more about me here.</A></h4>
      </div>
      <p class="text-sm">Here I'll publish the works made over time, this as well as showing my work to other people is useful as an archive.</p>
      <div class="flex justify-between items-center flex-wrap gap-5 bg-blue-950 py-16 px-4 rounded-sm">
        <div class="flex flex-col gap-2">
          <span class="bg-white text-black w-fit p-2 rounded-full rounded-bl-none translate-x-9 text-lg">Hey! Check out my <A class="text-blue-700" href="/projects">projects</A>.</span>
          <h1>🧑‍💻</h1>
        </div>
        <ul>
          <li><A class="text-white" href="#">Computer Science & Programming</A></li>
          <li><A class="text-white" href="#">Web development</A></li>
          <li><A class="text-white" href="#">AI & Machine Learning</A></li>
          <li><A class="text-white" href="#">Software Design</A></li>
          <li><A class="text-white" href="#">Notes & Texts</A></li>
          <li><A class="text-white" href="#">Mathematics</A></li>
        </ul>

      </div>

      <p>Note that all of these projects will progress as I do, the purpose of the website is to serve as a checkpoint to see my progress over time. If you are interested you can check my social media.</p>
      <A href="https://www.github.com/Joagz"></A>
    </Layout>
  );
}
