import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

function createDateFromString(dateString: string): Date {
  return new Date(dateString + 'T12:00:00Z')
}

export interface BlogPost {
  slug: string
  title: string
  date: Date
  description: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Get the matter data
    const data = matterResult.data as { title: string; date: string; description: string }
    
    // Combine the data with the slug and convert date string to Date object
    return {
      slug,
      content: matterResult.content,
      title: data.title,
      date: createDateFromString(data.date),
      description: data.description
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Get the matter data
    const data = matterResult.data as { title: string; date: string; description: string }
    
    return {
      slug,
      content: matterResult.content,
      title: data.title,
      date: createDateFromString(data.date),
      description: data.description
    }
  } catch {
    return null
  }
}
