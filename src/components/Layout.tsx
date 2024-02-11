import { JSX } from "solid-js"

type Props = {
  children: JSX.Element[] | JSX.Element, class?: string;
}

export default function Layout(props: Props) {
  return (
    <main class={`w-full flex flex-col items-center pt-32 pb-32`}>
      <article class={`p-8 sm:p-0 flex flex-col gap-5 w-full sm:w-3/4 lg:w-1/2  ${props.class}`}>
        {props.children}
      </article>
    </main>
  )
}