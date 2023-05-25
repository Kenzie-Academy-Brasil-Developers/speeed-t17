import { CardFeedback } from "../../CardFeedback"

import { feedbacks } from '../../../data/feedbacks'

import styles from './styles.module.css'

export const FeedbacksSection = () => {
  const [feedback1, feedback2, feedback3, feedback4] = feedbacks;

  return(
    <section className={styles.container}>
      <h2>O que estão falando sobre a speeed</h2>
      <ul className={styles.cards}>
        <CardFeedback {...feedback1} />
        <CardFeedback {...feedback2} />
        <CardFeedback {...feedback3} />
        <CardFeedback {...feedback4} />
      </ul>
    </section>
  )
}

// Spread Operator
// const feedback = {
//   name: 'João',
//   text: 'Chegou no mesmo dia. Eles não estão para brincadeiras....',
//   image: profile1
// }

// const props = {
//  ...feedback
// }
