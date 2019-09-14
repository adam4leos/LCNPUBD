import React from "react";
import styled from "styled-components";
import facebookLoader from "../services/facebookLoader";

const posts = [
    "https://www.facebook.com/LCNPUBD/posts/2914490368568362",
    "https://www.facebook.com/LCNPUBD/posts/2913809158636483",
    "https://www.facebook.com/LCNPUBD/posts/2893640043986728"
];

const PostsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Media extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        facebookLoader();
    };

    render() {
        return (
            <main className="main">
                <PostsSection>
                {posts.map(post => (
                    <div key={post} className="fb-post" data-href={post} />
                ))}
                </PostsSection>
            </main>
        );
    }
}

export default Media;
