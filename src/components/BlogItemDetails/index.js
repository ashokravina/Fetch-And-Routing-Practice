// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoader:true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoader:false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, id, imageUrl, avatarUrl, content, author} = blogData
    return (
      <div className="details-container">
        <h1 className="heading">{title}</h1>

        <div className="author-container">
          <img src={avatarUrl} alt={`author${id}`} className="logo" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="img1" />
        <p className="paragraph">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader}= this.state
    return (
      <div className="blog-container">
        {isLoader ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails