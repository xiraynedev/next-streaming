import Image from "next/image";
import uploaderAvatar from "../public/assets/images/forest-avatar.webp";
import User from "@/components/User/User";
import VideoLink from "@/components/VideoLink/VideoLink";

export default function Home() {
  return (
    <div>
      <h1 className="bg-gradient-to-r from-green-900 to-blue-950 text-white text-2xl md:text-5xl text-center py-3 mb-8">
        Next Streaming
      </h1>
      <div className="flex container mx-auto">
        <div className="flex flex-col gap-4">
          <video controls width="1200">
            <source src="assets/videos/forest.mp4" type="video/mp4" />
          </video>
          <p className="text-2xl">Wind Forest Remix</p>
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full w-16 h-16"
              src={uploaderAvatar}
              alt="uploader avatar"
            />
            <div>
              <p>ForestMelody</p>
              <p>2K subscribers</p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to to-blue-400 rounded-3xl p-2 text-white font-bold">
              Subscribe
            </button>
          </div>
          <div className="border p-3 bg-slate-100 rounded-xl">
            <p>61K views 6 years ago</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ad deserunt unde minus doloribus quas iste impedit
              expedita, tenetur consequatur at explicabo, adipisci facere
              maiores! Ipsum, esse magni. Magnam, suscipit. Commodi officia
              veniam pariatur consequuntur in. Ducimus eligendi suscipit
              provident nesciunt neque praesentium fugiat perferendis, deleniti
              ipsam doloribus enim, nisi hic quae consequuntur. Blanditiis sint,
              sit odit in praesentium accusamus.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="mr-3">42 comments</span>
            <div className="flex flex-col gap-2">
              <div className="border w-8"></div>
              <div className="border w-6"></div>
              <div className="border w-4"></div>
            </div>
            <p>Sort by</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              className="w-16 h-16 rounded-full"
              src="/assets/images/users/user-avatar.webp"
              alt="Current user avatar"
              width={80}
              height={80}
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="border-b h-10 w-full"
            />
          </div>
          <div className="flex flex-col gap-8">
            <User
              src="/assets/images/users/user2-avatar.webp"
              name="ForestCyclist"
              comment="This forest reminds me of the one back home. I have not seen a forest like this in a long time."
            />
            <User
              src="/assets/images/users/user3-avatar.webp"
              name="NatureLight"
              comment="Come to think of it, I have been in a similar forest one time. I remember the fresh air and calm breeze."
            />
            <User
              src="/assets/images/users/user4-avatar.webp"
              name="Seasonal Clocker"
              comment="Got out of bed early this morning to take a walk in a forest just like this one."
            />
            <User
              src="/assets/images/users/user5-avatar.webp"
              name="Coffee Delight"
              comment="Having a warm cup of coffee while watching this video. Reminds me of the forest back home."
            />
            <User
              src="/assets/images/users/user6-avatar.webp"
              name="Clock Overdrive"
              comment="Keep up the good work. I used to cycle in forests like this one."
            />
          </div>
        </div>
        <div className="ml-4 flex flex-col gap-3 shrink-0">
          <VideoLink src="assets/videos/forest.mp4" />
          <VideoLink src="assets/videos/sea.mp4" />
          <VideoLink src="assets/videos/fish.mp4" />
          <VideoLink src="assets/videos/butterfly.mp4" />
          <VideoLink src="assets/videos/poppy.mp4" />
          <VideoLink src="assets/videos/waterfall.mp4" />
          <VideoLink src="assets/videos/mountains.mp4" />
        </div>
      </div>
    </div>
  );
}
