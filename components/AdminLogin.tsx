import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import { ArrowLeft, Lock } from "lucide-react";

interface AdminLoginProps {
  onLogin: () => void;
  onClose: () => void;
}

// Change this password to your own secure password
// For better security, consider using environment variables or a backend
const ADMIN_PASSWORD = "stefania2024";

export function AdminLogin({ onLogin, onClose }: AdminLoginProps) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple delay to prevent brute force (in a real app, use backend validation)
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // Store authentication in sessionStorage (clears when browser closes)
        sessionStorage.setItem("admin_authenticated", "true");
        toast.success("Access granted");
        onLogin();
      } else {
        toast.error("Invalid password");
        setPassword("");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Button 
          variant="ghost" 
          onClick={onClose}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-foreground/5">
                <Lock className="h-6 w-6" />
              </div>
            </div>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>
              Enter password to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  autoFocus
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={!password || isLoading}
              >
                {isLoading ? "Verifying..." : "Access Admin Panel"}
              </Button>
            </form>

            <div className="mt-6 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong>Security Note:</strong> This is a simple password protection. 
                For production use, consider implementing proper authentication or removing 
                the admin panel after initial setup.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                <strong>Default password:</strong> stefania2024
                <br />
                (Change this in <code>/components/AdminLogin.tsx</code>)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
