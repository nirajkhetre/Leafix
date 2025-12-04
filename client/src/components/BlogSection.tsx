import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function BlogSection() {
    // Get the latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="py-20 bg-neutral-light/30">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    variants={fadeIn('up', 'tween', 0.1, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-dark">Latest News & Updates</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay up to date with the latest features, guides, and community events on SMP369.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {latestPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            variants={fadeIn('up', 'tween', 0.2 + (index * 0.1), 1)}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <a className="block h-full transition-transform hover:scale-[1.02]">
                                    <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md bg-white">
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
                                            <p className="text-muted-foreground line-clamp-3 text-sm">
                                                {post.excerpt}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </a>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center"
                    variants={fadeIn('up', 'tween', 0.5, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Link href="/blog">
                        <a className="inline-block">
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                                View All Blogs
                            </Button>
                        </a>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
