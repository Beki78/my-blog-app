import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor';
import book from "../assets/book.jpg"

const PostDetail = () => {
  return (
    <section className="">
      <div className="p-2 m-4 mt-16 max-w-lg border-solid border-x-zinc-700 shadow-md shadow-slate-700 round-lg border-black mx-auto">
        <div className='flex justify-between items-center'>
          <PostAuthor />
          <div>
            <Link className='bg-slate-500 m-4 hover:bg-slate-600 rounded  p-1' to={`/posts/asjd/edit`}>Edit</Link>
            <Link className='bg-slate-500 m-4 hover:bg-slate-600 rounded  p-1' to={`/posts/asjd/delete`}>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div>
          <img className="p-2" src={book} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ad
          molestiae error, inventore rem amet ab autem aspernatur iure
          voluptatum, repellat ex sed architecto necessitatibus obcaecati, a non
          laboriosam laudantium?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          libero cumque architecto aut corrupti, commodi quisquam minima iusto,
          sit impedit veritatis sed accusamus soluta. A provident neque illum,
          voluptates iste quae doloribus quibusdam reiciendis possimus.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam neque
          consequatur, voluptatem asperiores ducimus aliquam quod? Minima ad
          architecto quas totam deleniti iste eos nostrum, aspernatur, saepe
          harum recusandae ut adipisci quaerat qui molestiae, quae amet dolore
          sit? Blanditiis voluptatum consequatur culpa ut laudantium
          perspiciatis rem, harum ab delectus nam at, voluptas illo modi
          doloribus quis nulla numquam debitis consectetur neque expedita dolor?
          Alias, natus veniam iste, voluptatibus, vel amet perferendis dolore
          soluta eum nemo officia sit blanditiis voluptate repudiandae. Nihil,
          minus cumque? Quibusdam earum adipisci praesentium. Debitis eaque
          blanditiis iste neque ex omnis maxime sunt doloribus a. Aliquam, iure
          recusandae! Adipisci vero explicabo dicta aut tempore aliquam enim
          veniam similique.
        </p>
      </div>
    </section>
  );
}

export default PostDetail
