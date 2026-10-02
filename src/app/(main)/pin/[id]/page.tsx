import { PinMain } from '@/components/pin/PinMain'
import { ReplatedPins } from '@/components/pin/ReplatedPins'

export default async function PinPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div className='px-4'>
      {/* Все и вся про открытый пин */}

      <PinMain id={id} />
      {/* Подборка похожих пинов */}

      <ReplatedPins postId={id} />
    </div>
  )
}
