import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/authContext";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const WritePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!user) {
    navigate("/login");
    return null;
  }

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Please add a title and content");
      return;
    }
    toast.success("Story published successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold">Tell your story</h1>
          <Button onClick={handlePublish} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Publish
          </Button>
        </div>

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mb-6 border-none bg-transparent font-display text-4xl font-bold placeholder:text-muted-foreground/40 focus-visible:ring-0 p-0 h-auto"
        />

        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tell your story..."
          className="min-h-[60vh] resize-none border-none bg-transparent text-lg leading-[1.8] placeholder:text-muted-foreground/40 focus-visible:ring-0 p-0"
        />
      </div>
    </div>
  );
};

export default WritePage;
