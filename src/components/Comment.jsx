import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}  
                src="https://avatars.githubusercontent.com/u/61289109?v=4"
            />

            <div className={styles.commentBox}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Cenci</strong>
                            <time 
                                title="16 de Agosto às 08:13h"
                                dateTime="2022-08-16 08:13:30"
                            >Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}