import Navigation from '@/components/navigation'

export default function BlogPage() {
  return (
    <div className="App">
      <div className="bg-gradient"></div>
      <div className="bg-noise"></div>
      
      <Navigation />
      
      <div className="container">
        <div className="profile-container">
          <div className="profile-content">
            <div className="name-container">
              <h1 className="main-title fade-in">
                Blog
              </h1>
              <p className="subtitle fade-in-delay-1">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}