import Article from "./Article"

function ArticleList({ posts }) {
    return (
        <main>
          {posts.map((post) => {
            return <Article key={post.id} title={post.title} date={post.title} preview={post.title} />
          })}
        </main>
    )
}

export default ArticleList;