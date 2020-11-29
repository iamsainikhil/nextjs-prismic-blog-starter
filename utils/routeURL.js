import {useRouter} from 'next/router'

export default function routeURL() {
  const router = useRouter()
  return router.asPath
}
