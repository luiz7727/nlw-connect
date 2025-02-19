import medalCooper from '@/assets/medal_cooper.svg'
import medalGold from '@/assets/medal_gold.svg'
import medalSilver from '@/assets/medal_silver.svg'
import Image from 'next/image'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1300
          </span>

          <Image className="absolute right-8 top-0" src={medalGold} alt="" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1300
          </span>

          <Image className="absolute right-8 top-0" src={medalSilver} alt="" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1300
          </span>

          <Image className="absolute right-8 top-0" src={medalCooper} alt="" />
        </div>
      </div>
    </div>
  )
}
