import {Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Nav from './Nav';
import Logo from './Logo';
import { AlignJustify } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@/components/ui/dialog';

const Mobilenavigation = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify 
            className='cursor-pointer'
            />
        </SheetTrigger>
        <SheetContent>
            {/* Visually hidden title for accessibility */}
            <VisuallyHidden>
                <DialogTitle>Mobile Navigation</DialogTitle>
            </VisuallyHidden>

            <div className='flex flex-col items-center justify-between h-full py-8'>
                <div className='flex flex-col items-center gap-y-32'>
                    <Logo />
                    <Nav 
                    containerStyles='flex flex-col items-center gap-y-6'
                    linkStyles='text-1xl font-semibold'
                    />
                </div>
            </div>
        </SheetContent>
    </Sheet>
    
  )
}

export default Mobilenavigation
