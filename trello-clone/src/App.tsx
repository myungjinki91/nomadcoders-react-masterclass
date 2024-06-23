import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={1}>
                {() => <li>One</li>}
              </Draggable>
              <Draggable draggableId="first" index={1}>
                {() => <li>Two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
