import TypewriterTitle from '@/components/TypewriterTitle'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="min-h-screen flex  flex-col items-center bg-gradient-to-r grainy from-rose-200 to-slate-100">
      <div className='flex flex-col absolute top-1/4 items-center  justify-center'>
        <div  className=' text-6xl font-bold'>AI <span className=' text-6xl font-bold text-green-500'>note</span></div>
        <span className=' text-6xl font-bold text-green-500'>taking</span>
        <span className=' text-6xl font-bold'>assistant.</span>
        <div className='  my-8 text-2xl  font-semibold text-gray-700'>
        <TypewriterTitle/>
        </div>
       <Link href='/dashboard'>
          <Button className='bg-green-600'>Get Started
          <ArrowRight className='ml-2 w-5 '></ArrowRight>
          </Button>
       </Link>
      </div>
    </div>
  )
}
// 