'use client'
import React from 'react'
import { Dialog, DialogDescription, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Loader, Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = React.useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input === '') {
            window.alert('Please enter name')
            return
        }
        createNote.mutate(undefined, {
            onSuccess: ({ note_id }) => {
                router.push(`/notebook/${note_id}`);

            },
            onError: (error) => {
                window.alert(`Failed to create a notebook : ${error}`)
            }
        })
    }

    const createNote = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/createNote',
                { name: input }
            )
            return response.data;
        }
    })

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
                        <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
                        <h2 className="font-semibold text-green-600 sm:mt-2">
                            New Note Book
                        </h2>
                    </div>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Note Book</DialogTitle>
                        <DialogDescription>
                            You can create a new note by clicking button below
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>

                        <Input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder='Name...'

                        />
                        <div className="h-4"></div>
                        <div className="flex gap-2 items-center">
                            <Button type='reset' variant={'secondary'}>
                                Cancel
                            </Button>
                            <Button type='submit' className='bg-green-600' disabled={createNote.isLoading}>
                                {createNote.isLoading && <Loader className='h-4  animate-spin' />}
                                Create</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateNoteDialog