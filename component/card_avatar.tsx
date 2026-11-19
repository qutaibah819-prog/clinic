import { Avatar } from "@mui/material";
const CardAvatar = ({ imageUrl, name, description }: { imageUrl: string; name: string; description: string }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-5 bg-white p-5 shadow-lg w-[350px] rounded-lg">
        <p className=" text-gray-600">{description}</p>
      <div className="flex items-center gap-3">
        <Avatar alt='image avatar' src={imageUrl} sx={{ width: 50, height: 50 }} />
        <div className="">
            <p className="font-medium text-blue-500">{name}</p>
            <p className="text-sm text-gray-500">Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default CardAvatar