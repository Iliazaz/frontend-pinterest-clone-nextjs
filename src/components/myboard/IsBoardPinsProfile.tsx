import React from 'react'
import { DashBordCard } from '../DashBordCard'
import { SavePinsBoard } from './boards/pin/savePinsBoard'
import { CreatedBoardPins } from './boards/pin/createdBoardPins'
import { IsPrivateBoardCreatedPins } from './boards/pin/isPrivateBoardCreatedPins'
import { useGetAllDashBoard } from '@/hook/dashboard/useGetAllDashBoard'
import { Loading } from '../Loading'

interface IsBoardPinsProfilePros {
  activeSort: string
}

export const IsBoardPinsProfile: React.FC<IsBoardPinsProfilePros> = ({
  activeSort,
}) => {
  const { data, isPending } = useGetAllDashBoard()

  return (
    // {/* Часть с пинами */}
    <div className='flex flex-col gap-5 mx-5 my-12'>
      {/* Рекомендованные доски */}
      {isPending ? (
        <Loading />
      ) : (
        <>
          <div className=''>
            <h2 className='font-bold text-xl mb-5'>Рекомендуемые доски</h2>

            {/* Карточка доски */}

            {data?.map((items) => (
              <DashBordCard
                key={items.id}
                name={items.name}
                imageUrl={items.posts[0].imageURL}
              />
            ))}
          </div>

          {/* Пины профиля пользователя */}
          <div className=''>
            <h2 className='font-bold text-xl mb-5'>Ваши сохраненные пины</h2>
            {/* Доска с пинами */}
            {activeSort === 'saved' ? (
              <SavePinsBoard />
            ) : activeSort === 'mine' ? (
              <CreatedBoardPins />
            ) : (
              <IsPrivateBoardCreatedPins />
            )}
            {/* <PinBoard pins={pins} loadMoreRef={loadMoreRef} /> */}
          </div>
        </>
      )}
    </div>
  )
}
