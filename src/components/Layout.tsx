import { JSX } from "solid-js"

type Props = { children: JSX.Element[] | JSX.Element }

export default function Layout({ children }: Props) {
  return (
    <main class={`w-full flex flex-col items-center`}>
      <article class={`p-8 sm:p-0 flex flex-col gap-5 w-full sm:w-2/3 md:w-1/2 lg:w-1/4`}>
        {children}
      </article>
    </main>
  )
}