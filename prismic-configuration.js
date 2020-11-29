import Prismic from 'prismic-javascript'

// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_API_URL

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, {accessToken})

export const linkResolver = (doc) => {
  if (doc) {
    // URL for a category type
    if (doc.type === 'category') {
      return `/category/${doc.uid}`
    }

    // URL for a tag type
    if (doc.type === 'tag') {
      return `/tag/${doc.uid}`
    }

    // URL for a article type
    if (doc.type === 'article') {
      return `/article/${doc.uid}`
    }
  }

  // Backup for all other types
  return '/'
}

export const hrefResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'category') {
    return '/category/[uid]'
  }

  // URL for a tag type
  if (doc.type === 'tag') {
    return '/tag/[uid]'
  }

  // URL for a article type
  if (doc.type === 'article') {
    return '/article/[uid]'
  }

  // Backup for all other types
  return '/'
}
