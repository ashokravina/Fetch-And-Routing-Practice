// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blodsList: [], isLoader: true}
  componentDidMount() {
    this.getBlogItemList()
  }
  getBlogItemList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const upDatedBlogItem = data.map(each => ({
      id: each.id,
      title: each.title,
      topic: each.topic,
      imageUrl: each.image_url,
      authorUrl: each.avatar_url,
      author: each.author,
    }))
    this.setState({
      blodsList: upDatedBlogItem,
      isLoader: false,
    })
  }
  render() {
    const {blodsList, isLoader} = this.state
    return (
      <ul className="list-container">
        {isLoader ? (
          <Loader width={50} height={50} type="TailSpin" color="#2f4f4f" />
        ) : (
          blodsList.map(eachItem => (
            <BlogItem key={eachItem.id} itemDetails={eachItem} />
          ))
        )}
      </ul>
    )
  }
}
export default BlogList
