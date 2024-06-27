"use client"
import React, { useState } from 'react'
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { DialogContent } from './ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

function CreateNoteDialog({}: Props) {
    const [input,setInput] = React.useState('');
  return (
    <>
        <Dialog>
            <DialogTrigger>
                <div className='border-dashed border-2 flex border-green-600 h-full rounded-lg justify-center items-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4 '>
                    <Plus className='w-6 h-6 text-green-600' strokeWidth={3}/>
                    <h2 className='font-semibold text-green-600 sm:mt-2 sm:ml-2'>New Notebook</h2>

                </div>
            </DialogTrigger>
            <DialogContent> 
                <DialogHeader>
                    <DialogTitle>
                    <p className='font-xl font-bold text-black-600'> Create New Notebook</p>
                    </DialogTitle>
                    <DialogDescription>
                    <p className='font-sans font-medium'>You can create a new note by clicking the button below.</p>
                    </DialogDescription>
                </DialogHeader>

                <form>
                    <div className='h-4'></div>
                    <Input 
                    value={input}
                    placeholder='Name...'  
                    onChange={(e) =>setInput(e.target.value)}
                    />
                    <div className='flex items-center justify-end mt-2 gap-4'>
                        <Button type='reset' variant={'secondary'}>Cancel</Button>
                        <Button className='bg-green-600'>Create</Button>

                    </div>


                </form>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default CreateNoteDialog