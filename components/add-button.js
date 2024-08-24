import plusIcon from "@/public/plusIcon.svg";
import Image from "next/image";

export default function AddButton() {
  return (
    <>
      <button className="fixed bg-blue-500 p-4 w-8 aspect-square rounded-full right-8 bottom-8">
        <Image className="absolute right-1 top-1" src={plusIcon} />
      </button>
    </>
  );
}
