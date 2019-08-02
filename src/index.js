// // import the React and ReactDom libraries
// import React from 'react';
// import ReactDom from 'react-dom';

// // function getButtonText(){
// //     return 'Click Me!'
// // };

// // Create a react component
// const App = () => {
//     const buttonText = {text:'Click me'};
//     return (
//         <div>
//             <label className="label" htmlFor='name'>
//                 Enter Name:
//             </label>
//             <input id="name" type="text" />
//             <button style={{ backgroundColor: 'blue', color: 'white' }}>
//                 {buttonText.text}
//             </button>
//         </div>
//     );
// };

// // Take the react component and show it on the screen
// ReactDom.render(
//     <App />,
//     document.querySelector('#root'),
// );


import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 1:30PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));