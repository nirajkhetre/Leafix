import { Toaster } from "@/components/ui/toaster";
import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import BlogList from "@/pages/BlogList";
import BlogPost from "@/pages/BlogPost";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogList} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route>
        <Home /> {/* Fallback to Home or 404 */}
      </Route>
    </Switch>
  );
}

export default App;
