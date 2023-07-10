import Image from 'next/image';

function Navbar() {
  return (
    <div className="flex gap-x-2">
      <Image src={'/GDG.png'} height={35} width={35} alt={'GDG logo'}></Image>
      <div className="text-md mt-1">Google Developer Groups</div>
    </div>
  );
}

export default Navbar;
