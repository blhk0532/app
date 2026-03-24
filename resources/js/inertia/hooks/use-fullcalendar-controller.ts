import { useRef, useState } from 'react'
import type FullCalendar from '@fullcalendar/react'
import type { CalendarApi, DatesSetArg } from '@fullcalendar/core'

interface CalendarButtonState {
  text: string
  hint: string
  isDisabled: boolean
}

export interface CalendarController {
  view?: CalendarApi['view']
  getButtonState(): Record<string, CalendarButtonState>
  today(): void
  prev(): void
  next(): void
  changeView(viewType: string): void
}

const defaultButtonState = (text: string, hint = text): CalendarButtonState => ({
  text,
  hint,
  isDisabled: false,
})

function getViewLabel(viewType: string): string {
  if (viewType.includes('multiMonth')) {
    return 'Year'
  }

  if (viewType.includes('Month')) {
    return 'Month'
  }

  if (viewType.includes('Week')) {
    return 'Week'
  }

  if (viewType.includes('Day')) {
    return 'Day'
  }

  if (viewType.includes('List')) {
    return 'List'
  }

  if (viewType.includes('Timeline')) {
    return 'Timeline'
  }

  return viewType
}

export function useFullCalendarController(availableViews: string[]) {
  const calendarRef = useRef<FullCalendar | null>(null)
  const [, setRenderTick] = useState(0)

  const refreshController = () => {
    setRenderTick((currentTick) => currentTick + 1)
  }

  const getApi = (): CalendarApi | null => {
    return calendarRef.current?.getApi() ?? null
  }

  const controller: CalendarController = {
    get view() {
      return getApi()?.view
    },
    getButtonState() {
      const buttonState: Record<string, CalendarButtonState> = {
        today: defaultButtonState('Today'),
        prev: defaultButtonState('Previous'),
        next: defaultButtonState('Next'),
      }

      availableViews.forEach((viewType) => {
        buttonState[viewType] = defaultButtonState(getViewLabel(viewType), `Change view to ${getViewLabel(viewType)}`)
      })

      return buttonState
    },
    today() {
      getApi()?.today()
      refreshController()
    },
    prev() {
      getApi()?.prev()
      refreshController()
    },
    next() {
      getApi()?.next()
      refreshController()
    },
    changeView(viewType: string) {
      getApi()?.changeView(viewType)
      refreshController()
    },
  }

  const handleDatesSet = (arg: DatesSetArg, callback?: ((arg: DatesSetArg) => void) | undefined) => {
    refreshController()
    callback?.(arg)
  }

  return {
    calendarRef,
    controller,
    handleDatesSet,
  }
}
