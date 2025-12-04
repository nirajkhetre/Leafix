import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogList() {
    return (
        <div className="min-h-screen flex flex-col font-poppins">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        SMP369 Blog
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Latest news, updates, and guides for the ultimate Minecraft SMP experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <a className="block h-full transition-transform hover:scale-[1.02]">
                                <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex gap-2 mb-2">
                                            {post.tags.slice(0, 2).map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <CardTitle className="line-clamp-2 text-xl">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {post.date} • {post.author}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </CardContent>
                                </Card>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
