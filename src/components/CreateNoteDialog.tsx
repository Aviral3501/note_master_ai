"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "./ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type Props = {};

function CreateNoteDialog({}: Props) {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const createNotebook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNotebook", { name: input });
      return response.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter the name of the book");
      return;
    }

    // if name is entered, create the notebook
    createNotebook.mutate(undefined, {
      onSuccess: () => {
        console.log("Notebook created");
        setInput("");
        setIsOpen(false);
      },
      onError: (error) => {
        console.log("Error creating notebook");
        console.error(error);
      },
    });
  };

  const handleReset = () => {
    setInput("");
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg justify-center items-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
            <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
            <h2 className="font-semibold text-green-600 sm:mt-2 sm:ml-2">
              New Notebook
            </h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <p className="font-xl font-bold text-black-600">
                Create New Notebook
              </p>
            </DialogTitle>
            <DialogDescription>
              <p className="font-sans font-medium">
                You can create a new note by clicking the button below.
              </p>
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="h-4"></div>
            <Input
              value={input}
              placeholder="Name..."
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex items-center justify-end mt-2 gap-4">
              <Button type="button" variant="secondary" onClick={handleReset}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600">
                Create
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateNoteDialog;






// "use client"
// import React, { useState } from 'react'
// import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
// import { Plus } from 'lucide-react'
// import { DialogContent } from './ui/dialog'
// import { Input } from './ui/input'
// import { Button } from './ui/button'
// import { useMutation } from '@tanstack/react-query'
// import axios from 'axios'

// type Props = {}

// function CreateNoteDialog({}: Props) {
//     const [input,setInput] = React.useState('');


//     const createNotebook = useMutation({
//         mutationFn: async () => {
//             const response = await axios.post('/api/createNotebook',{name:input})
//             return response.data;
//         }
//     })

//     const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
//         e.preventDefault();
//         if(input === ''){
//             window.alert("Please enter the name of the book");
//             return;
//         }

//         // if name is entered ,crate the notebook
//         createNotebook.mutate(undefined,{
//             onSuccess:()=>{
//                 console.log("Notebbok created");
//                 setInput('');
//             },
//             onError:(error)=>{
//                 console.log("Error creating notebook");
//                 console.error(error);
//             }
//         });
//     }

//     const handleReset = () => {
//         setInput("");
//       };


//   return (
//     <>
//         <Dialog>
//             <DialogTrigger>
//                 <div className='border-dashed border-2 flex border-green-600 h-full rounded-lg justify-center items-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4'>
//                     <Plus className='w-6 h-6 text-green-600' strokeWidth={3}/>
//                     <h2 className='font-semibold text-green-600 sm:mt-2 sm:ml-2'>New Notebook</h2>

//                 </div>
//             </DialogTrigger>
//             <DialogContent> 
//                 <DialogHeader>
//                     <DialogTitle>
//                     <p className='font-xl font-bold text-black-600'> Create New Notebook</p>
//                     </DialogTitle>
//                     <DialogDescription>
//                     <p className='font-sans font-medium'>You can create a new note by clicking the button below.</p>
//                     </DialogDescription>
//                 </DialogHeader>

//                 <form onSubmit={handleSubmit}>
//                     <div className='h-4'></div>
//                     <Input 
//                     value={input}
//                     placeholder='Name...'  
//                     onChange={(e) =>setInput(e.target.value)}
//                     />
//                     <div className='flex items-center justify-end mt-2 gap-4'>
//                         <Button type='reset' variant={'secondary'} onClick={handleReset}>Cancel</Button>
//                         <Button className='bg-green-600'>Create</Button>

//                     </div>


//                 </form>
//             </DialogContent>
//         </Dialog>
//     </>
//   )
// }

// export default CreateNoteDialog