import Image from "next/image";

const Button = ({ item,handleClick,cardActiveId}) => {
  return (
    <button type="button" disabled={cardActiveId === item.id} onClick={() => handleClick(item)} className="flex justify-between items-center bg-gray-500 border rounded-l-full cursor-pointer w-full min-h-[70px] transition duration-300 ease-in-out hover:scale-105 gap-4 px-2 pr-8 disabled:bg-[#ef4444]"  >
      <Image className="w-[40px] h-[40px] rounded-full object-cover "
        src={item.icon}
        alt={`perfil de um ${item.name}`}
        width={216}
        height={232}
      />

      <parse className="text-white ">{item.name}</parse>
    </button>
  );
};

export default Button;
