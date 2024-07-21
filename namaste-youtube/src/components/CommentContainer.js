import React from 'react'
import profile from '../assets/profile.svg'
const commentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
];

const Comment=({data})=>{
  console.log(data)
  // replies is an array of object
  const {name,text,replies}=data
  return(
    <div className='flex'>
      <img src={profile} className='w-8 h-8' alt={name} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className=''>{text}</p>
      </div>
    </div>
  )
}

// Using recurssion to perform n-level nesting

const CommentsList=({comments})=>{
  // console.log(comments)
  return (
    <>
      {
        comments.map((comment,index)=>(
          <div key={index}>
            <Comment data={comment}/>
            <div className='pl-5 ml-5 border border-l-black'>
              {
                comment.replies && <CommentsList comments={comment.replies}/>
              }
            </div>
          </div>
        ))
      }
    </>
  )
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-xl'><b>Comments: </b></h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer