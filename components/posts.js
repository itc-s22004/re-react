import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { eyecatchLocal } from 'lib/constants'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <h2>{title}</h2>
                        <figure>
                            <Image
                                src={eyecatchLocal.url}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                                objectFit="cover"
                                sizes="(min-width: 1152px) 576px, 50vw"
                                width={eyecatchLocal.width}
                                height={eyecatch.height}
                                placeholder="blur"
                                blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>
                    </Link>
                </article>
            ))}
        </div>
    )
}
