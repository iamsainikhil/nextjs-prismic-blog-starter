import dynamic from 'next/dynamic'
import Loader from './Loader'

const Layout = dynamic(() => import('./Layout'), {
  loading: Loader,
})
const Listing = dynamic(() => import('./Listing'), {
  loading: Loader,
})
const Caption = dynamic(() => import('./Caption'), {
  loading: Loader,
})
const Chip = dynamic(() => import('./Chip'), {
  loading: Loader,
})
const Icon = dynamic(() => import('./Icon'), {
  loading: Loader,
})
const Author = dynamic(() => import('./Author'), {
  loading: Loader,
})
const Share = dynamic(() => import('./Share'), {
  loading: Loader,
})
const DisqusComments = dynamic(() => import('./DisqusComments'), {
  loading: Loader,
})
const RelatedArticles = dynamic(() => import('./RelatedArticles'), {
  loading: Loader,
})
const SliceMachine = dynamic(() => import('./SliceMachine'), {
  loading: Loader,
})

export {
  Layout,
  Listing,
  SliceMachine,
  Caption,
  Chip,
  Icon,
  Author,
  Share,
  DisqusComments,
  RelatedArticles,
}
