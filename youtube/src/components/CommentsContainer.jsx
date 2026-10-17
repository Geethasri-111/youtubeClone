import React from 'react'

import profileIcon from '../assets/user.png'

   const commentData = [
        {
        name:'xyz',
        content:'xyzzz',
        replies:[
            {
                name:'xyz',
                content:'xyzzz',
                replies:[
                    {
                        name:'xyz',
                        content:'xyzzz',
                        replies:[
                        {
                            name:'xyz',
                            content:'xyzzz',
                            replies:[{
                                 name:'xyz',
                                content:'xyzzz',
                                replies:[
                                    {
                                        name:'xyz',
                                        content:'xyzzz',
                                        replies:[
                                        {
                                            name:'xyz',
                                            content:'xyzzz',
                                            replies:[]
                                        }
                                    ],
                                    }
                                ],
                            }]
                        }
                    ],
                    }
                ],
                name:'xyz',
                content:'xyzzz',
                replies:[
                    {
                        name:'xyz',
                        content:'xyzzz',
                         replies:[]
                    }
                ],
                name:'xyz',
                content:'xyzzz',
                replies:[
                    {
                        name:'xyz',
                        content:'xyzzz',
                         replies:[]
                    }
                ],
                
             }
        ]
    },{
        name:'xyz',
        content:'xyzzz',
         replies:[
            {
                            name:'xyz',
                            content:'xyzzz',
                            replies:[{
                                 name:'xyz',
                                content:'xyzzz',
                                replies:[
                                    {
                                        name:'xyz',
                                        content:'xyzzz',
                                        replies:[
                                        {
                                            name:'xyz',
                                            content:'xyzzz',
                                            replies:[]
                                        }
                                    ],
                                    }
                                ],
                            }]
                        }
         ]
    },{
        name:'xyz',
        content:'xyzzz',
         replies:[]
    },{
        name:'xyz',
        content:'xyzzz',
         replies:[]
    },
];

const Comment = ({data}) => {
    const {name,content,replies} = data;
    return (
        <div className='flex m-2'>
            <div><img className='w-10 h-8' src={profileIcon} alt="user"/></div>
            <div>
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

const CommentsList= ({repliesData}) => {
    return repliesData.map((reply,index) => (
        <div key={index}><Comment data={reply} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList repliesData={reply.replies}/>
            </div>
        </div>
    ));
}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold'>comment</h1>
      <CommentsList repliesData={commentData}/>
    </div>
  )
}

export default CommentsContainer
