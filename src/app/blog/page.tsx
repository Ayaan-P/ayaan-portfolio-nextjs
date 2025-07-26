import Navigation from '@/components/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function BlogPage() {
  return (
    <div className="App">
      <div className="bg-gradient"></div>
      <div className="bg-noise"></div>
      
      <Navigation />
      
      <div className="container">
        <div className="blog-container">
          <div className="blog-header">
            <h1 className="main-title fade-in">Blog</h1>
            <p className="subtitle fade-in-delay-1">
              Thoughts on AI, product development, and technology
            </p>
          </div>
          
          <div className="blog-posts fade-in-delay-2">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="blog-post-card" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                <div className="blog-post-content">
                  <div className="blog-post-header">
                    <h2 className="blog-post-title">
                      <Link href={`/blog/${post.id}`} className="blog-post-link">
                        {post.title}
                      </Link>
                    </h2>
                    <div className="blog-post-meta">
                      <span className="blog-post-date">{formatDate(post.date)}</span>
                      <span className="blog-post-author">by {post.author}</span>
                    </div>
                  </div>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <div className="blog-post-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`} className="blog-read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {blogPosts.length === 0 && (
            <div className="no-posts">
              <p>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}