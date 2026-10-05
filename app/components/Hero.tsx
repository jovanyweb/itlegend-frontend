import Image from "next/image";
export default function Hero() {
  return (
    <div className="p-8 grid grid-cols-2 items-center justify-center  bg-blue-900 ">
      <Image
        src="https://itlegend.net/_next/image?url=%2Fassets%2Fimages%2Falishahin.webp&w=640&q=75"
        alt="Ali Shahin"
        width={500}
        height={500}
        className="w-3/4 rounded-2xl"
      />
      <div dir="rtl">
        <h2 className="text-white font-extrabold text-5xl">It Legend</h2>

        <p className="text-blue-100  mt-2 leading-[175%]">
          هي المنصة الأولى والوحيدة اللي هتساعدك تحول البرمجة جزء أساسي من يومك
          معانا هتعيش رحلة تعلم ممتعة مليانة تحديات، مسابقات، مكافآت ومشاريع
          هتأهلك بقوة لسوق العمل.
        </p>
      </div>
    </div>
  );
}
