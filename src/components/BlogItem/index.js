// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {itemDetails} = props
  const {imageUrl, title, authorUrl, author, topic, id} = itemDetails
  return (
    <Link className="blogitem-link" to={`/blogs/${id}`}>
      <li className="list-type">
        <div className="item-container">
          <img src={imageUrl} alt={`item${id}`} className="img" />
          <div className="card-item">
            <p className="title">{topic}</p>
            <p className="link">{title}</p>
            <div className="author-card">
              <img src={authorUrl} alt={`author${id}`} className="logo" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
