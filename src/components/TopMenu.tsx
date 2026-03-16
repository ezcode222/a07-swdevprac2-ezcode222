import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-end gap-4 px-6 border-b border-gray-200">
      <TopMenuItem title="Booking" pageRef="/booking" />
      <Image
        src="/img/logo.jpg"
        alt="logo"
        width={42}
        height={42}
        className="rounded-full"
      />
    </div>
  );
}