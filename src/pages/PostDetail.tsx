//this is for posting the blog in the website
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { posts } from "@/lib/mockData";
import { useAuth } from "@/lib/authContext";
import Navbar from "@/components/Navbar";
import { Heart, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Comment } from "@/lib/mockData";

const PostDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const post = posts.find((p) => p.id === id);
  const [likes, setLikes] = useState(post?.likes ?? 0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post?.comments ?? []);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold">Post not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    setLikes((l) => (liked ? l - 1 : l + 1));
  };

  const handleComment = () => {
    if (!newComment.trim() || !user) return;
    const comment: Comment = {
      id: `c-${Date.now()}`,
      author: user,
      content: newComment.trim(),
      createdAt: "Just now",
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="container mx-auto max-w-3xl px-4 py-12">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <img src={post.author.avatar} alt={post.author.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
          <div>
            <p className="font-medium text-foreground">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.createdAt} · {post.readTime}</p>
          </div>
        </div>

        <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>

        <div className="mb-8 flex gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{tag}</span>
          ))}
        </div>

        <div className="prose-custom mb-12 space-y-4 text-foreground/90 leading-[1.8] text-lg">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="font-display text-2xl font-bold mt-8 mb-4 text-foreground">{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("**")) {
              return <p key={i} className="text-foreground font-medium" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary'>$1</strong>") }} />;
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 border-y border-border py-4 mb-12">
          <button onClick={handleLike} className={`flex items-center gap-2 text-sm transition-colors ${liked ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            <Heart className={`h-5 w-5 ${liked ? "fill-primary" : ""}`} /> {likes}
          </button>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageCircle className="h-5 w-5" /> {comments.length}
          </span>
        </div>

        {/* Comments */}
        <section>
          <h3 className="mb-6 font-display text-2xl font-bold">Responses ({comments.length})</h3>

          {user ? (
            <div className="mb-8 rounded-lg border border-border bg-card p-4">
              <div className="mb-3 flex items-center gap-3">
                <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
                <span className="text-sm font-medium text-foreground">{user.name}</span>
              </div>
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="What are your thoughts?"
                className="mb-3 min-h-[100px] resize-none border-border bg-background text-foreground placeholder:text-muted-foreground"
              />
              <div className="flex justify-end">
                <Button onClick={handleComment} disabled={!newComment.trim()} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Respond
                </Button>
              </div>
            </div>
          ) : (
            <div className="mb-8 rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-muted-foreground mb-3">Sign in to join the conversation</p>
              <Link to="/login">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Sign In</Button>
              </Link>
            </div>
          )}

          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-border pb-6 last:border-b-0">
                <div className="mb-2 flex items-center gap-3">
                  <img src={comment.author.avatar} alt={comment.author.name} className="h-8 w-8 rounded-full object-cover" />
                  <span className="text-sm font-medium text-foreground">{comment.author.name}</span>
                  <span className="text-xs text-muted-foreground">{comment.createdAt}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed pl-11">{comment.content}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default PostDetail;
