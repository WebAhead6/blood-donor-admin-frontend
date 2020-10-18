
import React from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd";


export default function DragDropWrapper({children,onDragEnd}){



return(

    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="homeMenu">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
          }}

          {...provided.droppableProps}
        >
           {provided.placeholder}


           {children}



           </div>
           )}
           </Droppable>
      </DragDropContext>
)

}