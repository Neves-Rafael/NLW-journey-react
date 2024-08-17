import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";

interface CreateActivityProps{
  closeCreateActivityModal: () => void;
}

export function CreateActivity({closeCreateActivityModal}: CreateActivityProps){
  const { tripId } = useParams()

  async function createActivity (event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const data = new FormData(event.currentTarget)
    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs_at")?.toString();
    
    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at
    })

    window.document.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400"/>
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>
  
          <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950  border-zinc-800 rounded-lg flex items-center gap-3">
            <Tag className="text-zinc-400 size-5"/>
  
            <input 
              name="title"
              placeholder="Qual a atividade?" 
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
  
          <div className="h-14 border-zinc-800 flex flex-1 items-center gap-3  bg-zinc-950 rounded-lg px-4">
            <Calendar className="text-zinc-400 size-5"/>
            
            <input 
              name="occurs_at"
              type="datetime-local" 
              placeholder="Data e horário" 
              className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}