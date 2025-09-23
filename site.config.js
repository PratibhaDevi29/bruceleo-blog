const CONFIG = {
  // profile setting (required)
  profile: {
    name: "YourName", // Replace with your actual name
    image: "/bruceleo.png", // You can change this later with your own image
    role: "CTF Player & Security Researcher",
    bio: "Documenting CTF writeups and web security learnings. Always learning, always hacking.",
    email: "your-email@example.com", // Replace with your email
    linkedin: "your-linkedin-username", // Replace with your LinkedIn username (optional)
    github: "your-github-username", // Replace with your GitHub username
    instagram: "", // Optional - add if you want
  },
 
  // blog setting (required)
  blog: {
    title: "CTF Writeups & Security Blog",
    description: "CTF writeups, web security research, and penetration testing insights!",
    scheme: "dark", // 'light' | 'dark' | 'system' - dark is perfect for CTF content
  },
  // CONFIG configration (required)
  link: "https://your-blog-name.vercel.app", // This will be your actual Vercel URL
  since: 2024, // Year you started blogging
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // Keep this as is
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  // plugin configuration (optional)
  googleAnalytics: {
    enable: true, // Enable this for tracking blog views
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true, // Enable for better SEO
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false, // Keep disabled unless you need Korean search optimization
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true, // Great for CTF community discussions
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "", // Format: "your-username/your-repo-name"
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
