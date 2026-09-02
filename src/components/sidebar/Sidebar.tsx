'use client'

import React, { useState } from 'react'
import { SidePanel } from '../ui/SidePanel'
import { CreatePanel } from './panels/CreatePanel'
import { NotificationsPanel } from './panels/NotificationsPanel'
import { MessagesPanel } from './panels/MessagesPanel'
import { Setting } from './panels/Setting'
import { Navigate } from './Navigate'
import { PanelType } from './types/types'

export const Sidebar: React.FC = () => {
  const [activeOpenPanel, setActiveOpenPanel] = useState<PanelType>(null)

  const handlePanelClick = (panel: PanelType) => {
    setActiveOpenPanel(panel)
  }

  const handlePanelClose = () => {
    setActiveOpenPanel(null)
  }

  return (
    <div className='fixed z-50 left-0 h-full flex bg-white'>
     {
      <Navigate handlePanelClick={handlePanelClick} />
     }

      {
        <SidePanel
          open={activeOpenPanel !== null}
          setOpen={handlePanelClose}
          title={
            activeOpenPanel === 'create'
              ? 'Создать'
              : activeOpenPanel === 'notifications'
                ? 'Обновления'
                : activeOpenPanel === 'messages'
                  ? 'Сообщения'
                  : activeOpenPanel === 'setting'
                    ? 'Настройки'
                    : ''
          }
        >
          {activeOpenPanel === 'create' && <CreatePanel />}
          {activeOpenPanel === 'notifications' && <NotificationsPanel />}
          {activeOpenPanel === 'messages' && <MessagesPanel />}
          {activeOpenPanel === 'setting' && <Setting />}
        </SidePanel>
      }
    </div>
  )
}
