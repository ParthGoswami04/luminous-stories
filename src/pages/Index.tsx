import { posts } from "@/lib/mockData";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";
import { TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-4 font-display text-5xl font-bold leading-tight md:text-6xl">
            Where ideas find <span className="text-gradient-gold">their voice</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed">
            Discover stories, thinking, and expertise from writers on any topic that matters to you.
          </p>
        </div>
      </section>

      {/* Feed */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-16">
          {/* Posts */}
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Trending</h2>
            </div>
            <div>
              {posts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="mb-4 font-display text-lg font-semibold">Recommended Topics</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Technology", "Design", "Programming", "Writing", "Culture", "AI", "UX", "Career"].map((tag) => (
                  <span key={tag} className="cursor-pointer rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-4 font-display text-lg font-semibold">Who to follow</h3>
              <div className="space-y-4">
                {posts.slice(0, 3).map((p) => (
                  <div key={p.author.id} className="flex items-center gap-3">
                    <img src={p.author.avatar} alt={p.author.name} className="h-9 w-9 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.author.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{p.author.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
