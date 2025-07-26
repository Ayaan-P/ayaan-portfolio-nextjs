import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import { blogPosts } from '@/lib/blog-data'
import ReactMarkdown from 'react-markdown'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="App">
      <div className="bg-gradient"></div>
      <div className="bg-noise"></div>
      
      <Navigation />
      
      <div className="container">
        <div className="blog-post-container">
          <div className="blog-post-header-section">
            <Link href="/blog" className="back-link">
              ← Back to Blog
            </Link>
            <h1 className="blog-post-main-title fade-in">{post.title}</h1>
            <div className="blog-post-main-meta fade-in-delay-1">
              <span className="blog-post-main-date">{formatDate(post.date)}</span>
              <span className="blog-post-main-author">by {post.author}</span>
            </div>
            <div className="blog-post-main-tags fade-in-delay-2">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag-main">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="blog-post-content-section fade-in-delay-3">
            <div className="markdown-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
          
          <div className="blog-post-footer fade-in-delay-3">
            <Link href="/blog" className="back-to-blog-button">
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Ayaan Pupala`,
    description: post.excerpt,
  }
}