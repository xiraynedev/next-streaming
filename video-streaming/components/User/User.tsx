import Image from "next/image";

interface UserProps {
  src: string;
  name: string;
  comment: string;
}

export default function User(user: UserProps) {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src={user.src}
        width={80}
        height={80}
        className="rounded-full w-16 h-16"
        alt="user avatar"
      />
      <div>
        <span className="font-bold mr-3">{user.name}</span>
        <span>4 years ago</span>
        <p>{user.comment}</p>
      </div>
    </div>
  );
}
