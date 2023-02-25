import Image from "next/image"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { CalendarDays } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Square({ props }) {
    let ret = {}
    if (props.type === "mp4") {
        return(
            <HoverCard>
                <HoverCardTrigger asChild>
                    <div className="w-[100px]">
                        <AspectRatio ratio={1 / 1}>
                            <video 
                            autoPlay 
                            loop 
                            style={{ width: '100px', height: '100px' }}
                            className="rounded-3xl"
                            >
                                <source src={ props.url } type="video/mp4" />
                            </video>
                        </AspectRatio>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="">
                    <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage className="object-cover" src={ props.logo } />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{ props.company }</h4>
                        <p className="text-sm">
                        { props.position }
                        </p>
                        <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                            { props.date }
                        </span>
                        </div>
                    </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        )
    } else {
        return(
            <HoverCard>
                <HoverCardTrigger asChild>
                    <div className="w-[100px]">
                        <AspectRatio ratio={1 / 1}>
                            <Image
                            src={ props.url }
                            alt={ props.compnay }
                            fill
                            className="rounded-3xl object-cover"
                            />
                        </AspectRatio>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="">
                    <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage className="object-cover" src={ props.logo } />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{ props.company }</h4>
                        <p className="text-sm">
                        { props.position }
                        </p>
                        <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                            { props.date }
                        </span>
                        </div>
                    </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        )
    }
}