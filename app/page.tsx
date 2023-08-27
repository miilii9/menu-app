// import Image from 'next/image'
import MainPageViewMode from "@/modules/mainPage/mainPage.vm";
import { getLocalData } from "../lib/localData";
import menu from "@/json/db.json";
// export async function getStaticProps() {
//   const localData = await getLocalData();
//   return {
//     props: { localData },
//   };
// }

export default function Home({ localData }: any) {
  const stringedData = JSON.stringify(menu);
  const data = JSON.parse(stringedData);
console.log(data.categorys);
  return (
    <main className='bg-th-background '>
      <MainPageViewMode data={data} />
    </main>
  );
}
