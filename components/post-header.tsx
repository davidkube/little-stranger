import Avatar from './avatar'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  timestamp: string
  author: Author
}

const PostHeader = ({ title, coverImage, author, timestamp }: Props) => {
  return (
    <>
    
      <PostTitle>{title}</PostTitle>
      <hr className='my-12'></hr>
      <div className="px-20 mx-auto">
        <h3>{timestamp}</h3>
      </div>
    </>
  )
}

export default PostHeader
