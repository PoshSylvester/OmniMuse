"use client"

import { Button} from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu} from "lucide-react";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";


interface MobileSidebarprops {
    apiLimitCount:number
    isPro: boolean
}

const MobileSidebar = ({
    apiLimitCount = 0,
    isPro=false
}: MobileSidebarprops) =>{

    // to fix hytration errors return null if component not  monted
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() =>{
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
            </SheetContent>
        </Sheet>
        
    );
}

export default MobileSidebar