import { Tag } from '@/components/tag';
import {SUGGESTIONS} from './constant';
import styles from './styles.module.scss'

const PromptSuggestions = () => {
  return (
    <div className={styles.PromptSuggestions}>
        <h3 className={styles.title}>
            Nothing in mind? Try one of these promps:
        </h3>
        <div className={styles.suggestions}>
            {SUGGESTIONS.map((suggestion) => (
                <Tag title={suggestion.title} key={suggestion.id} />
            ))

            }
        </div>
    </div>
  )
}

export  {PromptSuggestions}