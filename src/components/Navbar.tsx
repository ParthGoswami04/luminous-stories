import { Link } from "react-router-dom";
import { useAuth } from "@/lib/authContext";
import { PenLine, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-display text-2xl font-bold text-gradient-gold">
          Inkwell
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link to="/write">
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                  <PenLine className="h-4 w-4" />
                  Write
                </Button>
              </Link>
              <button onClick={logout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/30" />
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
