import {Youtube} from '@/components/ui/youtube'

export default function Video() {
  return (
    <section className="border-b-border inset-0 flex w-full flex-col items-center justify-center border-b-4 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-10 text-center text-3xl font-heading lg:mb-15 lg:text-5xl text-black">
          Demo Video
        </h2>
          <Youtube videoId="o9UjEUqfvTY" />
      </div>
    </section>
  )
}
