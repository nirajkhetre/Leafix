import { useRoute } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
    const [, params] = useRoute("/blog/:slug");
    const slug = params?.slug;
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        if (post) {
            document.title = `${post.title} | SMP369`;
            // Update meta description if possible, or just rely on title for now
        }
    }, [post]);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/blog">
                        <Button>Return to Blog</Button>
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-poppins">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12">
                <Link href="/blog">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Button>
                </Link>

                <article className="max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                        <div className="flex justify-center gap-2 mb-4">
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="text-muted-foreground">
                            By <span className="font-semibold text-foreground">{post.author}</span> • {post.date}
                        </div>
                    </div>

                    <div className="aspect-video relative overflow-hidden rounded-xl mb-12 shadow-2xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
