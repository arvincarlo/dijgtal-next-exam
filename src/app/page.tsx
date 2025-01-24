import Parallelogram from "./components/Parallelogram"

export default function Home() {
  return (
    <div className="relative z-10 text-white text-center min-h-screen flex items-center justify-center bg-stone-800">
      <h1 className="text-3xl font-bold underline text-blue-300">
        Hello world!
      </h1>
      <Parallelogram></Parallelogram>
    </div>
  )
}