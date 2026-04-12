import {useEffect, useState } from 'react'
import './App.css'
import noteBook from "./assets/note (1).png"
import yellowBook from "./assets/yellow-book-removebg-preview.png"

function App() {

  const [input, setInput] = useState("");

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("my-notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("my-notes", JSON.stringify(notes));
  }, [notes]);


  const addNote = () => {
    if(!input.trim()) return;
    const newNote = {
        id: Date.now(),
        text: input.trim(),
        date: new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })
    }
    setNotes([newNote, ...notes]);
    setInput("")
  }

  const handleKeyDown = (e) => {
     if(e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addNote();
     }
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

    return  <div className='bg-gray-950 min-h-screen '>
      <div>
      <div className='flex align-center justify-center pt-10 gap-2'>
         <div>
          <img src={noteBook} alt="note-book" className='w-10'/>
         </div>
         <div className='text-4xl text-white'>My Notes</div>
      </div>
      <div>
        <div className='text-center text-gray-400 mt-4'>No notes yet. Add one below!</div>
      </div>

      {/* Input Area */}

      <div className='mx-auto flex justify-center mt-8'>
        <textarea 
         placeholder='Write your notes here....' 
         className='text-white w-[700px] border border-gray-400 resize-none p-2 rounded-xl outline-none shadow hover:shadow-blue-500/10 hover:shadow-lg transition duration-300'
         onChange={(e) => setInput(e.target.value)}
         onKeyDown={handleKeyDown}
         value={input}
         ></textarea>
      </div>

{/* Button  */}
      <div className='text-black mx-auto text-center mt-6'>
        <div><button 
        disabled={!input.trim()}
        className=' w-[117vmin] mx-auto p-1 rounded-xl bg-yellow-500 cursor-pointer hover:scale-102 transition duration-300 font-medium disabled:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50'
        onClick={addNote}
        >+ Save Note</button></div>
      </div>

     <div className='mt-15'>
      {notes.length === 0 && <div>
      <div className='place-items-center'>
        <img src={yellowBook} alt="yellow-book" className='w-10'/>
      </div>
      <div className='text-center text-gray-500 mt-4'>Your saved notes will appear here</div>
      </div>}
      
    {notes.map((note) => 
    <div className='flex justify-center' key={note.id}>
      <div className='relative'>
      <div className='border border-gray-500 w-[698px] mx-auto rounded-xl p-2 bg-gray-800 mt-2'>
        <div className='text-white'>{note.text}</div>
        <div className='text-gray-400 text-[13px] mt-1'>{note.date}</div>
        <div className='text-white absolute top-2 right-3 text-xl cursor-pointer' onClick={() => deleteNote(note.id)}>x</div>
        </div>
      </div>
     </div>)
    } 
    


     </div>

      </div>
    </div>
}

export default App
