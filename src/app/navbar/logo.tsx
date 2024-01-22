import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function logo({}: Props) {
  return (
    <div className="hover:cursor-pointer">
      <Link href="/">
        <Image
          src={"/images/logo/logo-1.svg"}
          alt="logo"
          height={40}
          width={40}
        />
      </Link>
    </div>
  );
}
