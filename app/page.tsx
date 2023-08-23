// import Image from 'next/image'
import MainPageViewMode from "@/modules/mainPage/mainPage.vm";
import { getLocalData } from "../localData";
import { Headers } from "@/components/mainPage/Headers";
export default function Home() {
  return (
    <main className='bg-th-background'>
      <MainPageViewMode />
    </main>
  );
}
