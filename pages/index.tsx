import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Square } from "@/components/square" 
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Status } from "@/components/status"
import RecentlyListened from "@/components/spotify"

export default function IndexPage() {
  const jobs = [
    {
      "company": "Apple",
      "logo": "https://i.pinimg.com/474x/b0/d2/6e/b0d26e8122dffa8a51081f7f814581d7.jpg",
      "position": "Software Engineering Intern",
      "date": "🏖 Summer '22",
      "url": "/videos/apple.mp4",
      "type": "mp4"
    },
    {
      "company": "Teradyne",
      "logo": "https://cdn.worldvectorlogo.com/logos/teradyne-1.svg",
      "position": "Computer Engineering Intern",
      "date": "🍂 Fall '21",
      "url": "https://cdn.worldvectorlogo.com/logos/teradyne-1.svg",
      "type": "svg"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>josh.</title>
        <meta
          name="description"
          content="how can i be of assistance?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-y-4 sm:gap-8">
          <div className="border border-gray-300 rounded-xl p-6 content-between">
            <Image
              className="rounded-full mb-12"
              src="/images/profile.jpg" 
              height={75}
              width={75}
              alt="me!"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight lg:text-4xl flex mb-4">Hi, I'm Josh! <span className="wave">👋</span></h1>
              <h2 className="font-semibold text-lg">Computer Science <span className="text-rose-700 font-semibold">| USC Viterbi</span></h2>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="mt-10 scroll-m-20 pb-4 text-xl font-semibold tracking-tight transition-colors first:mt-0">
              Work Experience
            </h2>
            <div className="relative flex space-x-4">
              {
                jobs.map((job,i) => <Square key={i} props={job}/>)
              }
            </div>
            <div className="w-40">
              <RecentlyListened />
            </div>
          </div>
          <div>
        </div>
        </div>
        <Status />
      </main>
      
    </Layout>
  )
}
