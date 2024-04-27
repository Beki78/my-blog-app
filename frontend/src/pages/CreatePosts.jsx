import React, {useState} from 'react'

const CreatePosts = () => {
const [title, setTitle] = useState('')
const [category, setCategory] = useState('uncategorized')
const [description, setDescription] = useState('')
const [thumbnail, setThunbnail] = useState('')


const postCategories = ['Agricuture', 'Business', 'Education', 'Entertainment', 'Art', 'Culture', 'Tech', 'Uncategorized']

  return (
    <section className='pt-32 flex justify-center items-center h-96 flex-col'>
      <div>
        <h2>Create Post</h2>
        <p>This is an error message</p>
        <form action="">
          <input type="text" placeholder='Enter your title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map(cat => <option key={cat} >{cat}</option>)
            }
            <input type="file" onChange={e => setThunbnail(e.target.file[0])} accept='png,jpg,jpeg'/>
            <button type='submit'>Create</button>
          </select>
        </form>
      </div>
    </section>
  )
}

export default CreatePosts
