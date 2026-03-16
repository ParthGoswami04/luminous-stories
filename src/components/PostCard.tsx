import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";
import { Post } from "@/lib/mockData";

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  return (
    <Link
      to={`/post/${post.id}`}
      className="group block animate-fade-in border-b border-border py-8 first:pt-0 last:border-b-0"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
    >
      <div className="flex gap-6">
        <div className="flex-1 min-w-0">
          <div className="mb-3 flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="h-6 w-6 rounded-full object-cover" />
            <span className="text-sm font-medium text-foreground">{post.author.name}</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">{post.createdAt}</span>
          </div>

          <h2 className="mb-2 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
            <div className="ml-auto flex items-center gap-3 text-muted-foreground">
              <span className="flex items-center gap-1 text-xs">
                <Heart className="h-3.5 w-3.5" /> {post.likes}
              </span>
              <span className="flex items-center gap-1 text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> {post.comments.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
