import Image from "next/image";

interface Props {
  name: string;
  picture: string;
}

export default function Avatar({ name, picture }: Props) {
  return (
    <div className="flex items-center">
      <Image src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} height={12} width={12} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
