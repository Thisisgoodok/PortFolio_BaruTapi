import { brand } from '../Data/Portfolio'
import Container from './Container'

function Footer({ brand: brandProp, name = 'Portfolio', builtWith, year = new Date().getFullYear() }) {
  const displayBrand = brandProp || brand || name

  return (
    <footer className="border-t border-teal-500/20 bg-base-100 transition-colors dark:border-teal-500/10">
      <Container className="flex flex-col items-center justify-between gap-3 py-8 text-center text-sm text-base-content/60 sm:flex-row sm:text-left">
        <p>
          © {year}{' '}
          <span className="font-medium text-teal-600 dark:text-teal-400">
            {displayBrand}
          </span>
          . All rights reserved.
        </p>
        {builtWith && (
          <p>
            Dibuat dengan{' '}
            <span className="font-medium text-teal-600 dark:text-teal-400">
              {builtWith}
            </span>
          </p>
        )}
      </Container>
    </footer>
  )
}

export default Footer