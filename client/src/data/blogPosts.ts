export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "experience-survival-evolved-welcome-to-smp369",
    title: "Experience Survival Evolved: Welcome to SMP369",
    excerpt: "Discover the ultimate Minecraft SMP experience with SMP369. From a protected lobby to random teleportation, join a community that redefines survival multiplayer.",
    date: "December 5, 2025",
    author: "SMP369 Team",
    image: "/assets/blog/screenshot1.png",
    tags: ["Minecraft SMP", "Survival Server", "Minecraft Community", "SMP369"],
    metaDescription: "Join SMP369, the premier Minecraft Survival Multiplayer server. Features include a custom lobby, RTP system, and a thriving community. Play now at play.smp369.online!",
    content: `
# Welcome to SMP369: The Ultimate Survival Experience

Are you looking for a Minecraft server that balances classic survival with modern features? Look no further than **[SMP369](https://smp369.online)**! Our server is designed to provide a premium survival multiplayer (SMP) experience for players who love to grind, build, and explore.

**Server IP:** [\`play.smp369.online\`](https://smp369.online)
**Bedrock Port:** \`64412\`

## A Safe Start in Our Custom Lobby

Your journey begins in our beautifully designed **Lobby**. It's more than just a spawn point; it's a safe haven where you can prepare for your adventure.
- **Protection:** No need to worry about hunger or damage here.
- **Launchpads:** Use our Golden Pressure Plates to launch yourself into the air and explore the hub!
- **Community:** Meet other players, trade, and form teams before heading out into the wild.

## Explore the World with RTP

Getting started on a new server can be tough if all the nearby land is claimed or looted. That's why we've implemented a robust **Random Teleport (RTP)** system.
Simply type \`/rtp\` to be teleported to a random, safe location in the survival world. Our system ensures you won't land in lava or water, giving you the perfect fresh start to build your base.

## Why Choose SMP369?

We believe in "Survival Evolved." We've kept the core mechanics you love but enhanced them with quality-of-life features that make gameplay smoother and more rewarding. Whether you're a solo player looking to climb the ranks or a group of friends wanting to build an empire, SMP369 is the place for you.

**Join us today at [\`play.smp369.online\`](https://smp369.online) and start your legend!**
    `
  },
  {
    slug: "master-the-economy-ranks-shops-and-spawners",
    title: "Master the Economy: Ranks, Shops, and Spawners on SMP369",
    excerpt: "Learn how to dominate the economy on SMP369. From mining ores for rank upgrades to automating loot with custom spawners, here is your guide to riches.",
    date: "December 4, 2025",
    author: "SMP369 Team",
    image: "/assets/blog/screenshot2.png",
    tags: ["Minecraft Economy", "Minecraft Ranks", "Custom Spawners", "SMP369 Guide"],
    metaDescription: "Master the SMP369 economy! Learn about our unique ore-based rank progression, custom spawners with storage, and how to use the Auction House to become the richest player.",
    content: `
# Master the Economy on SMP369

On **[SMP369](https://smp369.online)**, wealth isn't just about having the most diamonds—it's about mastering our unique economic systems. From our custom rank progression to upgraded spawners, there are many ways to rise to the top.

## Grind for Greatness: Rank Progression

Forget "pay-to-win." On SMP369, you have to earn your status. Our rank system is based on **Items & Money**, meaning you need to mine specific ores to prove your worth.

- **Novice:** Everyone starts here.
- **Explorer:** Costs $5,000 + 150 Iron Ore. Unlocks better shop discounts and faster RTP.
- **Artisan:** Costs $10,000 + 200 Gold Ore. Unlocks **Auto-Smelt**!
- **Captain:** Costs $20,000 + 300 Redstone Ore. Unlocks **/fly** and Player Vaults.
- **Champion & Legend:** For the ultimate grinders, unlocking massive perks like **No Auction Tax** and **Permanent Spawner Boosts**.

## The Marketplace: Shop & Auction House

Need resources?
- **Server Shop:** Use \`/shop\` to buy and sell essentials.
- **Auction House:** Use \`/ah\` to trade with other players. You can list your rare finds or buy gear from others.
- **Quick Sell:** Holding an item? Type \`/sell\` to instantly sell it to the server.

## Automate with Custom Spawners

We've revolutionized mob grinding. Our spawners aren't just standard blocks; they are powerful machines.
- **Internal Storage:** Spawners automatically collect XP and Loot. No more laggy item entities on the ground!
- **Upgrades:** As you rank up, your spawner speed increases (up to 2x speed for Champions!).
- **Custom Drops:** Zombies drop Iron, Skeletons drop Arrows, and Iron Golems drop 3x Iron Ingots!

Start your economic empire today at **[play.smp369.online](https://smp369.online)**!
    `
  },
  {
    slug: "getting-started-guide-essential-commands-and-tips",
    title: "Getting Started Guide: Essential Commands & Tips for SMP369",
    excerpt: "New to SMP369? Check out this essential guide covering commands, homes, teams, and combat protections to help you survive and thrive.",
    date: "December 3, 2025",
    author: "SMP369 Team",
    image: "/assets/blog/screenshot3.png",
    tags: ["Minecraft Guide", "Minecraft Commands", "SMP369 Tutorial", "New Player Guide"],
    metaDescription: "New to SMP369? Read our Getting Started Guide! Learn essential commands like /rtp, /sethome, and /team, plus understand our combat tag and protection systems.",
    content: `
# Getting Started on SMP369

Welcome, survivor! If you've just joined **[SMP369](https://smp369.online)** (IP: [\`play.smp369.online\`](https://smp369.online)), you might be wondering where to start. This guide covers the essentials to help you survive your first night and beyond.

## Essential Commands

- **/rtp**: Randomly teleport to the wild to find a spot to build.
- **/sethome [name]**: Set a home at your current location. Never lose your base again!
- **/home [name]**: Teleport back to your saved home.
- **/spawn**: Return to the safe lobby.
- **/tpa [player]**: Request to teleport to a friend.

## Team Up!

Survival is better together. SMP369 features a full **Team System**.
- **/team create [name]**: Start your own clan.
- **/team invite [player]**: Invite friends to join you.
- **/team info**: Check your team's stats.
Teams can share resources and dominate the server together!

## Combat & Protection

We want fair play for everyone.
- **Combat Tag:** If you engage in PVP, you are "tagged" for 20 seconds. Do not disconnect! If you combat log, you will instantly die and lose your items.
- **Lobby Safety:** The lobby is a no-PVP zone. You are safe there.

## Ready to Play?

Now that you know the basics, it's time to jump in.
**Server IP:** [\`play.smp369.online\`](https://smp369.online)
**Bedrock Port:** \`64412\`

See you in the world of SMP369!
    `
  },
  {
    slug: "discover-spur-space-local-activities-pune",
    title: "Spur Space: The Ultimate App to Find Local Activities & Meet New People in Pune",
    excerpt: "Looking for things to do in Pune? Spur Space helps you find local activities, join spontaneous plans, and meet people who actually show up.",
    date: "February 12, 2026",
    author: "Spur Space Team",
    image: "/assets/blog/spur-space-hero.jpg",
    tags: ["Social App", "Pune Events", "Meet New People", "Local Activities", "Spur Space"],
    metaDescription: "Discover Spur Space, the ultimate app for finding local activities in Pune. Join meetups for coffee, hiking, or dinner and connect with people near you.",
    content: `
# Discover Spur Space: Your Gateway to Real Connections in Pune

Have you ever wanted to explore a new cafe in Koregaon Park, go for a sunrise hike at Vetal Tekdi, or just grab a quick dinner in Baner, but didn't have anyone to go with? Maybe your friends are busy, or you're new to the city and haven't found your crew yet.

**You are not alone.** And that's exactly why [Spur Space](https://spurspace.in) was created.

## What is Spur Space?

Spur Space is a mobile app designed for travelers, locals, and anyone looking to make real-world connections. It simplifies the process of finding and creating activities—what we call **"Spurs"**—happening right now around you.

Instead of endless swiping or empty chats, Spur Space focuses on **doing**. It's about shared experiences, whether that's a movie night, a photography walk, or a spontaneous food run.

## Go. Pin. Meet.

The philosophy is simple:

1.  **Go:** Open the app and see what's happening on the map.
2.  **Pin:** Find a "Spur" (activity) pinned on the map that interests you.
3.  **Meet:** Join the activity and meet up with people who actually show up.

If you don't see an activity you like, simply create your own! Pin a location, set a time, and let others join you.

## Why Choose Spur Space?

### 1. Real-Time Activities
Spur Space is built for spontaneity. See what's happening *now* or plan for the immediate future. No more planning weeks in advance for plans that might get cancelled.

### 2. Verified Community
We prioritize safety and authenticity. Join a community of verified users who are genuinely interested in meeting up and doing things.

### 3. Explore Your City
Discover hidden gems in Pune. From street food trails to cultural workshops, Spur Space helps you experience the city in a whole new way.

## Ready to Join?

Don't let a free weekend go to waste. Download the app today and start exploring Pune with new friends.

**Visit our website:** [spurspace.in](https://spurspace.in)

*Join the movement. Create your space. Find your spur.*
    `
  }
];
