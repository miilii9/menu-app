// import Image from 'next/image'
import MainPageViewMode from "@/modules/mainPage/mainPage.vm";
import menu from "@/json/db.json";


export default function Home({ localData }: any) {
  const stringedData = JSON.stringify(menu);
  const data = JSON.parse(stringedData);
  return (
    <main className='bg-th-background '>
      <MainPageViewMode data={data} />
    </main>
  );
}
