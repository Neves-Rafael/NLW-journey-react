import { useState } from "react";
import { CreateActivity } from "./components/create-activity-modal";
import { SideBar } from "./components/side-bar";
import { Activities } from "./components/activities";
import { DestinationHeader } from "./components/destination-header";

export function TripDetails(){
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

  function openCreateActivityModal(){
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal(){
    setIsCreateActivityModalOpen(false)
  }


  return(
    <div className="w-[1100px] mx-auto space-y-8 py-10">
      <DestinationHeader/>

      <main className="flex gap-16 px-6">
        <Activities openCreateActivityModal={openCreateActivityModal}/>
        <SideBar/>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivity closeCreateActivityModal={closeCreateActivityModal} />       
      )}
    </div>
  )
}