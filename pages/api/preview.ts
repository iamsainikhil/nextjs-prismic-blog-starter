import { NextApiRequest, NextApiResponse } from 'next'
import Prismic from 'prismic-javascript'

import {linkResolver} from '../../prismic-configuration'

const apiEndpoint = process.env.PRISMIC_API_URL
const accessToken = process.env.PRISMIC_TOKEN

// Client method to query from the Prismic repo
const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? {req} : {}
  const accessTokenOption = prismicAccessToken
    ? {accessToken: prismicAccessToken}
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const {token: ref, documentId} = req.query

  const redirectUrl = await Client(req)
    .getPreviewResolver(ref as string, documentId as string)
    .resolve(linkResolver, '/')

  if (!redirectUrl) {
    return res.status(401).json({message: 'Invalid token'})
  }

  res.setPreviewData({ref})
  res.writeHead(302, {Location: `${redirectUrl}`})
  res.end()
}

export default Preview
