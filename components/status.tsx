import Image from "next/image"
import { useEffect, useState } from "react"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export function Status() {
    const placeholderText = ["Currently working out"];
    const imgUrl = ["/images/fitness.gif"]
    const [state, setState] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setState((s) => (s + 1));
        }, 2000);
    }, []);

    const placeholder = placeholderText[0];
    const imgholder = imgUrl[0]

    return (
        <div className="w-60 fixed bottom-8 right-8 flex gap-x-1 items-center p-2 border border-gray-200 rounded-full bg-white drop-shadow-md dark:bg-slate-900">
            <div className="w-[30px]">
                <AspectRatio ratio={1 / 1}>
                    <Image
                    alt={ placeholder }
                    src={ imgholder }
                    fill
                    className="rounded-3xl object-cover"
                    />
                </AspectRatio>
            </div>
            <span className="font-semibold text-xs italic">{ placeholder }</span>
        </div>
    );
}