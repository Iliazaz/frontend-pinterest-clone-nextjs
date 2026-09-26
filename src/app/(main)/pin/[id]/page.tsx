import { Author } from '@/components/pin/Author'
import { ButtonPins } from '@/components/pin/ButtonPins'
import { CommentsMain } from '@/components/pin/comments/CommentsMain'
import { ImageMain } from '@/components/pin/ImageMain'
import { PinMain } from '@/components/pin/PinMain'
import { FormComments } from '@/components/ui/form-comments'

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
    </div>
  )
}
