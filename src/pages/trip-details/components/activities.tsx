import { Plus, CircleCheck, CircleDashed, Activity } from "lucide-react";
import { Button } from "../../../components/button";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"

interface ActivitiesProps{
  openCreateActivityModal: () => void;
}

interface Activity{
  date: string;
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities({openCreateActivityModal}: ActivitiesProps){

  const { tripId } = useParams();
  const [activities, setActivities] = useState<Activity[]>([]);
  
  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities))
  }, [tripId]);

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-7">
      <h2 className="text-3xl font-semibold text-zinc-50">Atividades</h2>
      <Button onClick={openCreateActivityModal} variant="primary">
        <Plus className="size-5"/>
        Cadastrar atividade
      </Button>
    </div>

    <div className="flex flex-col gap-8"/>

    <div className="space-y-8">
      {activities.map( category => {
        return (
        <div key={category.date } className="flex flex-col gap-2.5">
          <div className="flex gap-2 items-baseline">
            <p className="text-zinc-300 text-xl font-bold">Dia {format(category.date, "d")}</p>
            <p className="text-xs text-zinc-500">{format(category.date, "EEEE", { locale: ptBR })}</p>
          </div>
          {category.activities.length > 0 ? (
            <div>
              {category.activities.map( activity => {
                return (
                  <div key= {activity.id} className="flex justify-between items-center px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape">
                    <div className="flex gap-3">
                      <CircleCheck className="text-lime-400"/>
                      <p className="text-zinc-100">{activity.title}</p>
                    </div>
                    <p className="text-zinc-400 text-sm">{format(activity.occurs_at, "HH:mm")}h</p>
                  </div>
                )
              } )}
            </div>
          ) : (
              <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
          )}
        </div>
        )
      })}
    </div>

    {/* <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2 items-baseline">
          <p className="text-zinc-300 text-xl font-bold">Dia 17</p>
          <p className="text-xs text-zinc-500">Sábado</p>
        </div>
            <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2 items-end">
          <p className="text-zinc-300 text-xl font-bold">Dia 18</p>
          <p className="text-xs text-zinc-500">domingo</p>
        </div>
        <div className=" w-full flex flex-col gap-2.5">
          <div className="flex justify-between items-center px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape">
            <div className="flex gap-3">
              <CircleCheck className="text-lime-400"/>
              <p className="text-zinc-100">Corrida de Kart</p>
            </div>
            <p className="text-zinc-400 text-sm">14:00h</p>
          </div>

          <div className="flex justify-between items-center px-4 py-3 bg-zinc-900 rounded-xl shadow-shape">
            <div className="flex gap-3">
              <CircleDashed className="text-zinc-500"/>
              <p className="text-zinc-100">Corrida no parque</p>
            </div>
            <p className="text-zinc-400 text-sm">16:00h</p>
          </div>
        </div>
      </div>
    </div> */}
  </div>  
  )
}