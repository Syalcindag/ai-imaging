"use client"
import styles from './styles.module.scss';
import { EXAMPLES } from './constant';
import { Tag } from '@/components/tag';
import Image from 'next/image';

const Examples = () => {

    const handleCopy = () => {

    }
  return (
    <div className={styles.examples}>
        { EXAMPLES.map((example) => (
            <div key={example.id} className={styles.example}>
                <h4>{example.prompt}</h4>
                <Tag title='Copy' onClick={handleCopy} />
                <Image src={example.image} alt={example.prompt} fill />
            </div>
        ))

        }
    </div>
  )
}

export {Examples}