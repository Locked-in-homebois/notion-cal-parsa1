import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center bg-red-500 rounded-[25px] w-[550px] h-[400px] mt-[100px] mx-auto">
        <div className="">
          <Image
            src="/icons/albums-outline.svg"
            width={200}
            height={200}
            alt=""
            className="w-30 top-0"
          />
        </div>
      </div>
    </div>
  );
}
