import { A } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";
import Layout from "~/components/Layout";

export default function Home() {

  return (
    <Layout>
      <span class="bg-white text-black w-fit p-2 rounded-full rounded-bl-none translate-x-9">Hey!! 👋</span>
      <h1>🧑‍💻</h1>
      <h2>Welcome to my blog.</h2>
      <p>My name is <b class="font-bold">Joaquín Gómez</b>, I'm studying CS, Math and other related areas by myself. <A href="/about">You can learn more about me here.</A></p>
      <p>Here I'll publish the works made over time, this as well as showing my work to other people is useful as an archive.</p>
      <p>You can find all types of projects here, related to:</p>

      <ul>
        <li>Computer Science & Programming</li>
        <li>Web development</li>
        <li>AI & Machine Learning</li>
        <li>Software Design</li>
        <li>Notes & Texts</li>
        <li>Mathematics</li>
      </ul>

      <p>Note that all of these projects will progress as I do, the purpose of the website is to serve as a checkpoint to see my progress over time. If you are interested you can checkout my <b>Github Account</b>.</p>
      <A href="https://www.github.com/Joagz">https://www.github.com/Joagz</A>
    </Layout>
  );
}
