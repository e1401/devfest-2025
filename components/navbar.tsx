import Image from 'next/image';

function Navbar() {
  return (
    <div className="flex gap-x-2">
      <Image src={'/GDG.png'} height={40} width={40} alt={'GDG logo'}></Image>
      <div className="text-lg mt-1">Google Developer Groups</div>
    </div>
  );
}

export default Navbar;
