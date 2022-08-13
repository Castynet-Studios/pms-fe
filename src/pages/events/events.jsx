import EventsComp from 'components/events/eventsComp'
import events from '../../events.json'

import styles from './events.module.scss'

const Events = () => {
  return (
    <>
      <div className={styles.eventsWrapper}>
        {events.length > 0 ? (
          <EventsComp events={events} />
        ) : (
          'No events available at the moment :)'
        )}
      </div>
    </>
  )
}
export default Events
