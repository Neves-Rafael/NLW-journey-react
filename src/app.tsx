import { MapPin, Calendar, ArrowRight } from "lucide-react"

export function App() {

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-4 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./src/assets/logo.svg" alt="plann.er"  className="m-auto"/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400"/>
            <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400"/>
            <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-32 cursor-pointer outline-none"/>
          </div>

          <div className="w-px h-6 bg-zinc-800"/>

          <button className="bg-lime-300 rounded-lg px-5 py-2 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-500 hover:text-white">
            Continuar
            <ArrowRight className="size-5 "/>
          </button>
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a>e <a className="text-zinc-300 underline" href="#">políticas de privacidade.</a>
        </p>
    </div>
    </div>
  )
}